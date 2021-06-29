import AsyncStorage from "@react-native-async-storage/async-storage";

export async function deleteById(id, table) {
  try {
    const objects = await findAllForTable(table)
    
    var objectsFilterd = null

    if(table === '@storage_userWords') {
      objectsFilterd = objects.filter(value => value.word !== id)
    } else {
      objectsFilterd = objects.filter(value => value.id !== id)
    }

    console.log(objectsFilterd)
    await AsyncStorage.setItem(table, JSON.stringify(objectsFilterd));
  } catch (e) {
    console.log(e);
  }
}

export async function updateAllObjectById(id, table, newValue) {
  try {
    const objects = await findAllForTable(table);

    var objectPositionInObjects = 0;
    const object = objects.find((object) => {
      if (object.word === id) {
        return true;
      } else {
        objectPositionInObjects++;
        return false;
      }
    });

    objects.splice(objectPositionInObjects, 1);
    objects.push(newValue);
    console.log(objects);

    await AsyncStorage.setItem(table, JSON.stringify(objects));
  } catch (e) {
    console.log(e);
  }
}

export async function updateObjectById(id, table, prop, newValue) {
  try {
    const objects = await findAllForTable(table);

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
