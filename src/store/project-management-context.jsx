import {createContext, useReducer} from 'react';

export const ProjectContext = createContext({
    onToggleAddProject: () => {
    },
    tabButtons: [],
    addProjectIsOpen: false,
    projects: [],
    selectedButton: null,
    modalIsOpen: false,
    onCloseModal: () => {
    },
    onAddProject: () => {
    },
    onDeleteProject: () => {
    },
    onSelect: () => {
    },
    onTaskAdd: () => {
    },
    onTaskDelete: () => {
    },
    onTabButtonClick: () => {
    },
});

function projectManagementReducer(state, action) {

    if (action.type === 'ADD_PROJECT') {
        const {title, description, dueDate} = action.payload;

        if (title.trim() === '' || description.trim() === '' || dueDate.trim() === '') {
            return {
                ...state,
                modalIsOpen: true,
            };
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
        updatedTabButtons.splice(action.payload, 1);

        const updatedProjects = [...state.projects];
        updatedProjects.splice(action.payload, 1);

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
        const updatedProjects = [...state.projects];
        updatedProjects[action.payload.projectIndex] = {
            ...updatedProjects[action.payload.projectIndex],
            tasks: [...updatedProjects[action.payload.projectIndex].tasks, action.payload.newTask],
        };
        return {
            ...state,
            projects: updatedProjects,
        };
    }

    if (action.type === 'DELETE_TASK') {
        const updatedProjects = [...state.projects];
        const updatedTasks = [...updatedProjects[action.payload.projectIndex].tasks];
        updatedTasks.splice(action.payload.taskIndex, 1);

        updatedProjects[action.payload.projectIndex] = {
            ...updatedProjects[action.payload.projectIndex],
            tasks: updatedTasks,
        };

        return {
            ...state,
            projects: updatedProjects,
        };
    }

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

    if (action.type === 'CLOSE_MODAL') {
        return {
            ...state,
            modalIsOpen: false,
        };
    }

}

export default function ProjectContextProvider({children}) {

    const [mainViewState, mainViewDispatch] = useReducer(
        projectManagementReducer,
        {
            tabButtons: [],
            addProjectIsOpen: false,
            projects: [],
            selectedButton: null,
            modalIsOpen: false,
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

    const closeModal = () => {

        mainViewDispatch({
            type: 'CLOSE_MODAL',
        })

    };

    const ctxValue = {
        tabButtons: mainViewState.tabButtons,
        addProjectIsOpen: mainViewState.addProjectIsOpen,
        projects: mainViewState.projects,
        selectedButton: mainViewState.selectedButton,
        modalIsOpen: mainViewState.modalIsOpen,
        onCloseModal: closeModal,
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
