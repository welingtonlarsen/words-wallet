import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Body,
  Left,
  Button,
  Icon,
  Footer,
} from "native-base";
import { StyleSheet } from "react-native";

import FrontCard from "./FrontCard";
import BackCard from "./BackCard";

import useDao from "../../database/useDao";

const Cards = ({ route, navigation }) => {
  const [unknownUserWords, setUnknownUserWords] = useState([{}]);
  const [positionCurrentWord, setPositionCurrentWord] = useState(0);
  const [endedCards, setEndedCards] = useState(false);
  const [showBackCard, setShowBackCard] = useState(false);

  const [findAll] = useDao({
    onCompleted: (arrayObjects) => {
      setUnknownUserWords(arrayObjects.filter(object => !object.learned));
      console.log(arrayObjects)
    },
  });

  useEffect(() => {
    findAll("@storage_userWords");
  }, []);

  const onPressNextCard = () => {
    if (positionCurrentWord + 1 < unknownUserWords.length) {
      setPositionCurrentWord(positionCurrentWord + 1);
    } else {
      setEndedCards(true)
    }
  };

  return (
    <Container>
      <Header noShadow style={styles.header} androidStatusBarColor="black">
        <Left>
          <Button transparent onPress={() => navigation.navigate("Menu")}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title style={styles.headerTitle}>Cards</Title>
        </Body>
      </Header>
      
      {((endedCards || !unknownUserWords.length) && (
        <Content>
          <Text>No more cards!</Text>
        </Content>
      )) || (
        <Content padder>
          {(showBackCard && (
            <BackCard word={unknownUserWords[positionCurrentWord]} clickGoBack={() => setShowBackCard(false)} />
          )) ||
            (unknownUserWords && (
              <FrontCard
                word={unknownUserWords[positionCurrentWord].word}
                clickDontKnow={() => setShowBackCard(true)}
              />
            ))}
        </Content>
      )}

      <Footer>
        <Button
          onPress={() => onPressNextCard()}
          active
          style={styles.footerButton}
        >
          <Text style={styles.footerText}>Next Card</Text>
        </Button>
      </Footer>
    </Container>
  );
};

export default Cards;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#828889",
  },
  headerTitle: {
    fontSize: 20,
  },
  footerButton: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    backgroundColor: "green",
  },
  footerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
