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

const BackCard = ({ clickGoBack }) => {
  return (
    <Content padder>
      <Card>
        <CardItem header bordered>
          <Text>Word</Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>
              Observations and more things NativeBase is a free and open source
              framework that enable developers to build high-quality mobile apps
              using React Native iOS and Android apps with a fusion of ES6.
            </Text>
          </Body>
        </CardItem>
        <CardItem footer bordered>
          <Right>
            <Button rounded success style={{ marginRight: -70, maxHeight: 40 }}>
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

const styles = StyleSheet.create({});
