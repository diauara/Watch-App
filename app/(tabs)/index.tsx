import { ScrollView, StyleSheet, FlatList, Pressable } from "react-native";

import { Text, View } from "../../components/Themed";
import { useState } from "react";

export default function TabOneScreen() {
  const [city, setCity] = useState([
    { timeDiff: "Today, -8HRS", city: "Cupertino", time: "04:54", id: 1 },
    { timeDiff: "Today, -5HRS", city: "New York", time: "07:54", id: 2 },
    { timeDiff: "Today, +0HRS", city: "Lagos", time: "12:54", id: 3 },
    { timeDiff: "Today, +0HRS", city: "London", time: "12:54", id: 4 },
  ]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>World Clock</Text>
      <View
        style={styles.separator}
        lightColor="#cccccc"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View>
        <FlatList
          scrollEnabled={false}
          data={city}
          renderItem={({ item }) => (
            <View style={styles.city}>
              <View style={styles.timeCity}>
                <View
                  style={{
                    justifyContent: "center",
                  }}
                >
                  <Text
                    lightColor="#cccccc"
                    darkColor="#cccccc"
                    style={{ fontSize: 16 }}
                  >
                    {item.timeDiff}
                  </Text>
                  <Text style={{ fontSize: 24, paddingTop: 5 }}>
                    {item.city}
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 64, fontWeight: "200" }}>
                    {item.time}
                  </Text>
                </View>
              </View>
              <View
                style={styles.separator}
                lightColor="#cccccc"
                darkColor="rgba(255,255,255,0.1)"
              />
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: "100%",
  },
  timeCity: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 20,
  },
  city: {},
});
