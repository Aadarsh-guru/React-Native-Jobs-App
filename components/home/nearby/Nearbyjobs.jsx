import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import styles from './nearbyjobs.style'
import { COLORS, SIZES } from '../../../constants'
import NearbyJobcard from '../../../components/common/cards/nearby/NearbyJobCard'
import useFetch from '../../../hook/useFetch'
import { useRouter } from 'expo-router'

const NearbtJobs = () => {

  const router = useRouter();
  const { error, loading, data, refetch } = useFetch('search', {
    query: 'React Developer',
    num_pages: 1
  })

  return (
    <View style={styles.container} >
      <View style={styles.header} >
        <Text style={styles.headerTitle} >Nearby Jobs</Text>
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
                data?.map((job, index) => (
                  <NearbyJobcard
                    job={job}
                    key={index}
                    handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
                  />
                ))
              )
        }
      </View>
    </View>
  )
}

export default NearbtJobs