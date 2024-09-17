import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  function pressHandle() {
    console.log("Button pressed");
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={pressHandle}
        android_ripple={{ color: "white" }}
      >
        <Text style={styles.buttomText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttomText: {
    color: "white",
    textAlign: "center",
  },
});
