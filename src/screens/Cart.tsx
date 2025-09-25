import React from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useCart } from "../contexts/CartContext";
import { EmptyCart } from "../components/EmptyCart";
import { CartItem } from "../components/CartItem";
import { Button } from "../components/Button";
import { CartNavProps } from "../types/navigation";

const CartScreen = ({ navigation }: CartNavProps) => {
  const ScreenContainer = styled.View<{ topInset: number }>`
    flex: 1;
    background-color: #2e2e33;
    padding-top: ${(props: { topInset: number }) => props.topInset}px;
  `;

  const Content = styled.View`
    flex: 1;
    padding: 0 16px;
  `;

  const ScreenTitle = styled.Text`
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 16px;
  `;

  const CartCard = styled.View`
    flex: 1;
    background-color: #ffffff;
    border-radius: 4px;
    padding: 16px;
  `;

  const TotalContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
    padding-top: 16px;
    border-top-width: 1px;
    border-top-color: #f2f2f2;
  `;

  const TotalLabel = styled.Text`
    color: #999999;
    font-size: 14px;
    font-weight: 700;
  `;

  const TotalValue = styled.Text`
    color: #2e2e33;
    font-size: 22px;
    font-weight: 700;
  `;

  const { cartItems, removeFromCart, updateItemQuantity, total, clearCart } =
    useCart();
  const insets = useSafeAreaInsets();

  const handleFinishOrder = () => {
    clearCart();
    navigation.navigate("PurchaseComplete");
  };

  return (
    <ScreenContainer topInset={insets.top}>
      <Content>
        <ScreenTitle>Carrinho de compras</ScreenTitle>

        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <CartCard>
            <FlatList
              data={cartItems}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <CartItem
                  item={item}
                  onRemove={() => removeFromCart(item.id)}
                  onUpdateQuantity={(newQuantity) =>
                    updateItemQuantity(item.id, newQuantity)
                  }
                />
              )}
              showsVerticalScrollIndicator={false}
            />

            <TotalContainer>
              <TotalLabel>TOTAL</TotalLabel>
              <TotalValue>
                {total.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </TotalValue>
            </TotalContainer>

            <Button
              title="Finalizar Pedido"
              onPress={handleFinishOrder}
              style={{ marginTop: 16 }}
            />
          </CartCard>
        )}
      </Content>
    </ScreenContainer>
  );
};

export default CartScreen;
