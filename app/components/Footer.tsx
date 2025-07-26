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
    minHeight: 120,
    backgroundColor: '#95a5a6',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: '#222',
    fontWeight: '500',
  },
});
