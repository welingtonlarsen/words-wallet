import React from "react";
import {
  Root,
  Container,
  Header,
  Title,
  Button,
  Icon,
  Left,
  Body,
} from "native-base";

const WordRegister = ({ navigation }) => {
  return (
    <Container>
      <Header
        noShadow
        style={{ backgroundColor: "#828889" }}
        androidStatusBarColor="black"
      >
        <Left>
          <Button transparent onPress={() => navigation.navigate("WordsList")}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title style={{ fontSize: 20 }}>New Word</Title>
        </Body>
      </Header>
    </Container>
  );
};

export default WordRegister;
