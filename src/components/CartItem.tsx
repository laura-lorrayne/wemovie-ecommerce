import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { CartItem as CartItemType } from "../contexts/CartContext";

interface CartItemProps {
  item: CartItemType;
  onRemove: () => void;
  onUpdateQuantity: (newQuantity: number) => void;
}

const ItemContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #eeeeee;
`;

const ItemImage = styled.Image`
  width: 64px;
  height: 82px;
  resize-mode: contain;
  margin-right: 16px;
`;

const InfoContainer = styled.View`
  flex: 1;
`;

const TopRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const TitleContainer = styled.View`
  flex: 1;
  margin-right: 8px;
`;

const Title = styled.Text`
  color: #2e2e33;
  font-size: 14px;
  font-weight: 700;
`;

const DateAddedText = styled.Text`
  color: #999999;
  font-size: 12px;
  margin-top: 4px;
`;

const BottomRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const SubtotalContainer = styled.View`
  align-items: flex-end;
`;

const SubtotalLabel = styled.Text`
  color: #999999;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 4px;
`;

const Price = styled.Text`
  color: #2e2e33;
  font-size: 16px;
  font-weight: 700;
`;

const QuantityControls = styled.View`
  flex-direction: row;
  align-items: center;
`;

const QuantityButton = styled.TouchableOpacity`
  padding: 4px;
`;

const QuantityDisplay = styled.View`
  width: 50px;
  height: 26px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  margin: 0 12px;
`;

const QuantityText = styled.Text`
  color: #2e2e33;
  font-size: 14px;
`;

const RemoveButton = styled.TouchableOpacity`
  padding: 8px;
`;

export const CartItem: React.FC<CartItemProps> = ({
  item,
  onRemove,
  onUpdateQuantity,
}) => {
  return (
    <ItemContainer>
      <ItemImage source={{ uri: item.image }} />
      <InfoContainer>
        <TopRow>
          <TitleContainer>
            <Title>{item.title}</Title>
            <DateAddedText>Adicionado em {item.dateAdded}</DateAddedText>
          </TitleContainer>
          <RemoveButton onPress={onRemove}>
            <Ionicons name="trash-outline" size={24} color="#009EDD" />
          </RemoveButton>
        </TopRow>

        <BottomRow>
          <QuantityControls>
            <QuantityButton
              onPress={() => onUpdateQuantity(Math.max(1, item.quantity - 1))}
            >
              <Ionicons
                name="remove-circle-outline"
                size={24}
                color="#00BFFF"
              />
            </QuantityButton>
            <QuantityDisplay>
              <QuantityText>{item.quantity}</QuantityText>
            </QuantityDisplay>
            <QuantityButton onPress={() => onUpdateQuantity(item.quantity + 1)}>
              <Ionicons name="add-circle-outline" size={24} color="#009EDD" />
            </QuantityButton>
          </QuantityControls>

          <SubtotalContainer>
            <SubtotalLabel>SUBTOTAL</SubtotalLabel>
            <Price>
              {(item.price * item.quantity).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </Price>
          </SubtotalContainer>
        </BottomRow>
      </InfoContainer>
    </ItemContainer>
  );
};
