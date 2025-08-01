// app/components/Navbar.tsx
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

type NavbarProps = {
  sections: string[];
  activeSection: string;
  onNavigate: (sectionName: string) => void;
};

export default function Navbar({ sections, activeSection, onNavigate }: NavbarProps) {
  return (
    <View style={styles.navbar}>
      {/* Logo */}
      <Image source={require('@/assets/logo.webp')} style={styles.logo} />

      {/* Navigation buttons */}
      <View style={styles.navItems}>
        {sections.map((sec) => (
          <TouchableOpacity key={sec} style={styles.navButton} onPress={() => onNavigate(sec)}>
            <Text
              style={[
                styles.navButtonText,
                activeSection === sec && styles.activeText,
              ]}
            >
              {sec}
            </Text>
            {activeSection === sec && <View style={styles.activeIndicator} />}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  navItems: {
    flexDirection: 'row',
  },
  navButton: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  navButtonText: {
    color: '#333',
    fontWeight: '600',
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
  },
  activeText: {
    color: '#682A9B',
  },
  activeIndicator: {
    marginTop: 4,
    height: 3,
    width: '100%',
    backgroundColor: '#682A9B',
    borderRadius: 2,
  },
});
