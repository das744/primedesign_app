

import { View, Text, StyleSheet, ScrollView, } from 'react-native';

import TextStyle from '../components/TextStyle';

const items = [
  { title: 'Web Design', 
    desc: 'We design clean, intuitive, and visually engaging websites that reflect your brand’s identity. Our approach starts with understanding your goals, then wireframing layouts, selecting typography and color schemes, and delivering fully responsive designs that look beautiful on all devices. We focus on UX principles to ensure a seamless experience for your users.'
  },
  { title: 'Web Development',
     desc: 'From landing pages to complex web apps, we build robust digital solutions using modern frameworks and best practices. Our development process includes clean code architecture, API integration, CMS setup if needed, and responsive optimization. We prioritize speed, accessibility, and long-term maintainability to ensure your site performs and grows with your business.' 
    },
  { title: 'Mobile Apps', 
    desc: ' We develop powerful mobile applications using React Native and other technologies to deliver seamless experiences on both Android and iOS. Our process includes UI prototyping, backend integration, and thorough testing to ensure your app is fast, secure, and user-friendly. Whether it is a startup MVP or a full-scale app, we build it right.' 
  },
  { title: 'Branding & Identity', 
    desc: 'A strong brand starts with a clear identity. We create logos, style guides, and visual systems that align with your brand values. Our branding process involves discovery, concept sketches, revisions, and final brand assets that ensure consistency across web, print, and social media platforms. We help you stand out with a unique and cohesive visual voice.' 
  },
  { title: 'SEO & Digital Marketing', 
    desc: 'We help you increase visibility and reach the right audience through search engine optimization, content marketing, and social strategies. Our team researches keywords, optimizes site structure, and creates tailored campaigns to improve search rankings and drive engagement. We also offer analytics and reporting to help refine performance over time.' 
  },
  { title: 'Maintenance & Support', 
    desc: 'We offer ongoing website maintenance to ensure your site stays fast, secure, and up to date. Our services include regular updates to plugins and frameworks, uptime monitoring, security patching, performance optimization, and content updates. We proactively detect and fix issues before they impact your users, giving you peace of mind and allowing you to focus on your business.' 
  },
];

export default function Services() {
  return (
    <ScrollView>
    <View style={styles.container}>
   <Text style={TextStyle.title}> What We Do </Text>
      <View style={styles.grid}>
        {items.map((item) => (
          <View key={item.title} style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDesc}>{item.desc}</Text>
          </View>
        ))}
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  grid: {
    gap: 20,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
    marginBottom: 8,
  },
  cardDesc: {
    fontSize: 14,
    color: '#555',
    marginBottom: 12,
  },
});

