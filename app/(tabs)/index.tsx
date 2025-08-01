
import React, { useRef, useState } from 'react';
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
import Navbar from '../components/Navbar';

const sections = ['About', 'Services', 'Contact'];

// without logo
// export default function Home() {
//   const scrollViewRef = useRef<ScrollView>(null);
//   const sectionPositions = useRef<Record<string, number>>({});
//   const [activeSection, setActiveSection] = useState('Home');

//   const onLayout = (
//     event: NativeSyntheticEvent<LayoutChangeEvent['nativeEvent']>,
//     sectionName: string
//   ) => {
//     const { y } = event.nativeEvent.layout;
//     sectionPositions.current[sectionName] = y;
//   };

//   const scrollToSection = (sectionName: string) => {
//     const y = sectionPositions.current[sectionName];
//     if (scrollViewRef.current && y !== undefined) {
//       scrollViewRef.current.scrollTo({ y, animated: true });
//       setActiveSection(sectionName);
//     }
//   };

//   // Scroll to contact when "Get Started" button is clicked
//   const scrollToContact = () => scrollToSection('Contact');

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
//       {/* Navbar */}
//       <View style={styles.navbar}>
//         {sections.map((sec) => (
//           <TouchableOpacity
//             key={sec}
//             style={styles.navButton}
//             onPress={() => scrollToSection(sec)}
//           >
//             <Text
//               style={[
//                 styles.navButtonText,
//                 activeSection === sec && styles.activeText,
//               ]}
//             >
//               {sec}
//             </Text>
//             {activeSection === sec && <View style={styles.activeIndicator} />}
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Scrollable content */}
//       <ScrollView
//         ref={scrollViewRef}
//         style={{ flex: 1 }}
//         contentContainerStyle={{ paddingBottom: 40 }}
//         scrollEventThrottle={16}
//       >
//         <View onLayout={(e) => onLayout(e, 'Home')}>
//           <Banner onGetStartedPress={scrollToContact} />
//         </View>

//         <View onLayout={(e) => onLayout(e, 'About')}>
//           <About
//             onLearnMorePress={() => scrollToSection('Services')}
//             onContactPress={() => scrollToSection('Contact')}
//           />
//         </View>


//         <View onLayout={(e) => onLayout(e, 'Services')}>
//           <Services />
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

// const styles = StyleSheet.create({
//   navbar: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     paddingVertical: 12,
//     paddingHorizontal: 10,
//     justifyContent: 'space-around',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.08,
//     shadowRadius: 4,
//     elevation: 3,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   navButton: {
//     alignItems: 'center',
//     paddingHorizontal: 10,
//   },
//   navButtonText: {
//     color: '#333',
//     fontWeight: '600',
//     fontSize: 16,
//     fontFamily: 'Poppins_600SemiBold',
//     // fontFamily: 'timeless',
//   },
//   activeText: {
//     color: '#682A9B',
//   },
//   activeIndicator: {
//     marginTop: 4,
//     height: 3,
//     width: '100%',
//     backgroundColor: '#682A9B',
//     borderRadius: 2,
//   },
// });


// with logo
export default function Home() {
  const scrollViewRef = useRef<ScrollView>(null);
  const sectionPositions = useRef<Record<string, number>>({});
  const [activeSection, setActiveSection] = useState('Home');

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
      setActiveSection(sectionName);
    }
  };

  const scrollToContact = () => scrollToSection('Contact');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Navbar extracted as separate component */}
      <Navbar
        sections={sections}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      <ScrollView
        ref={scrollViewRef}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 40 }}
        scrollEventThrottle={16}
      >
        <View onLayout={(e) => onLayout(e, 'Home')}>
          <Banner onGetStartedPress={scrollToContact} />
        </View>

        <View onLayout={(e) => onLayout(e, 'About')}>
          <About
            onLearnMorePress={() => scrollToSection('Services')}
            onContactPress={() => scrollToSection('Contact')}
          />
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