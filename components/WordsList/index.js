import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  Content,
  List,
  ListItem,
  Text,
  Footer,
  Header,
  Left,
  Icon,
  Body,
  Title
} from "native-base";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const WordsList = ({ route, navigation }) => {
  const { category } = route.params ? route.params : {};
  const [userWordsData, setUserWordsData] = useState([]);
  const [alphabetData] = useState([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "Y",
    "Z",
  ]);
  const [alphabeticWords, setAlphabeticWords] = useState(null);

  useEffect(() => {
    getUserWordsStoragedData();
  }, []);

  const getUserWordsStoragedData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@storage_userWords");
      if (jsonValue !== null) {
        setUserWordsData(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setAlphabeticWords(() => {
      const finalObject = {};
      alphabetData.forEach((letter, position) => {
        const words = userWordsData.filter(
          (wordObj) => wordObj.word[0] === letter && wordObj.categoryId === category.id
        );
        finalObject[letter] = words.map((wordObj) => wordObj.word);
      });
      return finalObject;
    });
  }, [userWordsData]);

  const filterWordFromUserWordsData = (word) => {
    return userWordsData.filter((wordObject) => wordObject.word === word)[0];
  };

  const goToDetailsPage = () => {
    navigation.navigate("Categories");
  }

  if (!alphabeticWords) {
    return (
      <Container>
        <Content>
          <Text>Fetching your's words!</Text>
        </Content>
      </Container>
    );
  }

  return (
    <Container>
      <Header noShadow style={styles.header} androidStatusBarColor="black">
        <Left>
          <Button transparent onPress={() => goToDetailsPage()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title style={styles.headerTitle}>Words List</Title>
        </Body>
      </Header>
      <Content>
        {Object.keys(alphabeticWords).map((letter) => {
          const wordsForLetter = alphabeticWords[letter];
          return (
            !!wordsForLetter.length && (
              <List>
                <ListItem
                  button={false}
                  key={letter}
                  itemDivider
                  style={styles.listItemDivisor}
                >
                  <Text key={letter + 'text'} >{letter}</Text>
                </ListItem>
                {wordsForLetter.map((word, position) => {
                  return (
                    <ListItem
                      key={word + position}
                      style={styles.listItem}
                      onPress={() =>
                        navigation.push("WordDetail", {
                          wordObject: filterWordFromUserWordsData(word),
                          category
                        })
                      }
                    >
                      <Text>{word}</Text>
                    </ListItem>
                  );
                })}
              </List>
            )
          );
        })}
      </Content>

      <Footer>
        <Button
          onPress={() => navigation.push("WordRegister", {
            category
          })}
          active
          style={styles.button}
        >
          <Text style={styles.buttonText}>New Word</Text>
        </Button>
      </Footer>
    </Container>
  );
};

export default WordsList;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#828889",
  },
  headerTitle: {
    fontSize: 20,
  },
  listItemDivisor: {
    backgroundColor: "#e5e9ed",
  },
  listItem: {
    backgroundColor: "#ffffff",
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
