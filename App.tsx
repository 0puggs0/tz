import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import TaskCard from "./src/components/taskCard";
import { useState } from "react";

interface Data {
  id: number;
  name: string;
  description: string;
}
export default function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState<Data[] | []>([]);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.leftBlockForm}>
          <View style={styles.leftBlockFormItem}>
            <Text>Name:</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={(value) => setName(value)}
            />
          </View>
          <View style={styles.leftBlockFormItem}>
            <Text>Descr:</Text>
            <TextInput
              style={styles.input}
              value={description}
              onChangeText={(value) => setDescription(value)}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            if (!data.length) {
              setData([{ id: 1, name: name, description: description }]);
            } else {
              setData((prev) => [
                ...prev,
                {
                  id: prev[prev.length - 1].id + 1,
                  name: name,
                  description: description,
                },
              ]);
            }
          }}
        >
          <Text style={styles.button}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={data}
        renderItem={({ item }) => {
          return (
            <TaskCard
              name={item.name}
              description={item.description}
              deleteCard={() => {
                setData((prev) => prev.filter((el) => el.id !== item.id));
              }}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 70,
    gap: 15,
    paddingHorizontal: 30,
  },
  form: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    gap: 20,
  },
  leftBlockForm: { gap: 15, flex: 1 },
  leftBlockFormItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    flex: 1,
  },
  button: {
    padding: 13,
    backgroundColor: "purple",
    overflow: "hidden",
    borderRadius: 15,
    color: "white",
  },
});
