import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ScrollView,
} from 'react-native';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from './lib/firebase'; // <- adjust path if you placed it elsewhere

const PRIMARY = '#3498db';

export default function ContactScreen() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const onChange = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const validate = () => {
    if (!form.name.trim()) return 'Please enter your name';
    if (!form.email.trim()) return 'Please enter your email';
    if (!/\S+@\S+\.\S+/.test(form.email)) return 'Please enter a valid email';
    if (!form.message.trim()) return 'Please enter a message';
    return null;
  };

  const onSubmit = async () => {
    const error = validate();
    if (error) {
      Alert.alert('Validation error', error);
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, 'contacts'), {
        ...form,
        createdAt: serverTimestamp(),
      });

      Alert.alert('Thank you!', 'Your message has been sent.');
      setForm({ name: '', email: '', message: '' });
    } catch (e: any) {
      console.error(e);
      Alert.alert('Error', e?.message ?? 'Failed to send message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#f6f7fb' }}
      behavior={Platform.select({ ios: 'padding', android: undefined })}
    >
      <ScrollView
        contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.card}>
          <Text style={styles.title}>Contact Us</Text>
          <Text style={styles.subtitle}>
            We’d love to hear about your project.
          </Text>

          <TextInput
          placeholder="Your Name"
          placeholderTextColor="#9aa0a6"
          style={styles.input}
          value={form.name}
          onChangeText={(t) => onChange('name', t)}
          />

          <TextInput
          placeholder="Your Email"
          placeholderTextColor="#9aa0a6"
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
          value={form.email}
          onChangeText={(t) => onChange('email', t)}
          />

          <TextInput
          placeholder="Message"
          placeholderTextColor="#9aa0a6"
          style={[styles.input, styles.textarea]}
          multiline
          value={form.message}
          onChangeText={(t) => onChange('message', t)}
          />

          <View style={styles.buttonWrapper}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText} onPress={onSubmit}>
                Send Message
              </Text>
            )}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#222',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#f3f5f8',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: '#222',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e4e6eb',
  },
  textarea: {
    height: 140,
    textAlignVertical: 'top',
  },
  buttonWrapper: {
    backgroundColor: PRIMARY,
    borderRadius: 10,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
    shadowColor: PRIMARY,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
