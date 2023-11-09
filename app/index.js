import { SafeAreaView, ScrollView } from 'react-native'
import { Stack, useRouter } from 'expo-router'
import { COLORS, icons, SIZES, images } from '../constants'
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'
import { View } from 'react-native'
import { useState } from 'react'

const Home = () => {

    const router = useRouter();
    const [serachTerm, setSearchTerm] = useState("");

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                ),
                headerTitle: ""
            }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, padding: SIZES.medium }} >
                    <Welcome
                        serachTerm={serachTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick={() => {
                            if (serachTerm) {
                                router.push(`/search/${serachTerm}`)
                            }
                        }}
                    />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home