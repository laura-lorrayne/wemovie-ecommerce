import React from "react";
import styled from "styled-components/native";
import { Movie } from "../types/movie";
import { Button } from "./Button";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
interface MovieCardProps {
  movie: Movie;
  onAddToCart: () => void;
  itemCountInCart: number;
}

const CardContainer = styled.View`
  background-color: #ffffff;
  border-radius: 6px;
  padding: 20px;
  align-items: center;
  margin: 8px;
  width: 90%;
  max-width: 400px;
`;

const MovieImage = styled.Image`
  width: ${screenWidth * 0.7}px;
  height: 220px;
  margin-bottom: 12px;
`;

const Title = styled.Text`
  color: #333333;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 8px;
`;

const Price = styled.Text`
  color: #333333;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
`;

export const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  onAddToCart,
  itemCountInCart,
}) => {
  return (
    <CardContainer>
      <MovieImage source={{ uri: movie.image }} resizeMode="contain" />
      <Title>{movie.title}</Title>
      <Price>
        {movie.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </Price>
      <Button
        title="Adicionar ao Carrinho"
        iconName="cart-outline"
        count={itemCountInCart}
        onPress={onAddToCart}
        style={{ width: "100%" }}
      />
    </CardContainer>
  );
};
