import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { StyleSheet } from "react-native";
const Title = styled.Text`
 padding:16px;
 color:red;
`;

export const RestaurantsInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <>
      <Card elevation={5} style={styles.card}>
        <Card.Cover key={name} style={styles.cover} source={{ uri: photos }} />
        <Title>{name}</Title>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 10,
    backgroundColor: "white",
  },

});
