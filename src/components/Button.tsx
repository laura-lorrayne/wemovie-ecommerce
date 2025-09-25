import React from "react";
import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  iconName?: keyof typeof Ionicons.glyphMap;
  count?: number;
}

const ButtonContainer = styled.TouchableOpacity`
  background-color: #009edd;
  border-radius: 4px;
  padding: 12px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 12px;
`;

const CountText = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  margin-left: 4px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Button: React.FC<ButtonProps> = ({
  title,
  iconName,
  count,
  ...rest
}) => {
  return (
    <ButtonContainer {...rest}>
      {iconName && (
        <IconWrapper>
          <Ionicons name={iconName} size={20} color="#FFFFFF" />

          {count !== undefined && <CountText>{count}</CountText>}
        </IconWrapper>
      )}
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
};
