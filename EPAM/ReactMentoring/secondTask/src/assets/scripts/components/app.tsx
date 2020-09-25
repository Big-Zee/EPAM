import * as React from 'react';

import MovieList from './MovieList/MovieList'

import Header from './Header/Header'

import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

import GenerateResultsContainer from './MoviesListContainer/ResultsContainer'
//I was playing with different styles approach
import '../../../assets/styles/Styles.scss';
import '../../../assets/styles/App.css';

import WithLoading from '../components/WithLoading/WithLoading'

import { Provider } from "react-redux";
import configureStore from '../store/configureStore';


//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const MoviesWithLoading = WithLoading(MovieList);

const store = configureStore();


export default function App() {
  return (
    <>
    <Provider store={store}>
    <Header />
    <GenerateResultsContainer>
    <ErrorBoundary>
    <MoviesWithLoading isLoading={false}/>    
    </ErrorBoundary>
    </GenerateResultsContainer>
    </Provider>
  </>
  )
}