
import { View, Text, Image, StyleSheet } from 'react-native';
import aboutImg from '@/assets/proj1.webp';
import TextStyle from './TextStyle';
import PrimaryButton from './PrimaryButton';

export default function About({
  onLearnMorePress,
  onContactPress,
}: {
  onLearnMorePress: () => void;
  onContactPress: () => void;
}) {
  return (
    <View style={styles.container}>
      <Text style={TextStyle.title}>Who We Are</Text>
      <Image source={aboutImg} style={styles.image} />
      <Text style={TextStyle.body}>
      We are a team of creative professionals passionate about crafting exceptional digital experiences. With a focus on design, usability, and performance, we help businesses of all sizes stand out in the digital world.
      </Text>
      <PrimaryButton title="Learn More" onPress={onLearnMorePress} />
      <PrimaryButton title="Contact Us" onPress={onContactPress} />
    </View>
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
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
});
