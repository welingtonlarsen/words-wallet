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
  Footer,
} from "native-base";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import FrontCard from "./FrontCard";
import BackCard from "./BackCard";

const Cards = ({ route, navigation }) => {
  const [showBackCard, setShowBackCard] = useState(false);

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
        {(showBackCard && (
          <BackCard clickGoBack={() => setShowBackCard(false)} />
        )) || <FrontCard clickDontKnow={() => setShowBackCard(true)} />}
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
