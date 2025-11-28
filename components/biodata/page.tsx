import React from 'react'
import Hero from './hero/page'
import StepRow from './step/page'

const Biodata = () => {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section className="mt-10">
        <StepRow />
      </section>
    </div>
  )
}

export default Biodata
