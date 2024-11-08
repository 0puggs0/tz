import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

interface Props {
  text: string;
  onSubmitEditingFirstInput: (() => void) | undefined;
  value: string;
  setValue: (value: string) => void;
  inputRef: React.RefObject<TextInput> | undefined;
}
export default function Input({
  text,
  onSubmitEditingFirstInput,
  value,
  setValue,
  inputRef,
}: Props) {
  return (
    <View style={styles.leftBlockFormItem}>
      {!!text && <Text>{text}</Text>}
      <TextInput
        ref={inputRef}
        onSubmitEditing={onSubmitEditingFirstInput}
        style={styles.input}
        value={value}
        onChangeText={setValue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
});
