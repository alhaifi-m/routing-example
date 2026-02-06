import { StyleSheet, Text, View, Button } from 'react-native'
import { useRouter } from 'expo-router'
import React from 'react'

const About = () => {
    const router = useRouter();
  return (
    <View>
      <Text>About Page</Text>
        {/* <Button title="Go to home page" onPress={() => router.push('/home')} /> */}
                <Button title="Go to landing page" onPress={() => router.back()} />
    </View>
  )
}

export default About

const styles = StyleSheet.create({})