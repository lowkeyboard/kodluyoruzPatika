import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: 200,
  },
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  header: {
    color: '#a52a2a',
    fontWeight: 'bold',
    fontSize: 25,
    margin: 10,
    marginBottom: 0,
  },
  category: {
    color: '#a52a2a',
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 0,
    margin: 10,
    paddingBottom: 10,
    borderBottomColor: '#c2c2c2',
    borderBottomWidth: 1,
  },
  desc: {
    padding: 10,
  },
  button: {
    backgroundColor: '#ff0000',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  button_text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
