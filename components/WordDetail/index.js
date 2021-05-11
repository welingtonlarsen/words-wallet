import React, {useEffect} from "react";
import {
  Content,
  Container,
  Header,
  Title,
  Button,
  Icon,
  Left,
  Body,
  Text
} from "native-base";
import { StyleSheet } from "react-native";

const WordDetail = ({ route, navigation }) => {
    const { wordObject } = route.params


    useEffect(() => {
        console.log(wordObject)
    }, [wordObject])
  
    const goBackToWordsList = () => {
    navigation.push("WordsList");
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
        <Text>Word detail</Text>
      </Content>
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
  }
});
