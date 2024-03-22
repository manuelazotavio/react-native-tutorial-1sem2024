import { StatusBar } from 'expo-status-bar'
import { StyleSheet, ImageBackground, View} from 'react-native'

import Body from '../components/Body'

export default function ListUserScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground 
        resizeMode="cover"
        source={require('../assets/images/fundo.jpg')}
        style={styles.bg}
      >

        <Body />
      </ImageBackground>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bg: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  }
});

