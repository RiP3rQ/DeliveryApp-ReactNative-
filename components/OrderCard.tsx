import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Card, Icon } from "@rneui/themed";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";
import { RootStackParamList } from "../navigator/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type OrdersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Orders">,
  NativeStackNavigationProp<RootStackParamList>
>;

interface Props {
  item: Order;
}

const OrderCard = ({ item }: Props) => {
  const navigation = useNavigation<OrdersScreenNavigationProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Order", { order: item })}
    >
      <Card className="px-5 rounded-lg">
        <View className="flex-row justify-between items-center">
          <View>
            <Icon
              name="truck-delivery"
              color={"#EB6A7C"}
              type="material-community"
            />
            <Text className="text-base">
              {new Date(item.createdAt).toDateString()}
            </Text>
          </View>

          <View>
            <Text className="text-gray-400">
              {item.carrier} - {item.trackingId}
            </Text>
            <Text className="text-gray-500 text-sm">
              {item.trackingItems.customer.name}
            </Text>
          </View>

          <View className="flex-row items-center">
            <Text className="text-sm text-[#EB6A7C]">
              {item.trackingItems.items.length} x{" "}
            </Text>
            <Icon name="box" type="feather" className="ml-2" />
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default OrderCard;
