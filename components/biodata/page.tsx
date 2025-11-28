import React from 'react'
import Hero from './hero/page'
import Step from './step/page'

const Biodata = () => {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section className="mt-10">
        <Step />
      </section>
    </div>
  )
}

export default Biodata
