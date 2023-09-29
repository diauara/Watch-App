import { Pressable, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { useState } from "react";

export default function TabThreeScreen() {
  const [startStopwatch, setStartStopwatch] = useState();
  const [stopStopwatch, setStopStopwatch] = useState();
  const [resetStopwatch, setResetStopwatch] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>00:00.00</Text>
      <View style={styles.buttons}>
        <View>
          <Pressable>
            {({ pressed }) => (
              <View
                style={{
                  backgroundColor: "rgba(117, 117, 117, 0.40)",
                  width: 100,
                  height: 100,
                  borderRadius: 200,
                  opacity: pressed ? 0.5 : 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 20, color: "grey" }}>Reset</Text>
              </View>
            )}
          </Pressable>
        </View>
        <View style={styles.startContainer}>
          <Pressable>
            {({ pressed }) => (
              <View
                style={{
                  backgroundColor: "rgba(46, 125, 50, 0.50)",
                  width: 100,
                  height: 100,
                  borderRadius: 200,
                  opacity: pressed ? 0.5 : 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 20, color: "green" }}>Start</Text>
              </View>
            )}
          </Pressable>
          <Pressable>
            {({ pressed }) => (
              <View
                style={{
                  backgroundColor: "rgba(198, 40, 40, 0.40)",
                  width: 100,
                  height: 100,
                  borderRadius: 200,
                  opacity: pressed ? 0.5 : 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 20, color: "red" }}>Stop</Text>
              </View>
            )}
          </Pressable>
        </View>
      </View>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 100,
    fontWeight: "200",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "100%",
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  startContainer: {},
});
