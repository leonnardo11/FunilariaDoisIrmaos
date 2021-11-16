import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";
import Login from "./src/screens/Login";
import Main from "./src/screens/Main";
import Recovery from './src/screens/Recovery'
import CreateAccount from "./src/screens/CreateAccount";
import EditProfile from "./src/screens/EditProfile";
import EditPass from "./src/screens/EditPass";

const DrawerNavigation = createDrawerNavigator({
  Login: Login,
  Main: Main,
  Recovery: Recovery,
  createAccount: CreateAccount,
  EditProfile: EditProfile,
  EditPass: EditPass
  

});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Login: Login,
    Main: Main,
    Recovery: Recovery,
    CreateAccount: CreateAccount,
    EditProfile: EditProfile,
    EditPass : EditPass
    
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "nunito-700": require("./src/assets/fonts/nunito-700.ttf"),
      "nunito-regular": require("./src/assets/fonts/nunito-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
