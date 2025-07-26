import { View, Text, Image, StyleSheet } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About Us</Text>
      <Image
        source={{ uri: 'https://via.placeholder.com/500x300' }}
        style={styles.image}
      />
      <Text style={styles.text}>
        PrimeDesign is a creative studio focused on modern, fast, and responsive
        websites & apps. We care about clean design and delightful user
        experiences.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 400,
    backgroundColor: '#2ecc71',
    padding: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 26,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
  },
});
