import React, { useState, useEffect } from "react";
import {
  Content,
  Container,
  Header,
  Title,
  Button,
  Icon,
  Left,
  Body,
  Text,
  Form,
  Item,
  Label,
  Picker,
  Footer,
  Input,
  Textarea
} from "native-base";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { updateAllObjectById } from "../../database/dataBaseUseCase";

const WordDetail = ({ route, navigation }) => {
  const { wordObject, category } = route.params;
  const [formHandle, setFormHandle] = useState({
    wordType: 1,
    word: "",
    pastSimple: "",
    pastParticiple: "",
    annotations: "",
  });
  const [wordTypes] = useState([
    { type: "Verb", id: 1 },
    { type: "Adverb", id: 2 },
    { type: "Adjective", id: 3 },
    { type: "Noun", id: 4 },
    { type: "Pronoun", id: 5 },
    { type: "Slang", id: 6 },
    { type: "Any other", id: 7 },
  ]);

  useEffect(() => {
    // console.log(wordObject);
    getUserWordsStoragedData();
  }, []);

  const getUserWordsStoragedData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@storage_userWords");
      if (jsonValue !== null) {
        const word = JSON.parse(jsonValue).find(
          (value) => value.word === wordObject.word
        );
        // console.log(word)
        setFormHandle(word);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const goBackToWordsList = () => {
    navigation.push("WordsList", {
      category,
    });
  };

  const submitForm = async () => {
    await updateAllObjectById(wordObject.word, "@storage_userWords", formHandle)
    navigation.push("WordsList", {
      category,
    });
  };

  return (
    <Container>
      <Header noShadow style={styles.header} androidStatusBarColor="black">
        <Left>
          <Button transparent onPress={() => goBackToWordsList()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title style={styles.headerTitle}>Word Detail</Title>
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
              selectedValue={formHandle.wordType}
              onValueChange={(value) => {
                if (value !== 1) {
                  setFormHandle({
                    ...formHandle,
                    pastSimple: "",
                    pastParticiple: "",
                  });
                }
                setFormHandle({ ...formHandle, wordType: value });
              }}
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
            <Label style={styles.formItemLable}>
              {(formHandle.wordType == 1 && "Base Form") || "Word"}
            </Label>
            <Input
              value={formHandle.word}
              style={styles.formItemInput}
              onChangeText={(value) => {
                setFormHandle({ ...formHandle, word: value });
              }}
            />
          </Item>
          {formHandle.wordType == 1 && (
            <>
              <Item stackedLabel last>
                <Label style={styles.formItemLable}>Past Simple</Label>
                <Input
                  value={formHandle.pastSimple}
                  style={styles.formItemInput}
                  onChangeText={(value) =>
                    setFormHandle({ ...formHandle, pastSimple: value })
                  }
                />
              </Item>
              <Item stackedLabel last>
                <Label style={styles.formItemLable}>Past Participle</Label>
                <Input
                  value={formHandle.pastParticiple}
                  style={styles.formItemInput}
                  onChangeText={(value) =>
                    setFormHandle({ ...formHandle, pastParticiple: value })
                  }
                />
              </Item>
            </>
          )}
          <Item stackedLabel last>
            <Label style={styles.formItemLable}>Annotations</Label>
            <Textarea
              value={formHandle.annotations}
              style={styles.formTextArea}
              rowSpan={5}
              bordered
              onChangeText={(value) =>
                setFormHandle({ ...formHandle, annotations: value })
              }
            />
          </Item>
        </Form>
      </Content>

      <Footer>
        <Button
          onPress={() => {
            submitForm();
          }}
          active
          style={styles.footerButton}
        >
          <Text style={styles.footerText}>Edit</Text>
        </Button>
      </Footer>
    </Container>
  );
};

export default WordDetail;

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
    color: "#4e4e4e",
    fontSize: 16,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    paddingLeft: 0,
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
