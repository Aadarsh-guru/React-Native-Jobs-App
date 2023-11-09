import React from 'react'
import { View, Text, TextInput, FlatList } from 'react-native'
import styles from './welcome.style'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import { SIZES, icons } from '../../../constants'
import { useRouter } from 'expo-router'

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {

  const router = useRouter();
  const [activeJobType, setActiveJobType] = React.useState('Full-Time')

  const jobTypes = [
    "Full-Time",
    "Part-Time",
    "Contractor"
  ]

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName} >Hello Aadarsh</Text>
        <Text style={styles.welcomeMessage} >Find Your Perfect Job</Text>
      </View>

      <View style={styles.searchContainer} >
        <View style={styles.searchWrapper} >
          <TextInput style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for ?'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick} >
          <Image source={icons.search} resizeMode='contain' style={styles.searchBtnImage} />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer} >

        <FlatList
          data={jobTypes}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.tab(activeJobType, item)} onPress={() => { setActiveJobType(item); router.push(`/search/${item}`) }} >
                <Text style={styles.tabText} >{item}</Text>
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />

      </View>

    </View>
  )
}

export default Welcome