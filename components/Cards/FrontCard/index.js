import React, { useState, useEffect } from "react";
import { Content, Card, CardItem, Text, Button } from "native-base";
import { StyleSheet } from "react-native";

const FrontCard = ({ word, clickDontKnow }) => {

  return (
    <Content padder>
      <Card>
        <CardItem style={styles.cardItemWord} header bordered>
          <Text style={styles.word}>{word}</Text>
        </CardItem>
        <CardItem style={styles.cardItemFooter} footer bordered>
          <Button onPress={() => {}} rounded success style={styles.buttom}>
            <Text>Learned</Text>
          </Button>
          <Button
            onPress={() => clickDontKnow()}
            rounded
            danger
            style={styles.buttom}
          >
            <Text>I dont know</Text>
          </Button>
        </CardItem>
      </Card>
    </Content>
  );
};

export default FrontCard;

const styles = StyleSheet.create({
  word: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  cardItemWord: {
    justifyContent: "center",
    minHeight: 150,
  },
  cardItemFooter: {
    justifyContent: "center",
  },
  buttom: {
    maxHeight: 40,
    margin: 5,
  },
});
