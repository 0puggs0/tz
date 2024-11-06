import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";

interface Props {
  name: string;
  description: string;
  deleteCard: () => void;
}
export default function TaskCard({ name, description, deleteCard }: Props) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text>{description}</Text>
      </View>
      <TouchableOpacity onPress={deleteCard}>
        <Entypo name="cross" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    borderWidth: 0.5,
    borderColor: "black",
    padding: 10,
  },
  name: { fontSize: 23 },
});
