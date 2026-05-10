import React, { useState } from "react";
import HomeScreen from "../src/screens/homescreen";
import LoginScreen from "../src/screens/loginscreen";
import RegisterScreen from "../src/screens/registerscreen";
import SplashScreen from "../src/screens/splashscreen";

export default function App() {
  const [screen, setScreen] = useState<'splash' | 'login' | 'register' | 'home'>('splash');
  const [userName, setUserName] = useState('Usuario');

  if (screen === 'splash') {
    return <SplashScreen onFinish={() => setScreen('login')} />;
  }

  if (screen === 'login') {
    return (
      <LoginScreen
        onLogin={(name: string) => {
          setUserName(name);
          setScreen('home');
        }}
        onGoRegister={() => setScreen('register')}
      />
    );
  }

  if (screen === 'register') {
    return (
      <RegisterScreen
        onRegister={(name: string) => {
          setUserName(name);
          setScreen('home');
        }}
        onCancel={() => setScreen('login')}
      />
    );
  }

  return <HomeScreen userName={userName} onLogout={() => setScreen('login')} />;
}

