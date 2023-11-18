import MainView from "./components/MainView/MainView.jsx";
import ProjectContextProvider from "./store/project-management-context.jsx";

function App() {
    return (
        <>
            <ProjectContextProvider>
                <MainView/>
            </ProjectContextProvider>
        </>
    );
}

export default App;
