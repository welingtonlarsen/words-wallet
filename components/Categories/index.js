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
  Footer,
} from "native-base";

import { StyleSheet } from "react-native";
import { useState } from "react/cjs/react.development";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Categories = ({ navigation }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchUserCategoriesInAsyncStorage()
  }, []);

  const fetchUserCategoriesInAsyncStorage = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@storage_userCategories");
      if (jsonValue !== null) {
        setCategories(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const goToCategoryWordsList = (category) => {
    console.log(category)
    navigation.push("WordsList", {
      category
    });
  }

  const goBackToWordsList = () => {
    // console.log("oie")
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
          {categories.map((category) => {
            return (
              <ListItem key={category.id} onPress={() => goToCategoryWordsList(category)}>
                <Left>
                  <Text>{category.categoryName}</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            );
          })}
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
