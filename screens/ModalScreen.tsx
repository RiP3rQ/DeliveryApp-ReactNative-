import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "@rneui/themed";
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator/RootNavigator";
import { TabStackParamList } from "../navigator/TabNavigator";
import useCustomerOrders from "../hooks/useCustomerOrders";
import DeliveryCard from "../components/DeliveryCard";

export type ModalScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList>,
  NativeStackNavigationProp<RootStackParamList, "MyModal">
>;

type ModalScreenRouteProp = RouteProp<RootStackParamList, "MyModal">;

const ModalScreen = () => {
  const navigation = useNavigation<ModalScreenNavigationProp>();
  const {
    params: { name, userId },
  } = useRoute<ModalScreenRouteProp>();

  const { loading, error, orders } = useCustomerOrders(userId);

  return (
    <SafeAreaView>
      <TouchableOpacity
        className="absolute right-3 top-10 z-10"
        onPress={navigation.goBack}
      >
        <Icon name="closecircle" type="antdesign" size={30} />
      </TouchableOpacity>

      <View className="mt-3">
        <View className="py-5 border-b border-[#59C1CC]">
          <Text className="text-center text-xl font-bold text-[#59C1CC]">
            {name}
          </Text>
          <Text className="text-center italic text-sm">Deliveries</Text>
        </View>
      </View>

      <FlatList
        className="pb-52"
        data={orders}
        keyExtractor={(item) => item.trackingId}
        renderItem={({ item: order }) => <DeliveryCard order={order} />}
      />
    </SafeAreaView>
  );
};

export default ModalScreen;
