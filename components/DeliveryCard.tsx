import { View, Text } from "react-native";
import React from "react";
import { Card, Divider, Icon } from "@rneui/themed";

interface Props {
  order: Order;
}

const DeliveryCard = ({ order }: Props) => {
  return (
    <Card
      className="rounded-lg my-2 p-0 pt-4"
      containerStyle={{
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        backgroundColor: "#59C1CC",
      }}
    >
      <View>
        <Icon name="box" type="entypo" size={50} color="white" />
        <View>
          <Text className="text-xs text-center uppercase text-white font-bold">
            {order.carrier} - {order.trackingId}
          </Text>
          <Text className="text-white text-center text-lg font-bold">
            Expected Delivery: {new Date(order.createdAt).toLocaleDateString()}
          </Text>
        </View>

        <View className="mx-auto">
          <Text className="text-center text-base text-white font-bold mt-5">
            Address:
          </Text>
          <Text className="text-sm text-center text-white">
            {order.Address}, {order.City}{" "}
          </Text>
          <Text className="text-sm text-center italic text-white">
            Shipping Cost: ${order.shippingCost}
          </Text>
        </View>
      </View>

      <Divider color="white" />

      <View>
        {order.trackingItems.items.map((item) => (
          <View className="flex-row justify-between items-center">
            <Text className="text-sm italic text-white">{item.name}</Text>
            <Text className="text-white text-xl">x {item.quantity}</Text>
          </View>
        ))}
      </View>
    </Card>
  );
};

export default DeliveryCard;
