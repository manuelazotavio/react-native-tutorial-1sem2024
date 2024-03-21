import { StatusBar } from 'expo-status-bar'
import { StyleSheet, SectionList, ImageBackground} from 'react-native'
import Header from '../components/Header'
import Body from '../components/Body'

export default function ListUserScreen() {
  return (
    <SectionList style={styles.container}>
      <ImageBackground 
        resizeMode="cover"
        source={require('../assets/images/fundo.jpg')}
        style={styles.bg}
      >
        <Header />
        <Body />
      </ImageBackground>
      <StatusBar style="light" />
    </SectionList>
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

