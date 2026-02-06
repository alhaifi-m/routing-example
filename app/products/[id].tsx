import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import React from "react";

type Product = {
  id: string;
  name: string;
  price: string;
};

const ProductDetailsPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
// Mock product data
  const products: Product[] = [
    { id: "1", name: "iPhone", price: "$999" },
    { id: "2", name: "MacBook", price: "$1999" },
    { id: "3", name: "AirPods", price: "$249" },
  ];
const product = products.find((p) => p.id === id);

if (!product) {
  return <Text>Product not found</Text>;
}
  
  return (
    <View>
      <Text>Product Name: {product.name}</Text>
      <Text>Product Price: {product.price}</Text>
    </View>
  );
};

export default ProductDetailsPage;
