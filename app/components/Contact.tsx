import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact Us</Text>

      <TextInput
        placeholder="Your Name"
        placeholderTextColor="#ccc"
        style={styles.input}
        value={form.name}
        onChangeText={(name) => setForm((p) => ({ ...p, name }))}
      />
      <TextInput
        placeholder="Your Email"
        placeholderTextColor="#ccc"
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
        value={form.email}
        onChangeText={(email) => setForm((p) => ({ ...p, email }))}
      />
      <TextInput
        placeholder="Message"
        placeholderTextColor="#ccc"
        style={[styles.input, { height: 120, textAlignVertical: 'top' }]}
        multiline
        value={form.message}
        onChangeText={(message) => setForm((p) => ({ ...p, message }))}
      />

      <TouchableOpacity style={styles.button} onPress={() => console.log('Submit', form)}>
        <Text style={styles.buttonText}>Send Message</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 400,
    backgroundColor: '#34495e',
    padding: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 26,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#34495e',
    fontWeight: '600',
    fontSize: 16,
  },
});
