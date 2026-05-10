import React, { useEffect, useRef } from "react";
import {
    Animated,
    SafeAreaView,
    StyleSheet,
    Text
} from "react-native";

type SplashScreenProps = {
  onFinish: () => void;
};

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        friction: 7,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();

    const timeout = setTimeout(onFinish, 2500);
    return () => clearTimeout(timeout);
  }, [onFinish, opacity, scale]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.card,
          {
            opacity,
            transform: [{ scale }],
          },
        ]}
      >
        <Animated.Image
          source={require("../../assets/images/splash-icon.png")}
          style={styles.logoImage}
          resizeMode="contain"
        />
        <Text style={styles.title}>NovaBank</Text>
        <Text style={styles.subtitle}>Secure mobile banking in one place</Text>
      </Animated.View>
      <Text style={styles.loadingText}>Cargando...</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  card: {
    alignItems: "center",
    padding: 30,
    borderRadius: 28,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.12)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.15,
    shadowRadius: 30,
    elevation: 8,
  },
  logoImage: {
    width: 140,
    height: 140,
    marginBottom: 22,
  },
  title: {
    color: "#ffffff",
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    color: "#94a3b8",
    fontSize: 16,
    textAlign: "center",
  },
  loadingText: {
    marginTop: 24,
    color: "#94a3b8",
    fontSize: 14,
  },
});
