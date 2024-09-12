import React, { useState } from "react";
import { Tabs } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Button,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Header: React.FC = () => {
  const colorScheme = useColorScheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuPress = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
        <MaterialIcons name="menu" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>My App</Text>
      {isMenuOpen && (
        <Modal
          transparent={true}
          visible={isMenuOpen}
          animationType="slide"
          onRequestClose={() => setIsMenuOpen(false)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Button title="Close Menu" onPress={() => setIsMenuOpen(false)} />
              <Text style={styles.modalText}>Menu Item 1</Text>
              <Text style={styles.modalText}>Menu Item 2</Text>
              <Text style={styles.modalText}>Menu Item 3</Text>
              <Tabs
                screenOptions={{
                  tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
                  headerShown: false,
                }}
              >
                <Tabs.Screen
                  name="index"
                  options={{
                    title: "Home",
                    tabBarIcon: ({ color, focused }) => (
                      <TabBarIcon
                        name={focused ? "home" : "home-outline"}
                        color={color}
                      />
                    ),
                  }}
                />
                <Tabs.Screen
                  name="explore"
                  options={{
                    title: "Explore",
                    tabBarIcon: ({ color, focused }) => (
                      <TabBarIcon
                        name={focused ? "code-slash" : "code-slash-outline"}
                        color={color}
                      />
                    ),
                  }}
                />
              </Tabs>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  menuButton: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 250,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default Header;
