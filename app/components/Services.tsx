import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const items = [
  { title: 'Web Design', desc: 'Beautiful, responsive UI/UX.' },
  { title: 'Web Development', desc: 'Fast, secure, scalable.' },
  { title: 'SEO & Marketing', desc: 'Grow your traffic & brand.' },
];

export default function Services() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Our Services</Text>

      <View style={styles.grid}>
        {items.map((item) => (
          <View key={item.title} style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDesc}>{item.desc}</Text>
            <TouchableOpacity style={styles.cardBtn}>
              <Text style={styles.cardBtnText}>Learn More</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 400,
    backgroundColor: '#9b59b6',
    padding: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  grid: {
    gap: 12,
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 10,
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 6,
  },
  cardDesc: {
    fontSize: 14,
    color: '#f0f0f0',
    marginBottom: 12,
  },
  cardBtn: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  cardBtnText: {
    color: '#9b59b6',
    fontWeight: '600',
  },
});
