import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
    paddingLeft: 50,
    justifyContent: 'space-between',
  },
  image: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width / 2,

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    margin: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    justifyContent: 'space-evenly',
  },
  price: {
    marginTop: 3,
  },
  inStock: {
    fontStyle: 'italic',
    textAlign: 'right',
  },
  inner_container: {
    // justifyContent: 'space-evenly',
    // alignItems: 'center',
    backgroundColor: '#D1D0E5',
  },
});
