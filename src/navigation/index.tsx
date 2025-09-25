import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useCart } from "../contexts/CartContext";
import { RootStackParamList, RootTabParamList } from "../types/navigation";
import HomeScreen from "../screens/Home";
import CartScreen from "../screens/Cart";

import PurchaseCompleteScreen from "../screens/PurchaseComplete";
import LoadingScreen from "../screens/LoadingScreen";

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const TabNavigator = () => {
  const { cartItems } = useCart();
  const insets = useSafeAreaInsets();
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: "#202124",
          borderTopWidth: 0,
          height: 60 + insets.bottom,
          paddingBottom: insets.bottom,
          paddingTop: 10,
        },
        tabBarLabelStyle: { fontSize: 12, fontWeight: "500" },
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#9E9E9E",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: "Carrinho",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" color={color} size={size} />
          ),
          tabBarBadge: cartItemCount > 0 ? cartItemCount : undefined,
        }}
      />
      <Tab.Screen
        name="Purchase"
        component={PurchaseCompleteScreen}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
          },
        }}
      />
    </Tab.Navigator>
  );
};

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Loading"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1D1D2B",
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
          fontWeight: "700",
          fontSize: 18,
        },
        headerTitleAlign: "center",
        headerShadowVisible: false,
      }}
    >
      {}
      <Stack.Screen
        name="Loading"
        component={LoadingScreen}
        options={{
          headerTitle: "WeMovies",
        }}
      />
      <Stack.Screen
        name="MainTabs"
        component={TabNavigator}
        options={{
          headerTitle: "WeMovies",
        }}
      />
      <Stack.Screen
        name="PurchaseComplete"
        component={PurchaseCompleteScreen}
        options={{
          headerTitle: "WeMovies",
        }}
      />
    </Stack.Navigator>
  );
};
