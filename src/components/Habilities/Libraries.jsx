import React from 'react';
import { LibraryContainer } from './LibrariesStyled';

const Libraries = ({ libraries }) => {

    return (
        <LibraryContainer>
            {libraries.map((library) => (
                <a href={library.link} target="_blank" rel='noreferrer'>
                    <svg width={library.width} height={library.height}>
                        {library.icon.map((path, j) => (
                            <path d={path} fill={library.color[j]} key={j}></path>
                        ))}
                    </svg>
                </a>
            ))}
        </LibraryContainer>
    );
}

export default Libraries;
