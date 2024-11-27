import { createLazyFileRoute } from '@tanstack/react-router'
import Card from '../components/Card'
import Category from '../components/Category'
import data from '../../public/data.json'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="">
      <Category text={data.data[0].category} />
      <div className="flex justify-evenly items-center flex-col md:flex-row my-10 md:my-28 gap-4 md:gap-0">
        <div className="w-4/5 md:w-1/3">
          <Card text={data.data[0].options[0]} />
        </div>
        <div className="w-4/5 md:w-1/3 text-center">
          <span className="text-6xl">
            vs
          </span>
        </div>
        <div className="w-4/5 md:w-1/3">
          <Card text={data.data[0].options[1]} />
        </div>
      </div>
    </div>
  )
}