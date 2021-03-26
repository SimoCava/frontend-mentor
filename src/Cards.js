import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='w-full grid'>
      <div className='justify-self-center xl:flex gap-7 items-center'>
        <div>
          <Card
            title='Supervisor'
            description='Monitors activity to identify project roadblocks'
            borderTop='hsl(180, 62%, 55%)'
            iconName='supervisor'
          />
        </div>
        <div className='xl:grid gap-y-7'>
          <Card
            title='Team Builder'
            description='Scans our talent network to create the optimal team for your project'
            borderTop='hsl(0, 78%, 62%)'
            iconName='teamBuilder'
          />
          <Card
            title='Karma'
            description='Regularly evaluates our talent to ensure quality'
            borderTop='hsl(34, 97%, 64%)'
            iconName='karma'
          />
        </div>
        <div>
          <Card
            title='Calculator'
            description='Uses data from past projects to provide better delivery estimates'
            borderTop='hsl(212, 86%, 64%)'
            iconName='calculator'
          />
        </div>
      </div>
    </div>
  )
}

export default Cards
