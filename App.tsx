import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import TaskCard from "./src/components/taskCard";
import { useRef, useState } from "react";
import Input from "./src/components/input";

interface Data {
  id: string;
  name: string;
  description: string;
}
export default function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState<Data[]>([]);

  const secondInputRef = useRef<TextInput>(null);
  const onSubmitEditingFirstInput = () => {
    if (secondInputRef.current) {
      secondInputRef.current.focus();
    }
  };

  const resetStates = () => {
    setName("");
    setDescription("");
  };

  const addItem = () => {
    if (!data.length) {
      if (!name.trim().length || !description.trim().length) {
        Alert.alert("Ошибка", "Вы ввели не все данные");
      } else {
        setData([
          {
            id: Math.random().toString(),
            name: name,
            description: description,
          },
        ]);
        resetStates();
      }
    } else {
      if (!name.trim().length || !description.trim().length) {
        Alert.alert("Ошибка", "Вы ввели не все данные");
      } else {
        setData((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            name: name,
            description: description,
          },
        ]);
        resetStates();
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.leftBlockForm}>
          <Input
            text="Name:"
            onSubmitEditingFirstInput={onSubmitEditingFirstInput}
            value={name}
            setValue={setName}
            inputRef={undefined}
          />

          <Input
            text="Descr:"
            onSubmitEditingFirstInput={undefined}
            value={description}
            setValue={setDescription}
            inputRef={secondInputRef}
          />
        </View>
        <TouchableOpacity onPress={addItem}>
          <Text style={styles.button}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        keyExtractor={(item) => item.id.toString() + Math.random().toString()}
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
