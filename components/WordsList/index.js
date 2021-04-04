import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  Content,
  List,
  ListItem,
  Text,
  Footer,
} from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";

const WordsList = ({ navigation }) => {
  const data = [
    "About",
    "Around",
    "Big",
    "Best",
    "Chocolate",
    "Car",
    "Done",
    "Did",
    "Efford",
    "Fake",
    "Good",
    "Height",
  ];

  const [data2, setData2] = useState([
    {
      wordType: 1,
      word: "Oie",
      pastSimple: "Oie",
      pastParticiple: "Oie",
      annotations: "Oie",
    },
    {
      wordType: 3,
      word: "Kakaka",
      pastSimple: "",
      pastParticiple: "",
      annotations: "",
    },
  ]);

  const [alphabet, setAlphabet] = useState([
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

  console.log(data2);
  useEffect(() => {
    getUserWordsStoragedData();
  }, []);

  useEffect(() => {
    setAlphabeticWords(() => {
      const finalObject = {};
      alphabet.forEach((letter, position) => {
        const words = data2.filter((wordObj) => wordObj.word[0] === letter);
        finalObject[letter] = words.map((wordObj) => wordObj.word);
      });
      return finalObject;
    });
  }, [data2]);

  const getUserWordsStoragedData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@storage_userWords");
      if (jsonValue !== null) {
        setData2(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.log(e);
    }
  };

  if (!alphabeticWords) {
    return (
      <Container>
        <Content>
          <Text>Fetching your's words!</Text>
          <Button
            onPress={() => navigation.navigate("WordRegister")}
            active
            style={{
              height: "100%",
              width: "100%",
              justifyContent: "center",
              backgroundColor: "#828889",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>New Word</Text>
          </Button>
        </Content>
      </Container>
    );
  }

  return (
    <Container>
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
                  style={{ backgroundColor: "#e5e9ed" }}
                  //onPress={() => {}}
                >
                  <Text>{letter}</Text>
                </ListItem>
                {wordsForLetter.map((word, position) => {
                  return (
                    <ListItem key={word + position} style={{ backgroundColor: "#ffffff" }}>
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
          onPress={() => navigation.push("WordRegister")}
          active
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "center",
            backgroundColor: "#828889",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>New Word</Text>
        </Button>
      </Footer>
    </Container>
  );
};

export default WordsList;
