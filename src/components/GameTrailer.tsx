import useTrailers from '../hooks/useTrailers'
import { Spinner } from '@chakra-ui/react'
interface Props {
  gameId: number
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId)
  const first = data?.results[0]
  if (isLoading) return <Spinner />
  if (error) throw error

  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null
}

export default GameTrailer
