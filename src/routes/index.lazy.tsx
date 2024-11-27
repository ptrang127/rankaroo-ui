import { createLazyFileRoute } from '@tanstack/react-router'
import Card from '../components/Card'
import Category from '../components/Category'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div>
      <Category text={'actors'} />
      <div className="p-2 columns-3 flex justify-around items-center">
        <Card text={'option1'} />
        <span className="text-6xl">
          vs
        </span>
        <Card text={'option2'} />
      </div>
    </div>
  )
}