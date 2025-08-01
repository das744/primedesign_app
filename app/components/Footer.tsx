

import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© {new Date().getFullYear()} PrimeDesign. All rights reserved.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
  },
  text: {
    color: '#555',
    fontSize: 14,
  },
});
