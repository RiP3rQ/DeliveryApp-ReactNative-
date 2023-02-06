import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import useCustomerOrders from "../hooks/useCustomerOrders";
import { useNavigation } from "@react-navigation/native";
import { CustomerScreenNavigationProp } from "../screens/CustomersScreen";
import { Card, Icon } from "@rneui/themed";

type Props = {
  email: string;
  name: string;
  userId: string;
};

const CustomerCard = ({ email, name, userId }: Props) => {
  const { loading, error, orders } = useCustomerOrders(userId);
  const navigation = useNavigation<CustomerScreenNavigationProp>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("MyModal", {
          name: name,
          userId: userId,
        })
      }
    >
      <Card className="p-5 rounded-lg">
        <View>
          <View className="flex-row justify-between">
            <View>
              <Text className="text-2xl font-bold">{name}</Text>
              <Text className="text-sm text-[#59C1CC]">ID: {userId}</Text>
            </View>
          </View>

          <View className="flex-row items-center justify-end">
            <Text className="text-[#59C1CC]">
              {loading ? "Loading..." : `${orders.length} x`}
            </Text>
            <Icon
              className="mb-5 ml-auto"
              name="box"
              type="entypo"
              color="#59C1CC"
              size={50}
            />
          </View>
        </View>
        <Card.Divider /> 
        <Text>{email}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default CustomerCard;
