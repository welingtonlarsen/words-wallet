import React, { Component } from "react";

import { Root } from "native-base";
import Menu from "./components/Menu"
import Cards from "./components/Cards"
import Categories from "./components/Categories"
import CategoryRegister from './components/CategoryRegister'
import WordsList from "./components/WordsList";
import WordRegister from "./components/WordRegister";
import WordDetail from "./components/WordDetail"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    } else {
      return (
        <Root>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="Menu" component={Menu} />
              <Stack.Screen name="Cards" component={Cards} />
              <Stack.Screen name="Categories" component={Categories} />
              <Stack.Screen name="CategoryRegister" component={CategoryRegister} />
              <Stack.Screen name="WordsList" component={WordsList} />
              <Stack.Screen name="WordRegister" component={WordRegister} />
              <Stack.Screen name="WordDetail" component={WordDetail} />
            </Stack.Navigator>
          </NavigationContainer>
        </Root>
      );
    }
  }
}
