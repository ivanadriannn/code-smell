import DetailContentCard from '../components/Card/DetailContentCard'
import { data } from '../data/detail-smell'
import { useParams } from 'react-router-dom'

const DetailContentPage = () => {
  const param: string = useParams().id as string;
  const id: number = +param;
  return (
    <div>
      <DetailContentCard data={data[id-1]}/>
    </div>
  )
}

export default DetailContentPage
