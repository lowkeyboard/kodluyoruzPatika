import React from 'react';
import {FlatList} from 'react-native';
import Config from 'react-native-config';
import CatCard from '../../components/CatCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import {View, Text} from 'react-native';

const Categories = () => {
  const {error, loading, data} = useFetch(Config.CAT_API_URL);

  const selectTitle = title => {
    navigation.navigate('Detail', {title});
  };

  const renderingItem = ({item}) => (
    <CatCard selectTitle={selectTitle} category={item} />
  );

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <FlatList
      data={data.categories}
      renderItem={renderingItem}
      keyExtractor={item => item.idCategory}
    />
  );
};

export default Categories;
