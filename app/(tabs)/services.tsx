
import { View, Text, StyleSheet } from 'react-native';

export default function TwoTab() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Serviceeee Pageeeee</Text>
        <Text>This is the About tab content.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  title: { fontSize: 24, fontWeight: '600', marginBottom: 12 },
});

