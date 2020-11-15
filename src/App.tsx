// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';
import logo from './logo.svg';
import Form from './FormApp/Form';
import Cubes from './AnimateApp/Cubes';
import Loader from './AnimateApp/Loader';
import './App.css';

/**
 *
 * @constructor
 */
function App(): JSX.Element {
    const [step, setStep] = useState<number>(0);
    return (
        <div className="App">
            {step === 0 && (
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
            Sample Typescript things
                    </p>
                    <div
                        className="App-link"
                        onClick={(): void => setStep(1)}
                    >
            To Form
                    </div>
                    <div
                        className="App-link"
                        onClick={(): void => setStep(2)}
                    >
                        Animations
                    </div>
                    <div
                        className="App-link"
                        onClick={(): void => setStep(3)}
                    >
                        Loader
                    </div>
                </header>
            )}
            {step === 1 && (
                <Form />
            )}
            {step === 2 && (
                <Cubes />
            )}
            {step === 3 && (
                <Loader />
            )}
        </div>
    );
}

export default App;
