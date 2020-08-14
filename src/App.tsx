// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';
import logo from './logo.svg';
import Form from './forms/Form';
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
                </header>
            )}
            {step === 1 && (
                <Form />
            )}
        </div>
    );
}

export default App;
