import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function CSkeleton({ height, width }: any) {
  return (
    <SkeletonTheme highlightColor='#f5f5f5'>
      {[1, 2, 3, 4, 5].map(item => (
        <div className='my-2' key={item}>
          <Skeleton duration={1.4} height={50} width={'100%'} count={1} />
        </div>
      ))}
    </SkeletonTheme>
  )
}
