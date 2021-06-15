import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useDao(config) {
  async function findAll(tableName) {
    let jsonValue = null
    try {
      jsonValue = await AsyncStorage.getItem(tableName);
    } catch (e) {
      console.log(e);
    }

    if (config.onCompleted) {
      config.onCompleted(JSON.parse(jsonValue));
    }
  }

  return [findAll];
}
