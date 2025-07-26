// myWebsiteApp/app/(tabs)/index.tsx (main entry point for the app)

import React, { useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  LayoutChangeEvent,
  NativeSyntheticEvent,
} from 'react-native';

import Banner from '../components/Banner';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const sections = ['Home', 'About', 'Services', 'Contact'];

export default function Home() {
  const scrollViewRef = useRef<ScrollView>(null);
  const sectionPositions = useRef<Record<string, number>>({});

  const onLayout = (
    event: NativeSyntheticEvent<LayoutChangeEvent['nativeEvent']>,
    sectionName: string
  ) => {
    const { y } = event.nativeEvent.layout;
    sectionPositions.current[sectionName] = y;
  };

  const scrollToSection = (sectionName: string) => {
    const y = sectionPositions.current[sectionName];
    if (scrollViewRef.current && y !== undefined) {
      scrollViewRef.current.scrollTo({ y, animated: true });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Navbar */}
      <View style={styles.navbar}>
        {sections.map((sec) => (
          <TouchableOpacity
            key={sec}
            style={styles.navButton}
            onPress={() => scrollToSection(sec)}
          >
          <Text style={styles.navButtonText}>{sec}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Scrollable content */}
      <ScrollView
        ref={scrollViewRef}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <View onLayout={(e) => onLayout(e, 'Home')}>
          <Banner />
        </View>

        <View onLayout={(e) => onLayout(e, 'About')}>
          <About />
        </View>

        <View onLayout={(e) => onLayout(e, 'Services')}>
          <Services />
        </View>

        <View onLayout={(e) => onLayout(e, 'Contact')}>
          <Contact />
        </View>

        <View onLayout={(e) => onLayout(e, 'Footer')}>
          <Footer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    backgroundColor: '#222',
    paddingVertical: 10,
    paddingHorizontal: 5,
    justifyContent: 'space-around',
  },
  navButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  navButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});



// import React, { useRef } from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   StyleSheet,
//   TouchableOpacity,
//   NativeSyntheticEvent,
//   LayoutChangeEvent,
//   SafeAreaView,
// } from 'react-native';

// const sections = ['Home', 'About', 'Feature', 'Service', 'Contact'];

// export default function Home() {
//   const scrollViewRef = useRef<ScrollView>(null);
//   const sectionPositions = useRef<Record<string, number>>({});

//   const onLayout = (event: NativeSyntheticEvent<LayoutChangeEvent['nativeEvent']>, sectionName: string) => {
//     const { y } = event.nativeEvent.layout;
//     sectionPositions.current[sectionName] = y;
//   };

//   const scrollToSection = (sectionName: string) => {
//     const y = sectionPositions.current[sectionName];
//     if (scrollViewRef.current && y !== undefined) {
//       scrollViewRef.current.scrollTo({ y, animated: true });
//     }
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       {/* Navbar */}
//       <View style={styles.navbar}>
//         {sections.map((sec) => (
//           <TouchableOpacity
//             key={sec}
//             style={styles.navButton}
//             onPress={() => scrollToSection(sec)}
//           >
//             <Text style={styles.navButtonText}>{sec}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Scrollable content */}
//       <ScrollView
//         ref={scrollViewRef}
//         style={{ flex: 1 }}
//         contentContainerStyle={{ paddingBottom: 40 }}
//       >
//         <View onLayout={(e) => onLayout(e, 'Home')}>
//           <Banner />
//         </View>

//         <View onLayout={(e) => onLayout(e, 'About')}>
//           <About />
//         </View>

//         <View onLayout={(e) => onLayout(e, 'Feature')}>
//           <Feature />
//         </View>

//         <View onLayout={(e) => onLayout(e, 'Service')}>
//           <Service />
//         </View>

//         <View onLayout={(e) => onLayout(e, 'Contact')}>
//           <Contact />
//         </View>

//         <View onLayout={(e) => onLayout(e, 'Footer')}>
//           <Footer />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// /* ---------- Sections ---------- */

// function Banner() {
//   return (
//     <View style={[styles.section, { backgroundColor: '#3498db' }]}>
//       <Text style={styles.sectionTitle}>Welcome to My primedesign</Text>
//       <Text style={styles.sectionText}>This is the Banner section.</Text>
//     </View>
//   );
// }

// function About() {
//   return (
//     <View style={[styles.section, { backgroundColor: '#2ecc71' }]}>
//       <Text style={styles.sectionTitle}>About Us</Text>
//       <Text style={styles.sectionText}>
//         We provide awesome services to our customers.
//       </Text>
//     </View>
//   );
// }

// function Feature() {
//   return (
//     <View style={[styles.section, { backgroundColor: '#e67e22' }]}>
//       <Text style={styles.sectionTitle}>Features</Text>
//       <Text style={styles.sectionText}>Check out our great features.</Text>
//     </View>
//   );
// }

// function Service() {
//   return (
//     <View style={[styles.section, { backgroundColor: '#9b59b6' }]}>
//       <Text style={styles.sectionTitle}>Services</Text>
//       <Text style={styles.sectionText}>We offer multiple services.</Text>
//     </View>
//   );
// }

// function Contact() {
//   return (
//     <View style={[styles.section, { backgroundColor: '#34495e' }]}>
//       <Text style={styles.sectionTitle}>Contact Us</Text>
//       <Text style={styles.sectionText}>Reach out to us anytime!</Text>
//     </View>
//   );
// }

// function Footer() {
//   return (
//     <View style={[styles.section, { backgroundColor: '#95a5a6' }]}>
//       <Text style={styles.sectionTitle}>Footer</Text>
//       <Text style={styles.sectionText}>© 2025 My Company</Text>
//     </View>
//   );
// }

// /* ---------- Styles ---------- */

// const styles = StyleSheet.create({
//   navbar: {
//     flexDirection: 'row',
//     backgroundColor: '#222',
//     paddingVertical: 10,
//     paddingHorizontal: 5,
//     justifyContent: 'space-around',
//   },
//   navButton: {
//     paddingHorizontal: 10,
//     paddingVertical: 6,
//   },
//   navButtonText: {
//     color: '#fff',
//     fontWeight: '600',
//   },
//   section: {
//     height: 400,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   sectionTitle: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#fff',
//     marginBottom: 12,
//   },
//   sectionText: {
//     fontSize: 18,
//     color: '#fff',
//   },
// });

