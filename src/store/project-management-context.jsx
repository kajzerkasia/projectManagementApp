import {createContext, useReducer, useRef} from 'react';

export const ProjectContext = createContext({
    onToggleAddProject: () => {
    },
    tabButtons: [],
    addProjectIsOpen: false,
    projects: [],
    selectedButton: null,
    onAddProject: () => {
    },
    onDeleteProject: () => {
    },
    onSelect: () => {},
    onTaskAdd: () => {},
    onTaskDelete: () => {},
    onTabButtonClick: () => {},
});

function projectManagementReducer(state, action) {

    if (action.type === 'ADD_PROJECT') {
        const {title, description, dueDate} = action.payload;

        if (title.trim() === '' || description.trim() === '' || dueDate.trim() === '') {
            state.modalRef.current.open();
        } else {
            return ({
                ...state,
                tabButtons: [...state.tabButtons, title],
                projects: [
                    ...state.projects,
                    {
                        title,
                        description,
                        dueDate,
                        tasks: [],
                    },
                ],
            });
        }
    }

    if (action.type === 'DELETE_PROJECT') {
        const updatedTabButtons = [...state.tabButtons];
        updatedTabButtons.splice(action.projectIndex, 1);

        const updatedProjects = [...state.projects];
        updatedProjects.splice(action.projectIndex, 1);

        return {
            ...state,
            tabButtons: updatedTabButtons,
            projects: updatedProjects,
            selectedButton: null,
        };
    }

    if (action.type === 'TOGGLE_ADD_PROJECT') {
        return {
            ...state,
            addProjectIsOpen: !state.addProjectIsOpen,
        }
    }

    if (action.type === 'ADD_TASK') {
        const { projectIndex, newTask } = action.payload;

        if (projectIndex >= 0 && projectIndex < state.projects.length) {
            const updatedProjects = [...state.projects];

            if (!updatedProjects[projectIndex].tasks) {
                updatedProjects[projectIndex].tasks = [];
            }

            if (!updatedProjects[projectIndex].tasks.includes(newTask)) {
                updatedProjects[projectIndex].tasks.push(newTask);
                return { ...state, projects: updatedProjects };
            } else {
                return state;
            }
        } else {
            console.error(`Invalid projectIndex: ${projectIndex}`);
            return state;
        }
    }

    if (action.type === 'DELETE_TASK') {
        const { projectIndex, taskIndex } = action.payload;

        if (projectIndex >= 0 && projectIndex < state.projects.length) {
            const project = state.projects[projectIndex];

            if (taskIndex >= 0 && taskIndex < project.tasks.length) {
                const updatedProjects = [...state.projects];
                updatedProjects[projectIndex].tasks.splice(taskIndex, 1);
                return { ...state, projects: updatedProjects };
            } else {
                console.error(`Invalid taskIndex: ${taskIndex}`);
            }
        } else {
            console.error(`Invalid projectIndex: ${projectIndex}`);
        }

        return state;
    }

    // @TODO: Fix the error when deleting tasks, test the application to see if there are any more errors

    if (action.type === 'SELECT_BUTTON') {
        return {
            ...state,
            selectedButton: action.payload,
            addProjectIsOpen: false,
        };
    }

    if (action.type === 'TOGGLE_TAB_BUTTON_CLICK') {
        if (action.payload === state.selectedButton) {
            return {
                ...state,
                selectedButton: null,
                addProjectIsOpen: false,
            };
        } else {
            return {
                ...state,
                selectedButton: action.payload,
                addProjectIsOpen: false,
            };
        }
    }

}

export default function ProjectContextProvider({children}) {
    const modalRef = useRef();

    const [mainViewState, mainViewDispatch] = useReducer(
        projectManagementReducer,
        {
            tabButtons: [],
            addProjectIsOpen: false,
            projects: [],
            selectedButton: null,
            modalRef: modalRef,
        });

    const handleSaveClick = (newProject) => {

        mainViewDispatch({
            type: 'ADD_PROJECT',
            payload: newProject,
        })

    };

    const handleProjectDelete = projectIndex => {

        mainViewDispatch({
            type: 'DELETE_PROJECT',
            payload: projectIndex,
        })

    };

    const toggleAddProject = () => {

        mainViewDispatch({
            type: 'TOGGLE_ADD_PROJECT',
        })
    };

    const handleTaskAdd = (projectIndex, newTask) => {

        mainViewDispatch({
            type: 'ADD_TASK',
            payload: {
                projectIndex,
                newTask,
            },
        })
    };

    const handleTaskDelete = (projectIndex, taskIndex) => {

        mainViewDispatch({
            type: 'DELETE_TASK',
            payload: {
                projectIndex,
                taskIndex,
            },
        })
    };

    const handleSelect = selectedButton => {

        mainViewDispatch({
            type: 'SELECT_BUTTON',
            payload: selectedButton,
        })

    };

    const handleTabButtonClick = (index) => {

        mainViewDispatch({
            type: 'TOGGLE_TAB_BUTTON_CLICK',
            payload: index,
        })

    };

    const ctxValue = {
        tabButtons: mainViewState.tabButtons,
        addProjectIsOpen: mainViewState.addProjectIsOpen,
        projects: mainViewState.projects,
        selectedButton: mainViewState.selectedButton,
        onToggleAddProject: toggleAddProject,
        onSelect: handleSelect,
        onAddProject: handleSaveClick,
        onDeleteProject: handleProjectDelete,
        onTaskAdd: handleTaskAdd,
        onTaskDelete: handleTaskDelete,
        onTabButtonClick: handleTabButtonClick,
    };

    return <ProjectContext.Provider value={ctxValue}>
        {children}
    </ProjectContext.Provider>

}
