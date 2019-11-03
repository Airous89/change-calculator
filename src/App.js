import React from 'react';
import './styles/styles.css';
import Calculator from './layout/Calculator/Calculator';
import Home from './layout/Home/Home';

const app = () => <div className="app">
    <Home/>
    <Calculator/>
</div>;

export default app;
