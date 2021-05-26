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

const CategoryRegister = ({ navigation }) => {
  
  const submitForm = () => {};

  return (
    <Container>
      <Header noShadow style={styles.header} androidStatusBarColor="black">
        <Left>
          <Button transparent onPress={() => navigation.push("Categories")}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title style={styles.headerTitle}>
            Category Register
          </Title>
        </Body>
      </Header>
      <Content>
        <Form>
          <Item stackedLabel last>
            <Label style={styles.formItemLable}>Category Name</Label>
            <Input
              value={'blablabla'}
              style={styles.formItemInput}
              onChangeText={(value) =>
                console.log(value)
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
          <Text style={styles.footerText}>Create</Text>
        </Button>
      </Footer>
    </Container>
  );
};

export default CategoryRegister;

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
