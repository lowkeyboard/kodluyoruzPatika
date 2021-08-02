import React from 'react';
import {FlatList} from 'react-native';

import styles from './Meals.style';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';

import Error from '../../components/Error';
import Loading from '../../components/Loading';
import MealCard from '../../components/MealCard';

const Meals = ({route, navigation}) => {
  const {title} = route.params;

  const List_Meals = Config.LIST_MEALS + $`{title}`;
  const {error, loading, data} = useFetch(List_Meals);
  const selectTitle = title => {
    navigation.navigate('DetailsPage', {title});
  };

  const renderingItem = ({item}) => (
    <MealCard selectTitle={selectTitle} meal={item} />
  );

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <FlatList
      data={data.meals}
      renderItem={renderingItem}
      keyExtractor={item => item.idMeal}
      style={styles.container}
    />
  );
};

export default Meals;
