import React from 'react';

import './Cubes.css';

type Cube = {
    size: string;
    key: string;
}

export default function Cubes(): JSX.Element {
    return (
        <div className="cubes">
            {[0, 1, 2].map((cube: number) => (
                <Cube size={`${cube}`} key={`cube-${cube}`}/>
            ))}
        </div>
    );
}

function Cube(props: Cube) {
    const style = { "--i": props.size } as React.CSSProperties;
    return <div className="cube" style={style} />
}
