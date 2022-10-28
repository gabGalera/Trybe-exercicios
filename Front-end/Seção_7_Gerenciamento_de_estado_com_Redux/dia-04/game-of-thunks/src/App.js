import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fecthAPI } from './redux/actions/actions';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      input: '',
    }
  }

  inputChange = (event) => {
    this.setState({
      input: event.target.value,
    })
  }

  render() {
    const { isLoading, infosChars, fetch } = this.props;
    return (
      <>
        <input 
          type='text'
          onChange={ (event) => this.inputChange(event) } 
          value={ this.props.value }
        />
        <button 
          type="button"
          onClick={ () => {
            this.setState({
              fetch: true,
            })
            this.props.dispatch(fecthAPI(this.state.input))
          } }
        >
          Submeter
        </button>
        { isLoading ? <h1>Loading...</h1> : (
        <>
          <h1>Name: {fetch && infosChars[0].name}</h1>
          <h2>Born in: {fetch && infosChars[0].born}</h2>
        </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  infosChars: state.infosChars,
  isLoading: state.isLoading,
  fetch: state.fetch,
})

export default connect(mapStateToProps)(App);
