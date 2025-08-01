
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';
import TextStyle from '../components/TextStyle';

const items = [
  {
    title: 'Web Design',
    desc: 'Clean, modern, and responsive UI/UX.',
    iconName: 'palette',
    iconLib: 'FontAwesome5',
    color: '#682A9B',
  },
  {
    title: 'Web Development',
    desc: 'Custom websites built with speed, security, and scalability.',
    iconName: 'code',
    iconLib: 'FontAwesome5',
    color: '#3F51B5',
  },
  {
    title: 'Mobile Apps',
    desc: 'Cross-platform mobile apps that deliver great performance.',
    iconName: 'mobile-friendly',
    iconLib: 'MaterialIcons',
    color: '#6BBD8B',
  },
  {
    title: 'Branding',
    desc: 'Crafting a visual identity that stands out and connects.',
    iconName: 'megaphone',
    iconLib: 'Entypo',
    color: '#D95300',
  },
  {
    title: 'SEO ',
    desc: 'Drive traffic and grow with strategic SEO and campaigns.',
    iconName: 'chart-line',
    iconLib: 'FontAwesome5',
    color: '#FF9800',
  },
  {
    title: 'Maintenance',
    desc: 'Ongoing technical support and updates for peace of mind.',
    iconName: 'support-agent',
    iconLib: 'MaterialIcons',
    color: '#22AA20',
  },
];

// Helper to render icon by lib
const renderIcon = (lib: string, name: string, color: string, size: number = 16) => {
  switch (lib) {
    case 'FontAwesome5':
      return <FontAwesome5 name={name} size={size} color={color} />;
    case 'MaterialIcons':
      return <MaterialIcons name={name} size={size} color={color} />;
    case 'Entypo':
      return <Entypo name={name} size={size} color={color} />;
    default:
      return null;
  }
};

export default function Services() {
  return (
    <View style={styles.container}>
      <Text style={TextStyle.title}>Our Services</Text>
      <Text style={TextStyle.body}>
        Our services are designed to give your business a powerful digital presence. 
        From stunning design to scalable development and smart marketing, we handle it all.
      </Text>
      <View style={styles.grid}>
        {items.map((item) => (
          <View key={item.title} style={styles.card}>
            <View style={styles.iconTitle}>
              <View style={[styles.iconWrapper, { backgroundColor: item.color }]}>
                {renderIcon(item.iconLib, item.iconName, '#fff')}
              </View>
              <Text style={styles.cardTitle}>{item.title}</Text>
            </View>
            <Text style={styles.cardDesc}>{item.desc}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  card: {
    width: '48%',
    backgroundColor: '#f8f5fc',
    borderRadius: 10,
    padding: 12,
    marginVertical: 8,
  },
  iconTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  iconWrapper: {
    padding: 10,
    borderRadius: 50,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#682A9B',
  },
  cardDesc: {
    fontSize: 14,
    color: '#333',
  },
});








