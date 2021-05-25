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
  Picker,
  Form,
  Item,
  Label,
  Input,
  Footer,
  Text,
  Textarea,
  Toast,
} from "native-base";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const WordRegister = ({ route, navigation }) => {
  const [isNewWord, setIsNewWord] = useState(true);
  const [formHandle, setFormHandle] = useState({
    wordType: 1,
    word: "",
    pastSimple: "",
    pastParticiple: "",
    annotations: "",
  });

  const { wordObject } = route.params ? route.params : {};

  useEffect(() => {
    if (wordObject && wordObject.wordType !== 1) {
      console.log('oie 1')
      setFormHandle({
        wordType: wordObject.wordType,
        word: wordObject.word,
        pastSimple: "",
        pastParticiple: "",
        annotations: "",
      });
      setIsNewWord(false);
    } else if (wordObject) {
      console.log('oie2')
      setFormHandle(wordObject)
      setIsNewWord(false)
    }
  }, [wordObject]);

  const [wordTypes] = useState([
    { type: "Verb", id: 1 },
    { type: "Adverb", id: 2 },
    { type: "Adjective", id: 3 },
    { type: "Noun", id: 4 },
    { type: "Pronoun", id: 5 },
    { type: "Slang", id: 6 },
    { type: "Any other", id: 7 },
  ]);

  const [userWordsData, setUserWordsData] = useState([]);

  useEffect(() => {
    getUserWordsStoragedData();
  }, []);

  const getUserWordsStoragedData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@storage_userWords");
      if (jsonValue !== null) {
        setUserWordsData(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const goBackToWordsList = () => {
    navigation.push("WordsList");
  };

  const submitForm = () => {
    if (formHandle.word == "") {
      const text =
        formHandle.wordType === 1
          ? "Base form was not filled!"
          : "Word was not filled!";

      Toast.show({
        text: text,
        buttonText: "Okay",
        type: "danger",
        duration: 4000,
        buttonStyle: { height: 35 },
      });
    } else {
      userWordsData.push({
        wordType: formHandle.wordType,
        word: formHandle.word,
        pastSimple: formHandle.pastSimple,
        pastParticiple: formHandle.pastParticiple,
        annotations: formHandle.annotations,
      });
      updateUserWordsStoragedData(JSON.stringify(userWordsData));
      navigation.push("WordsList");
    }
  };

  const updateUserWordsStoragedData = async (value) => {
    try {
      await AsyncStorage.setItem("@storage_userWords", value);
    } catch (e) {
      console.log(e);
    }
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
          <Title style={styles.headerTitle}>{isNewWord && 'New Word' || 'Word Details'}</Title>
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
          <Text style={styles.footerText}>
            {(isNewWord && "Do it!") || "Save"}
          </Text>
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
