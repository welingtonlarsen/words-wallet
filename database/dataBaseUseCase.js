import AsyncStorage from "@react-native-async-storage/async-storage";

export async function updateObjectById(id, table, prop, newValue) {
  try {
    const objects = await findAllForTable(table)

    var objectPositionInObjects = 0;
    const itemToUpdate = objects.find((object) => {
      if (object.word === id) {
        return true;
      } else {
        position++;
        return false;
      }
    });

    objects.splice(objectPositionInObjects, 1);
    itemToUpdate[prop] = newValue;
    objects.push(itemToUpdate);

    await AsyncStorage.setItem(table, JSON.stringify(objects));
  } catch (e) {
    console.log(e);
  }
}

const findAllForTable = async (tableName) => {
  const stringValue = await AsyncStorage.getItem(tableName);
  return JSON.parse(stringValue);
};
