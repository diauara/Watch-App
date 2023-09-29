import {
  FlatList,
  StyleSheet,
  Switch,
  useColorScheme,
  ScrollView,
} from "react-native";

import { Text, View } from "../../components/Themed";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";

export default function TabTwoScreen() {
  const handleSwitchChange = (id) => {
    setCity((prevCity) =>
      prevCity.map((item) =>
        item.id === id ? { ...item, active: !item.active } : item
      )
    );
  };

  const [city, setCity] = useState([
    {
      timeDiff: "Alarm, every weekday",
      city: "Cupertino",
      time: "04:54",
      id: 1,
    },
    {
      timeDiff: "Alarm",
      city: "New York",
      time: "07:54",
      id: 2,
    },
    { timeDiff: "Alarm, every weekday", city: "Lagos", time: "12:54", id: 3 },
    { timeDiff: "Alarm, every weekday", city: "London", time: "12:54", id: 4 },
  ]);

  const colorScheme = useColorScheme();
  const iconColor =
    colorScheme === "light" ? styles.lightTheme : styles.darkTheme;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Alarm</Text>
      <View style={styles.sleep}>
        <Ionicons name="bed" size={22} style={[iconColor, styles.sleeepIcon]} />
        <Text style={styles.text}>Sleep|Wake Up</Text>
      </View>
      <View
        style={styles.separator}
        lightColor="#cccccc"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View>
        <Text style={[styles.text, styles.textOther]}>Other</Text>
        <View
          style={styles.separator}
          lightColor="#cccccc"
          darkColor="rgba(255,255,255,0.1)"
        />
        <FlatList
          scrollEnabled={false}
          data={city}
          renderItem={({ item }) => (
            <View>
              <View style={styles.timeCity}>
                <View
                  style={{
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 64, fontWeight: "200" }}>
                    {item.time}
                  </Text>
                  <Text
                    lightColor="#cccccc"
                    darkColor="#cccccc"
                    style={{ fontSize: 16 }}
                  >
                    {item.timeDiff}
                  </Text>
                </View>
                <View style={styles.switchContainer}>
                  <Switch
                    trackColor={{ false: "#767577", true: "green" }}
                    thumbColor={item.active ? "white" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => handleSwitchChange(item.id)}
                    value={item.active}
                  />
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
    paddingTop: 20,
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
  sleep: {
    flexDirection: "row",
    paddingTop: 25,
  },
  darkTheme: {
    color: "white",
  },
  lightTheme: {
    color: "black",
  },
  text: {
    fontSize: 22,
    fontWeight: "500",
  },
  textOther: {
    paddingTop: 25,
  },
  sleeepIcon: {
    paddingRight: 5,
  },
  timeCity: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 20,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  switchText: {
    fontSize: 16,
    marginRight: 10,
  },
});
