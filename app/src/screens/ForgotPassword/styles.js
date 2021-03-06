import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  contentCenter: {
    flex: 1,
    backgroundColor: '#F5F8FA',
    justifyContent: 'center'
  },
  screen: {
    flex: 1,
    backgroundColor: '#F5F8FA'
  },
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    marginVertical: Dimensions.get('window').height / 60,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 40,
    overflow: 'visible'
  },
  inputContainer: {
    marginTop: 30,
    marginBottom: 20,
  },
  input: {
    width: Dimensions.get('window').width * 0.65,
  },
  button: {
    width: 195,
    height: 35,
    marginTop: 10,
    backgroundColor: Colors.accentColor,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: 'center'

  },
  buttonText:{
    color: '#fff',
    fontWeight: 'bold'
  },
  forgot: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})