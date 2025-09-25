import {
  NavigatorScreenParams,
  CompositeScreenProps,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type RootTabParamList = {
  Home: undefined;
  Cart: undefined;
  Profile: undefined;
  Purchase: undefined;
};

export type RootStackParamList = {
  Loading: undefined;
  MainTabs: NavigatorScreenParams<RootTabParamList>;
  PurchaseComplete: undefined;
};

export type LoadingNavProps = NativeStackScreenProps<
  RootStackParamList,
  "Loading"
>;

export type HomeNavProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, "Home">,
  NativeStackScreenProps<RootStackParamList>
>;

export type CartNavProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, "Cart">,
  NativeStackScreenProps<RootStackParamList>
>;
