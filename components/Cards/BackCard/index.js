import React, { useState, useEffect } from "react";
import {
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Right,
  Button,
  H3,
} from "native-base";
import { StyleSheet } from "react-native";
import {updateObjectInTable} from '../../../database/dataBaseUseCase'

const BackCard = ({ clickGoBack, word }) => {
  return (
    <Content padder>
      <Card>
        <CardItem style={styles.cardTitleContainer} header bordered>
          <Text style={styles.cardTitle}>{word.word}</Text>
        </CardItem>
        {word.wordType === 1 && (
          <Content>
            <CardItem bordered>
              <Body>
                <Text>
                  <H3 style={styles.h3}>Past Simple: </H3>
                  {word.pastSimple}
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  <H3 style={styles.h3}>Past Participle: </H3>
                  {word.pastParticiple}
                </Text>
              </Body>
            </CardItem>
          </Content>
        )}
        <CardItem bordered>
          <Body>
            <Text>
              <H3 style={styles.h3}>Annotations: </H3>
              {word.annotations}
            </Text>
          </Body>
        </CardItem>
        <CardItem footer bordered>
          <Right>
            <Button onPress={() => updateObjectById(word.word, "@storage_userWords", 'learned', true)} rounded success style={{ marginRight: -70, maxHeight: 40 }}>
              <Text>Learned</Text>
            </Button>
          </Right>
          <Right>
            <Button
              onPress={() => clickGoBack()}
              rounded
              light
              style={{ maxHeight: 40 }}
            >
              <Text>Go Back</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    </Content>
  );
};

export default BackCard;

const styles = StyleSheet.create({
  cardTitleContainer: {
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  h3: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
