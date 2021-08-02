import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './CatCard.style';

const CatCard = ({cat, selectTitle}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => selectTitle(cat.idTitle)}
        style={styles.container}>
        <Image style={styles.image} source={{uri: cat.strCategoryThumb}} />
        <Text style={styles.text}>{cat.strCategory}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CatCard;
