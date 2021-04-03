import React, { useState } from "react";
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
  Text,
  Textarea,
} from "native-base";
import { StyleSheet } from "react-native";

const WordRegister = ({ navigation }) => {
  const [wordTypes] = useState([
    { type: "Verb", id: 1 },
    { type: "Adverb", id: 2 },
    { type: "Adjective", id: 3 },
    { type: "Noun", id: 4 },
    { type: "Pronoun", id: 5 },
    { type: "Slang", id: 6 },
    { type: "Any other", id: 7 },
  ]);

  const [selectedWordType, setSelectedWordType] = useState(1);

  return (
    <Container>
      <Header noShadow style={styles.header} androidStatusBarColor="black">
        <Left>
          <Button transparent onPress={() => navigation.navigate("WordsList")}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title style={styles.headerTitle}>New Word</Title>
        </Body>
      </Header>
      <Content>
        <Form>
          <Item picker last>
            <Label style={styles.formItemLable}>Type:</Label>
            <Picker
              style={styles.formPicker}
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
          <Item stackedLabel last>
            <Label style={styles.formItemLable}>Word</Label>
            <Input style={styles.formItemInput} />
          </Item>
          {selectedWordType == 1 && (
            <>
              <Item stackedLabel last>
                <Label style={styles.formItemLable}>Past Simple</Label>
                <Input style={styles.formItemInput} />
              </Item>
              <Item stackedLabel last>
                <Label style={styles.formItemLable}>Past Participle</Label>
                <Input style={styles.formItemInput} />
              </Item>
            </>
          )}
          <Item stackedLabel last>
            <Label style={styles.formItemLable}>Annotations</Label>
            <Textarea style={styles.formTextArea} rowSpan={5} bordered />
          </Item>
        </Form>
      </Content>
      <Footer>
        <Button
          onPress={() => navigation.navigate("WordsList")}
          active
          style={styles.footerButton}
        >
          <Text style={styles.footerText}>Do it!</Text>
        </Button>
      </Footer>
    </Container>
  );
};

export default WordRegister;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#828889",
  },
  headerTitle: {
    fontSize: 20,
  },
  formItemLable: {
    color: "#4e4e4e",
    fontSize: 17,
    fontWeight: "bold",
  },
  formItemInput: {
    width: "100%",
    color: "#4e4e4e",
    fontSize: 16,
  },
  formPicker: {
    flex: 1,
    color: "#4e4e4e",
    height: 50,
  },
  formTextArea: {
    width: "100%",
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    paddingLeft: 0
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
