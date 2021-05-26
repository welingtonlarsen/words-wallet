import React, { useEffect } from "react";
import {
  Content,
  Container,
  Header,
  Title,
  Button,
  Icon,
  Left,
  Body,
  Text,
  List,
  ListItem,
  Right,
  Footer
} from "native-base";

import { StyleSheet } from "react-native";

const Categories = ({ navigation }) => {
  const goBackToWordsList = () => {
    navigation.push("WordsList");
  };

  return (
    <Container>
      <Header noShadow style={styles.header} androidStatusBarColor="black">
        <Left>
          <Button transparent onPress={() => goBackToWordsList()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title style={styles.headerTitle}>Categories</Title>
        </Body>
      </Header>

      <Content>
        <List>
          <ListItem onPress={() => goBackToWordsList()}>
            <Left>
              <Text>Formula 1 Serie</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>English class month may</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Youtube Video</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
        </List>
      </Content>
      <Footer>
        <Button
          onPress={() => navigation.push("CategoryRegister")}
          active
          style={styles.button}
        >
          <Text style={styles.buttonText}>New Category</Text>
        </Button>
      </Footer>
    </Container>
  );
};

export default Categories;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#828889",
  },
  headerTitle: {
    fontSize: 20,
  },
  button: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#828889",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
