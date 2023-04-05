import { GlobalSettingProvider } from "./context/GlobalSetting.jsx";
import { MainMenu } from "./views/mainMenu/index.jsx";
import { SessionContextProvider } from "./context/Session.jsx";

const App = () => {
    
    return (
        <SessionContextProvider>
            <GlobalSettingProvider>
                <MainMenu/>
            </GlobalSettingProvider>
        </SessionContextProvider>
  );
}

export default App;
