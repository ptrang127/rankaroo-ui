import { createLazyFileRoute } from '@tanstack/react-router'
import Card from '../components/Card'
import Category from '../components/Category'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="">
      <Category text={'actors'} />
      <div className="flex justify-evenly items-center flex-col md:flex-row my-6 md:my-24 gap-4 md:gap-0">
        <div className="w-4/5 md:w-1/3">
          <Card text={'This is an option with a lot of text. This is an option with a lot of text. This is an option with a lot of text. This is an option with a lot of text. This is an option with a lot of text.'} />
        </div>
        <div className="w-4/5 md:w-1/3 text-center">
          <span className="text-6xl">
            vs
          </span>
        </div>
        <div className="w-4/5 md:w-1/3">
          <Card text={'option2'} />
        </div>
      </div>
    </div>
  )
}