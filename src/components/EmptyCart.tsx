import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../components/Button";
import { HomeNavProps } from "../types/navigation";

const EmptyCartImageSource = require("../assets/empty-cart.png");

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 4px;
`;

const Message = styled.Text`
  color: #333333;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 24px;
`;

const StyledImage = styled.Image`
  width: 400px;
  height: 400px;
  margin-bottom: 24px;
`;

export const EmptyCart = () => {
  const navigation = useNavigation<HomeNavProps["navigation"]>();

  return (
    <Container>
      <Message>Parece que não há nada por aqui :(</Message>

      <StyledImage source={EmptyCartImageSource} resizeMode="contain" />
      <Button
        title="Recarregar página"
        onPress={() => navigation.navigate("Home")}
        style={{ width: "70%" }}
      />
    </Container>
  );
};
