import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Right,
  Button,
  Icon,
  CheckBox,
  Footer,
} from "native-base";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Cards = ({ route, navigation }) => {
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
      <Content padder>
        <Card>
          <CardItem header bordered>
            <Text>Word</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text>
                Observations and more things NativeBase is a free and open
                source framework that enable developers to build high-quality
                mobile apps using React Native iOS and Android apps with a
                fusion of ES6.
              </Text>
            </Body>
          </CardItem>
          <CardItem footer bordered>
            <Right>
              <Button rounded success style={{marginRight: -70, maxHeight: 40}}>
                <Text>Learned</Text>
              </Button>
            </Right>
            <Right>
              <Button rounded light style={{maxHeight: 40}}>
                <Text>Go Back</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
      </Content>
      <Footer>
        <Button
          onPress={() => {
            () => {};
          }}
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
