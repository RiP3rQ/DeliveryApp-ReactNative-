import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator/RootNavigator";
import useOrders from "../hooks/useOrders";
import { Button } from "@rneui/themed";
import OrderCard from "../components/OrderCard";

export type OrderScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Orders">,
  NativeStackNavigationProp<RootStackParamList>
>;

const OrdersScreen = () => {
  const navigation = useNavigation<OrderScreenNavigationProp>();
  const { loading, error, orders } = useOrders();
  const [ascending, setAscending] = useState<boolean>(false);

  return (
    <ScrollView className="bg-[#EB6A7C]">
      <Image
        source={{ uri: "https://links.papareact.com/m51" }}
        className="w-full h-64"
      />
      <View>
        <Button
          onPress={() => setAscending(!ascending)}
          color="pink"
          titleStyle={{ color: "gray", fontWeight: "400" }}
          className="py-2 px-5"
        >
          {ascending ? "Showing: Oldest First" : "Showing: Newest First"}
        </Button>

        {orders
          ?.sort((a, b) => {
            if (ascending) {
              return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
            } else {
              return new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1;
            }
          })
          .map((order) => (
            <OrderCard key={order.trackingId} item={order} />
          ))}
      </View>
    </ScrollView>
  );
};

export default OrdersScreen;
