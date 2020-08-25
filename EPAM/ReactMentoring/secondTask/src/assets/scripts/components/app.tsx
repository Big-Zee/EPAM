import * as React from 'react';

import MovieList from './MovieList/MovieList'

import Header from './Header/Header'

import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

import GenerateResultsContainer from './MoviesListContainer/ResultsContainer'
//I was playing with different styles approach
import '../../../assets/styles/Styles.scss';
import '../../../assets/styles/App.css';

import WithLoading from '../components/WithLoading/WithLoading'

const MoviesWithLoading = WithLoading(MovieList);

export default function App() {
  return (
    <>
    <Header />
    <GenerateResultsContainer>
    <ErrorBoundary>
    <MoviesWithLoading isLoading={false}/>    
    </ErrorBoundary>
    </GenerateResultsContainer>
  </>
  )
}