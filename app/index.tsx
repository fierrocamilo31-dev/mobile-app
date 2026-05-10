import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";

export default function App() {
  const [register, setRegister] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.body}>
      {!register ? (
        <View style={styles.container}>
          <Text style={styles.title}>Bank Login</Text>

          <TextInput
            placeholder="Username"
            style={styles.input}
            placeholderTextColor="#666"
          />

          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            placeholderTextColor="#666"
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setRegister(true)}>
            <Text style={styles.link}>
              I already have an account
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>Create Account</Text>

          <TextInput
            placeholder="First Name"
            style={styles.input}
            placeholderTextColor="#666"
          />

          <TextInput
            placeholder="Last Name"
            style={styles.input}
            placeholderTextColor="#666"
          />

          <TextInput
            placeholder="Mobile Phone"
            keyboardType="phone-pad"
            style={styles.input}
            placeholderTextColor="#666"
          />

          <TextInput
            placeholder="Address"
            style={styles.input}
            placeholderTextColor="#666"
          />

          <TextInput
            placeholder="Country"
            style={styles.input}
            placeholderTextColor="#666"
          />

          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            style={styles.input}
            placeholderTextColor="#666"
          />

          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            placeholderTextColor="#666"
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setRegister(false)}>
            <Text style={styles.link}>Back to Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f172a",
    padding: 20,
  },

  container: {
    width: Platform.OS === "web" ? 400 : "100%",
    maxWidth: 400,
    backgroundColor: "white",
    padding: 25,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#0f172a",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    color: "black",
  },

  button: {
    backgroundColor: "#2563eb",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  link: {
    color: "#2563eb",
    textAlign: "center",
    marginTop: 20,
    fontSize: 15,
  },
});