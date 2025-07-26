
import { View, Text, StyleSheet } from 'react-native';

export default function ServicesPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Service Form</Text>
      <Text>This is the Model page.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  title: { fontSize: 24, fontWeight: '600', marginBottom: 12 },
});