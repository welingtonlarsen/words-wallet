import React, { Component, useState } from "react";
import {
  Content,
  Container,
  Header,
  Title,
  Button,
  Icon,
  Left,
  Body,
  Picker,
  Form,
  Item,
  Label,
  Input,
  Footer,
  Text
} from "native-base";
import { View } from "react-native";

const WordRegister = ({ navigation }) => {
  const [wordTypes] = useState([
    { type: "Verb", id: 1 },
    { type: "Adverb", id: 2 },
    { type: "Adjective", id: 3 },
    { type: "Noun", id: 4 },
    { type: "Pronoun", id: 5 },
    { type: "Doesn't matter", id: 6 }
  ]);

  const [selectedWordType, setSelectedWordType] = useState(null);

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
      <Content>
        <Form>
          <Item picker last>
            <Label style={{ color: "#4e4e4e", fontSize: 16 }}>Type:</Label>
            <Picker
              style={{ flex: 1, color: "#4e4e4e", height: 50 }}
              iosHeader="Branch"
              Header="Branch"
              mode="dropdown"
              placeholder="Select branch"
              headerBackButtonText="Geri"
              selectedValue={selectedWordType}
              onValueChange={(value) => setSelectedWordType(value)}
            >
              {wordTypes.map((wordType, position) => {
                return (
                  <Picker.Item
                    label={wordType.type}
                    value={wordType.id}
                    key={position}
                  />
                );
              })}
            </Picker>
          </Item>
          <Item stackedLabel last >
            <Label style={{ color: "#4e4e4e", fontSize: 16 }}>Word</Label>
            <Input style={{ width: 100, color: "#4e4e4e" }} />
          </Item>
          <Item stackedLabel last>
            <Label style={{ color: "#4e4e4e", fontSize: 16 }}>
              Past Simple
            </Label>
            <Input style={{ width: 100, color: "#4e4e4e" }} />
          </Item>
          <Item stackedLabel last>
            <Label style={{ color: "#4e4e4e", fontSize: 16 }}>
              Past Participle
            </Label>
            <Input style={{ width: 100, color: "#4e4e4e" }} />
          </Item>
        </Form>
      </Content>
      <Footer>
        <Button
          onPress={() => navigation.navigate("WordRegister")}
          active
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "center",
            backgroundColor: "green",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "Green" }}>Do it!</Text>
        </Button>
      </Footer>
    </Container>
  );
};

export default WordRegister;
