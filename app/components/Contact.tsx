//app/cpmponent/Contact.tsx

import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { useState } from 'react';
import PrimaryButton from './PrimaryButton';
import TextStyle from './TextStyle';

import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    const { name, email, message } = form;

    if (!name || !email || !message) {
      Alert.alert('Missing Info', 'Please fill in all fields');
      return;
    }

    try {
      setLoading(true);
      await addDoc(collection(db, 'contacts'), {
        name,
        email,
        message,
        timestamp: new Date(),
      });
      // Alert.alert('Success', 'Your message has been sent!');
       setSuccess(true);   // show success message
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={TextStyle.body}> "Your dream, our mission."</Text>
      <Text style={TextStyle.title}>Let’s start building together</Text>
   

      <TextInput
        placeholder="Your Name"
        style={styles.input}
        value={form.name}
        onChangeText={(name) => setForm((p) => ({ ...p, name }))}
      />
      <TextInput
        placeholder="Your Email"
        style={styles.input}
        value={form.email}
        onChangeText={(email) => setForm((p) => ({ ...p, email }))}
      />
      <TextInput
        placeholder="Message"
        style={[styles.input, styles.messageInput]}
        multiline
        value={form.message}
        onChangeText={(message) => setForm((p) => ({ ...p, message }))}
      />

      <PrimaryButton
        title={loading ? 'Sending...' : 'Send Message'}
        onPress={handleSubmit}
        disabled={loading}
      />
      {success && <Text style={styles.success}>✅ Your message has been sent! We will Contact you ASAP.</Text>}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    marginBottom: 16,
  },
  messageInput: {
    height: 120,
    textAlignVertical: 'top',
  },
  success: {
  marginTop: 12,
  color: '#682A9B',
  fontSize: 14,
  fontWeight: '500',
  textAlign: 'center',
},
});






// import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// import { useState } from 'react';

// export default function Contact() {
//   const [form, setForm] = useState({ name: '', email: '', message: '' });

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Contact Us</Text>

//       <TextInput
//         placeholder="Your Name"
//         placeholderTextColor="#ccc"
//         style={styles.input}
//         value={form.name}
//         onChangeText={(name) => setForm((p) => ({ ...p, name }))}
//       />
//       <TextInput
//         placeholder="Your Email"
//         placeholderTextColor="#ccc"
//         style={styles.input}
//         autoCapitalize="none"
//         keyboardType="email-address"
//         value={form.email}
//         onChangeText={(email) => setForm((p) => ({ ...p, email }))}
//       />
//       <TextInput
//         placeholder="Message"
//         placeholderTextColor="#ccc"
//         style={[styles.input, { height: 120, textAlignVertical: 'top' }]}
//         multiline
//         value={form.message}
//         onChangeText={(message) => setForm((p) => ({ ...p, message }))}
//       />

//       <TouchableOpacity style={styles.button} onPress={() => console.log('Submit', form)}>
//         <Text style={styles.buttonText}>Send Message</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     minHeight: 400,
//     backgroundColor: '#34495e',
//     padding: 20,
//     justifyContent: 'center',
//   },
//   heading: {
//     fontSize: 26,
//     fontWeight: '700',
//     color: '#fff',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   input: {
//     backgroundColor: 'rgba(255,255,255,0.1)',
//     color: '#fff',
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     paddingVertical: 12,
//     marginBottom: 12,
//     fontSize: 16,
//   },
//   button: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     paddingVertical: 12,
//     alignItems: 'center',
//     marginTop: 8,
//   },
//   buttonText: {
//     color: '#34495e',
//     fontWeight: '600',
//     fontSize: 16,
//   },
// });