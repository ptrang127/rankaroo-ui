import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/insights')({
  component: Insights,
})

function Insights() {
  return <div className="p-2">INSIGHTS INSIGHTS</div>
}