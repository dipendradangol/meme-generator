import React from 'react';

const Meme = ({template, onClick}) => {
    return (
           <img 
            style={{ width: 200 }} 
            src={template.url} 
            alt={template.name}
            onClick={onClick}
           />
    );
}

export default Meme;