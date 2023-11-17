import "./style.css"

const DivH2 = ({title}) => {
  return (
    <div>
      <div role="divH2" id="container_h2" className="bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-zinc-900">
        <h2 id="h2_events">{title}</h2>
      </div>
    </div>
  )
}

export default DivH2
