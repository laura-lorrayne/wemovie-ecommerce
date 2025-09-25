import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { useNavigation, StackActions } from "@react-navigation/native";
import { fetchMovies } from "../services/api";
import { HomeNavProps } from "../types/navigation";

const Container = styled.View`
  flex: 1;
  background-color: #202124;
`;

const LoadingScreen = () => {
  const navigation = useNavigation<HomeNavProps["navigation"]>();

  useEffect(() => {
    const initializeApp = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));

        await fetchMovies();

        navigation.dispatch(StackActions.replace("MainTabs"));
      } catch (error) {
        navigation.dispatch(StackActions.replace("MainTabs"));
      }
    };

    initializeApp();
  }, [navigation]);

  return (
    <Container>
      <ActivityIndicator size="large" color="#FFFFFF" />
    </Container>
  );
};

export default LoadingScreen;
