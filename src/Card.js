import React from 'react'
import PropTypes from 'prop-types'
import Icon from './icon'

const Card = ({ borderTop, title, description, iconName }) => {
  return (
    <article className='max-w-sm bg-white mb-6 shadow-card rounded-lg p-6 text-left relative xl:mb-0'>
      <div
        className='absolute top-0 left-0 rounded-tl-lg rounded-tr-lg w-full h-2'
        style={{ background: borderTop }}
      />
      <h2 className='text-xl text-neutral-veryDarkBlue font-semibold mb-2'>
        {title}
      </h2>
      <p className='text-body text-neutral-grayishBlue font-normal mb-4'>
        {description}
      </p>
      <div className='w-full flex justify-end'>
        <Icon name={iconName} />
      </div>
    </article>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  iconName: PropTypes.string,
  borderTop: PropTypes.string,
}

export default Card
