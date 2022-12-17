import React from 'react';
import { LibraryContainer } from './LibrariesStyled';

const Libraries = ({ libraries }) => {

    return (
        <LibraryContainer>
            {libraries.map((library, index) => (
                <a href={library.link} key={index} target="_blank" rel='noreferrer'>
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
