import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

type LoginScreenProps = {
  onLogin: (name: string) => void;
  onGoRegister: () => void;
};

const LoginScreen = ({ onLogin, onGoRegister }: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const parseNameFromEmail = (value: string) => {
    const username = value.split('@')[0] || 'Usuario';
    const nameParts = username.replace(/[._]/g, ' ').split(' ');
    return nameParts
      .filter(Boolean)
      .map((part) => part[0].toUpperCase() + part.slice(1).toLowerCase())
      .join(' ');
  };

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      setError('Por favor ingresa tu correo y contraseña.');
      return;
    }

    const name = parseNameFromEmail(email.trim());
    setError('');
    Alert.alert('Bienvenido', `Has ingresado como ${name}`);
    onLogin(name);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

        {/* HEADER SECTION */}
        <View style={styles.headerContainer}>
          <View style={styles.logoCircle}>
            <MaterialIcons name="account-balance" size={48} color="#FFFFFF" />
          </View>
          <Text style={styles.bankName}>NovaBank</Text>
          <Text style={styles.tagline}>Banca Digital Segura</Text>
        </View>

        {/* LOGIN FORM SECTION */}
        <View style={styles.formContainer}>
          <View style={styles.formHeader}>
            <Text style={styles.formTitle}>Bienvenido</Text>
            <Text style={styles.formSubtitle}>Inicia sesión con tu cuenta</Text>
          </View>

          {/* EMAIL INPUT */}
          <View style={styles.inputGroup}>
            <View style={styles.inputLabelRow}>
              <MaterialIcons name="email" size={18} color="#6366F1" />
              <Text style={styles.inputLabel}>Correo electrónico</Text>
            </View>
            <View style={[styles.inputContainer, emailFocused && styles.inputContainerFocused]}>
              <TextInput
                style={styles.input}
                placeholder="usuario@ejemplo.com"
                placeholderTextColor="#CBD5E1"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
              />
            </View>
          </View>

          {/* PASSWORD INPUT */}
          <View style={styles.inputGroup}>
            <View style={styles.inputLabelRow}>
              <MaterialIcons name="lock" size={18} color="#EC4899" />
              <Text style={styles.inputLabel}>Contraseña</Text>
            </View>
            <View style={[styles.inputContainer, passwordFocused && styles.inputContainerFocused]}>
              <TextInput
                style={styles.input}
                placeholder="••••••••"
                placeholderTextColor="#CBD5E1"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
              />
              <TouchableOpacity
                style={styles.eyeButton}
                onPress={() => setShowPassword(!showPassword)}
              >
                <MaterialIcons
                  name={showPassword ? 'visibility' : 'visibility-off'}
                  size={20}
                  color="#94A3B8"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* ERROR MESSAGE */}
          {error ? (
            <View style={styles.errorContainer}>
              <MaterialIcons name="error-outline" size={18} color="#EF4444" />
              <Text style={styles.errorText}>{error}</Text>
            </View>
          ) : null}

          {/* LOGIN BUTTON */}
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
            activeOpacity={0.8}
          >
            <MaterialIcons name="login" size={20} color="#FFFFFF" />
            <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
          </TouchableOpacity>

          {/* FORGOT PASSWORD */}
          <TouchableOpacity style={styles.forgotButton}>
            <Text style={styles.forgotText}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
        </View>

        {/* REGISTER SECTION */}
        <View style={styles.registerContainer}>
          <Text style={styles.registerLabel}>¿No tienes cuenta?</Text>
          <TouchableOpacity onPress={onGoRegister} style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Regístrate aquí</Text>
            <MaterialIcons name="arrow-forward" size={16} color="#6366F1" />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  headerContainer: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#6366F1',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  bankName: {
    fontSize: 36,
    fontWeight: '900',
    color: '#1E293B',
    letterSpacing: -0.5,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  formContainer: {
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
    marginBottom: 24,
  },
  formHeader: {
    marginBottom: 28,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 6,
  },
  formSubtitle: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '500',
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E293B',
    marginLeft: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  inputContainerFocused: {
    borderColor: '#6366F1',
    backgroundColor: '#F5F3FF',
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#1E293B',
    fontWeight: '500',
    paddingHorizontal: 10,
  },
  eyeButton: {
    padding: 8,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEE2E2',
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#EF4444',
  },
  errorText: {
    color: '#DC2626',
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 8,
    flex: 1,
  },
  loginButton: {
    flexDirection: 'row',
    backgroundColor: '#6366F1',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 4,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
    marginLeft: 8,
    letterSpacing: 0.5,
  },
  forgotButton: {
    alignItems: 'center',
  },
  forgotText: {
    fontSize: 13,
    color: '#6366F1',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  registerContainer: {
    marginHorizontal: 20,
    alignItems: 'center',
  },
  registerLabel: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 10,
    fontWeight: '500',
  },
  registerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F4F8',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E2E8F0',
  },
  registerButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#6366F1',
    marginRight: 6,
  },
});