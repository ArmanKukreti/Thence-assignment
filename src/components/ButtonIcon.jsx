import React from 'react'
import PropTypes from 'prop-types';
import Icon from '@mdi/react'

const ButtonIcon = ({children, path, size=1, color='gray', ...props}) => {
  return (
    <div className='iconDiv' {...props}>
      <Icon path={path} size={size} color={color}/>
    </div>
  )
}

ButtonIcon.propTypes = {
    path: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string
}

export default ButtonIcon
