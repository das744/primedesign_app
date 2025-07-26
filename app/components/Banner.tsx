import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Banner() {
  return (
    <View style={styles.banner}>
      <Image
        source={{ uri: 'https://via.placeholder.com/800x400' }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>Welcome to PrimeDesign</Text>
      <Text style={styles.text}>
        We build beautiful and functional digital experiences for businesses.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    minHeight: 420,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#3498db',
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 10,
    marginBottom: 18,
  },
  title: { fontSize: 28, fontWeight: '700', color: '#fff', marginBottom: 10 },
  text: { fontSize: 16, color: '#fff', textAlign: 'center', marginBottom: 20 },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: { color: '#3498db', fontWeight: '600' },
});
