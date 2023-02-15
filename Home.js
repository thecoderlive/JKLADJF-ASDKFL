import React from 'react'
import {  ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import Stories from './Stories'
import Posts from './Posts'

const Home = () => (
<ScrollView style={styles.home} showsVerticalScrollIndicator={false}>
<Stories item={item.stories}/>
<Posts item={item.posts}/>
</ScrollView>
)

export default Home;

const styles = StyleSheet.create({
    
});