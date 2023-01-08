import { useQuery, UseQueryResult } from 'react-query'

type UseProfileReturnType = Pick<UseQueryResult, 'data' | 'error' | 'isLoading'>

const fetchProfile = async (profileId: string) => {
  if (!profileId || !process.env.NEXT_PUBLIC_RAPID_API_KEY) return Promise.reject(new Error('No profile id provided'))

  const res = await fetch(
    `https://linkedin-profile-data.p.rapidapi.com/linkedin-data?url=https%3A%2F%2Fwww.linkedin.com%2Fin%2F${profileId}`,
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
        'X-RapidAPI-Host': 'linkedin-profile-data.p.rapidapi.com',
      },
    }
  )

  return res.json()
}

export const useProfile = (profileId: string): UseProfileReturnType => {
  const { data, error, isLoading } = useQuery<unknown>(['profile', profileId], () => fetchProfile(profileId), {
    enabled: !!profileId,
  })

  return { data, error, isLoading }
}
