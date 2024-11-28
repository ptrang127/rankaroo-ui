import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="px-8 flex flex-col my-10 gap-6">
      <div className="text-left">
        <h1 className="text-5xl">ponyboy</h1>
        <p className="font-mono">Product Manager, Lead Engineer</p>
      </div>
      <div className="text-left">
        <h1 className="text-5xl">bk philip</h1>
        <p className="font-mono">Staff Engineer</p>
      </div>
      <div className="text-left">
        <h1 className="text-5xl">sabbages</h1>
        <p className="font-mono">Front-End Engineer</p>
      </div>
      <div className="text-left">
        <h1 className="text-5xl">genghsta</h1>
        <p className="font-mono">Intern</p> 
      </div>       
    </div>
  )
}
