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
import { db } from '../lib/firebase';
import { FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';

const PRIMARY = '#682A9B';

export default function ContactScreen() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const onChange = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: '' })); // Clear error when user types
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = 'Please enter your name';
    if (!form.email.trim()) newErrors.email = 'Please enter your email';
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = 'Please enter a valid email';
    if (!form.message.trim()) newErrors.message = 'Please enter a message';
    return newErrors;
  };

  const onSubmit = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, 'contacts'), {
        ...form,
        createdAt: serverTimestamp(),
      });

      setForm({ name: '', email: '', message: '' }); // Reset form
      Alert.alert('Success!', 'Your message has been sent successfully. 🎉');
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
          <Text style={styles.title}>Let’s bring your dream to life.</Text>
          <Text style={styles.subtitle}>Have a project in mind or just want to say hello? We would love to hear from you. Fill out the form below and our team will get back to you shortly.</Text>

          <TextInput
            placeholder="Your Name"
            placeholderTextColor="#9aa0a6"
            style={[styles.input, errors.name && styles.errorInput]}
            value={form.name}
            onChangeText={(t) => onChange('name', t)}
          />
          {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}

          <TextInput
            placeholder="Your Email"
            placeholderTextColor="#9aa0a6"
            style={[styles.input, errors.email && styles.errorInput]}
            autoCapitalize="none"
            keyboardType="email-address"
            value={form.email}
            onChangeText={(t) => onChange('email', t)}
          />
          {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

          <TextInput
            placeholder="Message"
            placeholderTextColor="#9aa0a6"
            style={[styles.input, styles.textarea, errors.message && styles.errorInput]}
            multiline
            value={form.message}
            onChangeText={(t) => onChange('message', t)}
          />
          {errors.message ? (
            <Text style={styles.errorText}>{errors.message}</Text>
          ) : null}

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

        {/* NEW CONTACT INFO SECTION */}
        <View style={styles.contactInfoContainer}>
          <View style={styles.contactItem}>
            <MaterialIcons name="location-on" size={28} color={PRIMARY} />
            <Text style={styles.contactText}>Callaway Crescent, Mernda, Australia</Text>
          </View>

          <View style={styles.contactItem}>
            <FontAwesome5 name="phone" size={22} color={PRIMARY} />
            <Text style={styles.contactText}>+61 430 224 546</Text>
          </View>

          <View style={styles.contactItem}>
            <Entypo name="email" size={22} color={PRIMARY} />
            <Text style={styles.contactText}>info@primedesign.com.au</Text>
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
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 8,
    marginLeft: 4,
  },
  errorInput: {
    borderColor: 'red',
  },
  // Contact info styles
  contactInfoContainer: {
    marginTop: 32,
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  contactText: {
    marginLeft: 14,
    fontSize: 18,
    color: '#222',
  },
});
