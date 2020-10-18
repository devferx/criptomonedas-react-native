import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import Header from './components/Header';

const App = () => {
  return (
    <View>
      <Header />
      <Image
        style={styles.imagen}
        source={require('./assets/img/cryptomonedas.png')}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  imagen: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },
});
