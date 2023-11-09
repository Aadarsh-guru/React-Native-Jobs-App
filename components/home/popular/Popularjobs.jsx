import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from '../../../components/common/cards/popular/PopularJobCard'
import useFetch from '../../../hook/useFetch'
import { useState } from 'react'
import { useRouter } from 'expo-router'

const Popularjobs = () => {

  const router = useRouter();
  const { error, loading, data, refetch } = useFetch('search', {
    query: 'React Developer',
    num_pages: 1
  })

  const [selectedJob, setSelectedJob] = useState('');

  const handlePress = (job) => {
    router.push(`/job-details/${job?.job_id}`)
    setSelectedJob(job?.job_id)
  }

  return (
    <View style={styles.container} >
      <View style={styles.header} >
        <Text style={styles.headerTitle} >Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn} >Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}  >
        {
          loading ? (
            <ActivityIndicator size='large' color={COLORS.primary} />
          )
            : error ? (
              <Text>Something went wrong!</Text>

            )
              : (
                <FlatList
                  data={data}
                  renderItem={({ item }) => (
                    <PopularJobCard selectedJob={''} handlePress={handlePress} item={item} />
                  )}
                  key={item => item?.job_id}
                  contentContainerStyle={{ columnGap: SIZES.medium }}
                  horizontal
                />
              )
        }
      </View>
    </View>
  )
}

export default Popularjobs