import React from 'react';
import {StyleSheet, Text, Platform} from 'react-native';

const Header = () => <Text style={styles.encabezado}>Criptomonedas</Text>;

export default Header;

const styles = StyleSheet.create({
  encabezado: {
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
    fontFamily: 'Lato-Black',
    backgroundColor: '#5E49E2',
    paddingBottom: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 20,
    color: '#FFF',
    marginBottom: 30,
  },
});
