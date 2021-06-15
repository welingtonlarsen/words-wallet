import React, { useState, useEffect } from "react";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Right,
  Button,
} from "native-base";
import { StyleSheet } from "react-native";

const FrontCard = ({ word, clickDontKnow }) => {
  return (
    <Content padder>
      <Card>
        <CardItem style={styles.cardItemWord} header bordered>
          <Text style={styles.word}>{word}</Text>
        </CardItem>
        <CardItem style={styles.cardItemButtom} footer bordered>
          <Button
            onPress={() => clickDontKnow()}
            rounded
            success
            style={{ maxHeight: 40 }}
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

  cardItemButtom: {
    justifyContent: "center",
  },
});
