import React from 'react'
import { ReactComponent as Supervisor } from './images/icon-supervisor.svg'
import { ReactComponent as TeamBuilder } from './images/icon-team-builder.svg'
import { ReactComponent as Karma } from './images/icon-karma.svg'
import { ReactComponent as Calculator } from './images/icon-calculator.svg'

const icons = {
  supervisor: Supervisor,
  teamBuilder: TeamBuilder,
  karma: Karma,
  calculator: Calculator,
}

const IconComponent = ({ name, ...props }) => {
  let Icon = icons[name]
  return <Icon {...props} />
}

export default IconComponent
