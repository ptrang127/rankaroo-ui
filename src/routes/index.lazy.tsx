import { createLazyFileRoute } from '@tanstack/react-router'
import Card from '../components/Card'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2 columns-3 flex justify-around">
      <Card text={'option1'} />
      <div className="text-6xl">
        vs
      </div>
      <Card text={'option2'} />
    </div>
  )
}