import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../components/Button";
import { CartNavProps } from "../types/navigation";

const SuccessImageSource = require("../assets/purchase-success.png");

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #2f2e41;
  padding: 0 20px 50px 20px;
`;

const SuccessCard = styled.View`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 32px;
  align-items: center;
  width: 100%;
  height: 90%;
`;

const TimestampText = styled.Text`
  color: #999999;
  font-size: 14px;
  text-align: center;
  margin-bottom: 8px;
`;

const Title = styled.Text`
  color: #2e2e33;
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 24px;
`;

const StyledImage = styled.Image`
  width: 450px;
  height: 450px;
  margin-bottom: 24px;
`;

const PurchaseCompleteScreen = () => {
  const navigation = useNavigation<CartNavProps["navigation"]>();
  const [purchaseTime, setPurchaseTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const formattedTime = `Compra realizada em ${now.toLocaleDateString(
      "pt-BR"
    )} às ${now.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
    setPurchaseTime(formattedTime);
  }, []);

  const handleReturnHome = () => {
    navigation.navigate("MainTabs", { screen: "Home" });
  };

  return (
    <Container>
      <SuccessCard>
        <TimestampText>{purchaseTime}</TimestampText>
        <Title>Compra realizada com sucesso!</Title>
        <StyledImage source={SuccessImageSource} resizeMode="contain" />
        <Button
          title="Recarregar página"
          onPress={handleReturnHome}
          style={{ width: "70%" }}
        />
      </SuccessCard>
    </Container>
  );
};

export default PurchaseCompleteScreen;
