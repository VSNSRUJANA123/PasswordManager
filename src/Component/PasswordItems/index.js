import './index.css'

const PasswordItems = props => {
  const {items, checkValue, displayId} = props
  const {id, website, username, profileColor, password} = items

  const delebtn = () => {
    displayId(id)
  }
  return (
    <li className="passwordList">
      <div className={`profile ${profileColor}`}>
        <p>y</p>
      </div>
      <div>
        <p>{website}</p>
        <p>{username}</p>
        {checkValue ? (
          <p>{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
          />
        )}
      </div>
      <img
        data-testid="delete"
        className="delete"
        src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
        alt="delete"
        onClick={delebtn}
      />
    </li>
  )
}
export default PasswordItems
