import React, { useEffect, useState } from "react";
import { FlatList, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { Movie } from "../types/movie";
import { fetchMovies } from "../services/api";
import { useCart } from "../contexts/CartContext";
import { MovieCard } from "../components/Card";
import { EmptyCart } from "../components/EmptyCart";

const Container = styled.View`
  flex: 1;
  background-color: #2f2e41;
`;

const LoaderContainer = styled(Container)`
  justify-content: center;
  align-items: center;
`;

const HeaderContainer = styled.View`
  padding: 16px 16px 16px 32px;
`;

const Title = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
`;

const Subtitle = styled.Text`
  color: #ffffff;
  font-size: 14px;
  margin-top: 4px;
`;

const MovieList = styled(FlatList as new () => FlatList<Movie>)``;

const HomeScreen = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const { cartItems, addToCart } = useCart();

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data);
      } catch (error) {
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  if (loading) {
    return (
      <LoaderContainer>
        <ActivityIndicator size="large" color="#E6E6E6" />
      </LoaderContainer>
    );
  }

  return (
    <Container>
      {movies.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <HeaderContainer>
            <Title>Mais vendidos</Title>
            <Subtitle>Maiores sucessos do WeMovies</Subtitle>
          </HeaderContainer>
          <MovieList
            data={movies}
            keyExtractor={(item: Movie) => item.id.toString()}
            renderItem={({ item }: { item: Movie }) => {
              const itemInCart = cartItems.find(
                (cartItem) => cartItem.id === item.id
              );
              const count = itemInCart ? itemInCart.quantity : 0;

              return (
                <MovieCard
                  movie={item}
                  onAddToCart={() => addToCart(item)}
                  itemCountInCart={count}
                />
              );
            }}
            contentContainerStyle={{
              alignItems: "center",
              paddingBottom: 16,
            }}
          />
        </>
      )}
    </Container>
  );
};

export default HomeScreen;
