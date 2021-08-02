import React from 'react';
import {Text, Image, ScrollView, TouchableOpacity, Linking} from 'react-native';
import styles from './Detail.style';
import useFetch from '../../hooks/useFetch';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const Details = ({route}) => {
  const {title} = route.params;
  const detailUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${title}`;

  const {error, loading, data} = useFetch(detailUrl);
  const openYoutube = () => {
    Linking.openURL(data.meals[0].strYoutube);
  };

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  console.log(data);
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{uri: data.meals[0].strMealThumb}} />
      <Text style={styles.header}>{data.meals[0].strMeal}</Text>
      <Text style={styles.category}>{data.meals[0].strCategory}</Text>
      <Text style={styles.desc}>{data.meals[0].strInstructions}</Text>
      <TouchableOpacity onPress={openYoutube} style={styles.button}>
        <Text style={styles.button_text}>Watch on Youtube</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Details;
