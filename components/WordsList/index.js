import React, { Component, useState, useEffect } from "react";
import {
  Container,
  Button,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Footer,
  FooterTab,
} from "native-base";

const WordsList = () => {
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

  useEffect(() => {
    setAlphabeticWords(() => {
      const finalObject = {};
      alphabet.forEach((letter, position) => {
        const words = data.filter((word) => word[0] === letter);
        finalObject[letter] = words;
      });

      return finalObject;
    });
  }, []);

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
                {wordsForLetter.map((word) => {
                  return (
                    <ListItem
                      key={word}
                      onPress={() => console.log("clicouB")}
                      style={{ backgroundColor: "#ffffff" }}
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
      <Footer style={{}}>
        <Button
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
