import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeCapitalID: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeCapitalID: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalID} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapitalID,
    )

    return activeCountryAndCapital.country
  }

  render() {
    const {activeCapitalID} = this.state
    const country = this.getCountry(activeCapitalID)

    return (
      <div className="app-container">
        <div className="capitals-app">
          <h1 className="heading">Countries and capitals</h1>
          <div className="select-container">
            <select
              className="capital-select"
              onChange={this.onChangeCapital}
              value={activeCapitalID}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  key={eachCapital.id}
                  value={eachCapital.id}
                  className="options"
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
