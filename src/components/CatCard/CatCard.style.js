import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#bdbdbd',
    backgroundColor: '#eeeeee',
    margin: 10,
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    height: 100,
    width: 100,
    borderRadius: 20,
  },
  text: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width - 30,
    padding: 5,
    paddingRight: 15,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    backgroundColor: 'black',
    opacity: 0.5,
    textAlign: 'right',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
});
