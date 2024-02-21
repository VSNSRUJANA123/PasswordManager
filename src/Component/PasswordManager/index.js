import {Component} from 'react'

import {v4 as uuid} from 'uuid'

import './index.css'

import PasswordItems from '../PasswordItems'

const backgroundProfileColors = [
  'color1',
  'color2',
  'color3',
  'color4',
  'color5',
  'color6',
  'color7',
  'color8',
]

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    search: '',
    checkValue: false,
    passwordLists: [],
  }

  addPassword = e => {
    const {website, username, password, passwordLists} = this.state
    e.preventDefault()
    const profileColorIndex = Math.floor(
      Math.random() * backgroundProfileColors.length,
    )
    const profileColor = backgroundProfileColors[profileColorIndex]

    const newData = {
      id: uuid(),
      website,
      username,
      profileColor,
      password,
    }
    if (website !== '' && username !== '' && password !== '') {
      this.setState({passwordLists: [...passwordLists, newData]})
    }
    this.setState({website: '', username: '', password: ''})
  }

  websiteInput = e => {
    this.setState({website: e.target.value})
  }

  userInput = e => {
    this.setState({username: e.target.value})
  }

  passwordInput = e => {
    this.setState({password: e.target.value})
  }

  checkPassword = e => {
    this.setState(prev => ({checkValue: !prev.checkValue}))
  }

  displayId = id => {
    const {passwordLists} = this.state
    const filterList = passwordLists.filter(items => items.id !== id)
    this.setState({passwordLists: filterList})
  }

  searchBar = e => {
    const {search} = this.state

    this.setState({search: e.target.value})
  }

  render() {
    const {
      website,
      username,
      password,
      checkValue,
      search,
      passwordLists,
    } = this.state

    const filterSearch = passwordLists.filter(items =>
      items.website.toLowerCase().includes(search),
    )

    return (
      <div className="BgContainer">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="passwordContainer">
          <form className="passwordFieldContainer" onSubmit={this.addPassword}>
            <h1>Add New Password</h1>
            <div className="inputs">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
              <input
                placeholder="Enter Website"
                onChange={this.websiteInput}
                value={website}
              />
            </div>
            <div className="inputs">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
              <input
                placeholder="Enter Username"
                onChange={this.userInput}
                value={username}
              />
            </div>
            <div className="inputs">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
              />
              <input
                placeholder="Enter Password"
                name="password"
                type="password"
                onChange={this.passwordInput}
                value={password}
              />
            </div>
            <div className="addBtn">
              <button>Add</button>
            </div>
          </form>
          <div className="pMImage">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
            />
          </div>
        </div>
        <div className="passwordListContainer">
          <div className="passwordSearchContainer">
            <div>
              <h1>Your Passwords</h1>
              <p>{passwordLists.length}</p>
            </div>
            <div className="inputs">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input
                placeholder="Search"
                onChange={this.searchBar}
                value={search}
                type="search"
              />
            </div>
          </div>
          <hr />
          <div className="checkboxContainer">
            <input
              id="password"
              type="checkbox"
              onChange={this.checkPassword}
              value={checkValue}
            />
            <label htmlFor="password">Show passwords</label>
          </div>
          {filterSearch.length === 0 ? (
            <div className="noPasswordsContainer">
              <img
                className="noPasswords"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt=" no passwords"
              />
              <p>No Passwords</p>
            </div>
          ) : (
            <ul>
              {filterSearch.map(items => (
                <PasswordItems
                  key={items.id}
                  items={items}
                  checkValue={checkValue}
                  displayId={this.displayId}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
