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
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }
  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalId} = this.state
    const capital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapitalId,
    )
    return capital.country
  }
  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry(activeCapitalId)
    return (
      <div className="container">
        <h1>Countries And Capitals</h1>
        <div className="list-container">
          <select onChange={this.onChangeCapital} value={activeCapitalId}>
            {countryAndCapitalsList.map(eachCountry => (
              <option key={eachCountry.id} value={eachCountry.id}>
                {eachCountry.capitalDisplayText}
              </option>
            ))}
          </select>
          <p>is Capital of Which Country</p>
        </div>
        <p>{country}</p>
      </div>
    )
  }
}
export default Capitals
