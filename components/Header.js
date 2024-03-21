import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'expo-image'

const Header = () => {
	return (
		<View style={styles.header}>
			<View style={styles.avatar}>
				<Image
					style={styles.avatarImg}
					source='https://i.pinimg.com/564x/b3/7d/26/b37d261a35f3efd588e60e27053ffdbd.jpg'
				/>
			</View>
			<Text style={styles.boasvindas}>Drake</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	header:{
    flex: 1,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 20
  },
	avatar: {
    width: 50,
    height: 50,
    //backgroundColor: '#FFF',
    //borderRadius: 25,
    marginHorizontal: 10,
    //overflow: 'hidden'
  },
  avatarImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
	boasvindas: {
    color: '#FFF',
    fontSize: 25,
  }
})

export default Header