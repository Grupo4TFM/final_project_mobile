
import { StyleSheet, View, Image} from 'react-native';
import OCB from './src';
let logo = require('./logo.jpeg');

export default function App() {
  return (
    <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={logo}
        />
        <OCB/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo:{
    width: 200,
    height: 200,
    borderRadius: 18,
    resizeMode:'stretch',
  }
});
