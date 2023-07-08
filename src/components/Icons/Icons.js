import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icons = ({ name, color = '#000000', style, ...rest }) => {
  return (
    <FontAwesomeIcon
      icon={name}
      style={{ color, ...style }}
      {...rest}
    />
  )
}
export default Icons
