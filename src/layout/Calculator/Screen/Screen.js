import React from 'react';
import ResultScreen from './ResultsScreen/ResultScreen';
import ComputationScreen from './ComputationScreen/ComputationScreen';
const screen = (props) => (
  <section className="screen">
    <ResultScreen>{props.result}</ResultScreen>
    <ComputationScreen>{props.equation}</ComputationScreen>
  </section>
);
export default screen;