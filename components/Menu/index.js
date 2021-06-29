import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch,
  ActionSheet,
} from "native-base";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

var DESTRUCTIVE_INDEX = 0;
var CANCEL_INDEX = 1;

const Menu = ({ route, navigation }) => {
  const [clicked, setClicked] = useState({});

  var BUTTONS = [
    { text: "Yes, reset my app!", icon: "trash", iconColor: "#fa213b" },
    { text: "Cancel", icon: "close", iconColor: "#25de5b" },
    { text: "" },
  ];

  const showActionSheet = () => {
    ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        destructiveButtonIndex: DESTRUCTIVE_INDEX,
        title: "Are you sure you want to reset the app?",
      },
      (buttonIndex) => {
        if (buttonIndex == 0) {
          resetApp();
        }
      }
    );
  };

  const resetApp = () => {
    AsyncStorage.getAllKeys()
      .then((keys) => AsyncStorage.multiRemove(keys))
      .then(() => alert("App reset successfully!"));
  };

  return (
    <Container>
      <Header noShadow style={styles.header} androidStatusBarColor="black">
        <Title style={styles.headerTitle}>{"Menu"}</Title>
      </Header>
      <Content>
        <ListItem icon onPress={() => navigation.push("Categories")}>
          <Left>
            <Button
              style={{ backgroundColor: "#828889" }}
              onPress={() => navigation.push("Categories")}
            >
              <Icon active name="grid" />
            </Button>
          </Left>
          <Body>
            <Text>Categories</Text>
          </Body>
        </ListItem>
        <ListItem icon onPress={() => navigation.push("Cards")}>
          <Left>
            <Button
              style={{ backgroundColor: "#828889" }}
              onPress={() => navigation.push("Cards")}
            >
              <Icon active name="bookmarks" />
            </Button>
          </Left>
          <Body>
            <Text>Cards</Text>
          </Body>
        </ListItem>
        <ListItem icon onPress={() => showActionSheet()}>
          <Left>
            <Button
              onPress={() => showActionSheet()}
              style={{ backgroundColor: "#828889" }}
            >
              <Icon active name="settings" />
            </Button>
          </Left>
          <Body>
            <Text>Reset app</Text>
          </Body>
        </ListItem>
      </Content>
    </Container>
  );
};

export default Menu;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#828889",
  },
  headerTitle: {
    fontSize: 25,
    textAlignVertical: "center",
  },
});
