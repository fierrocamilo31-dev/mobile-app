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

type RegisterScreenProps = {
  onRegister: (name: string) => void;
  onCancel: () => void;
};

export default function RegisterScreen({ onRegister, onCancel }: RegisterScreenProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [countryOpen, setCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const countries = [
    'Argentina',
    'Brasil',
    'Chile',
    'Colombia',
    'Costa Rica',
    'Cuba',
    'Ecuador',
    'España',
    'México',
    'Panamá',
    'Paraguay',
    'Perú',
    'Puerto Rico',
    'República Dominicana',
    'Uruguay',
    'Venezuela',
    'Estados Unidos',
    'Canadá',
    'Francia',
    'Alemania',
  ];

  const handleRegister = () => {
    if (!firstName.trim() || !lastName.trim() || !country.trim() || !email.trim() || !password.trim()) {
      setError('Por favor completa todos los campos.');
      return;
    }

    setError('');
    const name = `${firstName.trim()} ${lastName.trim()}`;
    Alert.alert('Registro exitoso', `Bienvenido ${name}`);
    onRegister(name);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.bankName}>NovaBank</Text>
        <Text style={styles.subtitle}>Crea tu cuenta bancaria</Text>
      </View>
      <ScrollView contentContainerStyle={styles.card}>
        <Text style={styles.title}>Registro</Text>

        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu nombre"
          placeholderTextColor="#94A3B8"
          value={firstName}
          onChangeText={setFirstName}
        />

        <Text style={styles.label}>Apellido</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu apellido"
          placeholderTextColor="#94A3B8"
          value={lastName}
          onChangeText={setLastName}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu email"
          placeholderTextColor="#94A3B8"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>País</Text>
        <TouchableOpacity
          style={styles.selectInput}
          onPress={() => setCountryOpen((prev) => !prev)}
        >
          <Text style={country ? styles.selectText : styles.selectPlaceholder}>
            {country || 'Selecciona tu país'}
          </Text>
        </TouchableOpacity>
        {countryOpen && (
          <View style={styles.dropdown}>
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar país"
              placeholderTextColor="#94A3B8"
              value={countrySearch}
              onChangeText={setCountrySearch}
            />
            <ScrollView style={styles.dropdownList}>
              {countries
                .filter((item) =>
                  item.toLowerCase().includes(countrySearch.toLowerCase())
                )
                .map((item) => (
                  <TouchableOpacity
                    key={item}
                    style={styles.dropdownItem}
                    onPress={() => {
                      setCountry(item);
                      setCountryOpen(false);
                      setCountrySearch('');
                    }}
                  >
                    <Text style={styles.dropdownItemText}>{item}</Text>
                  </TouchableOpacity>
                ))}
            </ScrollView>
          </View>
        )}

        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Crea una contraseña"
          placeholderTextColor="#94A3B8"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Registrarse</Text>
        </TouchableOpacity>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity onPress={onCancel}>
          <Text style={styles.cancelText}>Volver al login</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  header: {
    paddingHorizontal: 30,
    marginTop: 80,
    marginBottom: 40,
  },
  bankName: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  subtitle: {
    color: '#CBD5E1',
    marginTop: 10,
    fontSize: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
    paddingBottom: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 35,
  },
  label: {
    color: '#334155',
    fontSize: 15,
    marginBottom: 10,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#F1F5F9',
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 18,
    fontSize: 16,
    marginBottom: 22,
    color: '#0F172A',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  selectInput: {
    backgroundColor: '#F1F5F9',
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    justifyContent: 'center',
  },
  selectText: {
    color: '#0F172A',
    fontSize: 16,
  },
  selectPlaceholder: {
    color: '#94A3B8',
    fontSize: 16,
  },
  dropdown: {
    maxHeight: 220,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
    marginBottom: 22,
    overflow: 'hidden',
  },
  searchInput: {
    backgroundColor: '#F8FAFC',
    paddingVertical: 12,
    paddingHorizontal: 18,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    color: '#0F172A',
  },
  dropdownList: {
    maxHeight: 180,
  },
  dropdownItem: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#0F172A',
  },
  registerButton: {
    backgroundColor: '#0F172A',
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  errorText: {
    color: '#dc2626',
    textAlign: 'center',
    marginTop: 14,
    fontSize: 14,
  },
  cancelText: {
    color: '#2563EB',
    textAlign: 'center',
    marginTop: 28,
    fontSize: 15,
    fontWeight: '600',
  },
});
