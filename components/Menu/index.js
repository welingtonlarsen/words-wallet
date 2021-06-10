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
} from "native-base";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Menu = ({ route, navigation }) => {
  return (
    <Container>
      <Header noShadow style={styles.header} androidStatusBarColor="black">
        <Body>
          <Title style={styles.headerTitle}>{"Menu"}</Title>
        </Body>
      </Header>
      <Content>
        <ListItem icon onPress={() => navigation.push('Categories')}>
          <Left>
            <Button style={{ backgroundColor: "#828889" }} onPress={() => navigation.push('Categories')}>
              <Icon active name="grid" />
            </Button>
          </Left>
          <Body>
            <Text>Categories</Text>
          </Body>
        </ListItem>
        <ListItem icon onPress={() => navigation.push('Cards')}>
          <Left>
            <Button style={{ backgroundColor: "#828889" }} onPress={() => navigation.push('Cards')}>
              <Icon active name="bookmarks" />
            </Button>
          </Left>
          <Body>
            <Text>Cards</Text>
          </Body>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: "#828889" }}>
              <Icon active name="settings" />
            </Button>
          </Left>
          <Body>
            <Text>Configurations</Text>
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
    fontSize: 20,
  }
});
