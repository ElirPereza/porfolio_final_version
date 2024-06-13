import { CircularProgress } from "@nextui-org/react"

const Loading = () => {
    return (
      <div className='flex h-full w-full justify-center items-center'>
          <CircularProgress size="lg" aria-label="Loading..."/>
      </div>
    )
  }
  
  export default Loading