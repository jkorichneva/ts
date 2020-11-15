import React from 'react';

import './Loader.css';

function getRingClassName(num: number, animation: string): string {
    return `ring ring${num} mode-${animation}`;
}

export default function Loader(): JSX.Element {
    const classAnimation = 'one';
    return (
        <div className="loader">
            <div className="rings">
                <div className={getRingClassName(1, classAnimation)}>
                    <div className={getRingClassName(2, classAnimation)}>
                        <div className={getRingClassName(3, classAnimation)}>
                            <div className={getRingClassName(4, classAnimation)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
