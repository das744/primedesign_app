
import { View, Text, Image, StyleSheet } from 'react-native';
import bannerImg from '@/assets/img4.webp';
import PrimaryButton from './PrimaryButton';
import TextStyle from './TextStyle';

export default function Banner({ onGetStartedPress }: { onGetStartedPress: () => void }) {
  return (
    <View style={styles.container}>
      <Image source={bannerImg} style={styles.image} />
      <Text style={TextStyle.title}>Welcome to PrimeDesign</Text>
      <Text style={TextStyle.body}>
       At PrimeDesign, we offer a full suite of digital services tailored to your business needs. From modern web development to custom mobile apps, we create solutions that are fast, scalable, and beautifully designed.
       </Text>
        <Text style={TextStyle.body}>

Whether you're launching a startup, refreshing your brand, or building a new product, our team is here to bring your vision to life with creative precision and technical excellence.
      </Text>
      <PrimaryButton title="Get Started" onPress={onGetStartedPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    marginBottom: 18,
  },
});
