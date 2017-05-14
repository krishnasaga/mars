import React from 'react';

const Card = (props) => <div>{ props.children }</div>;

const ImageCard = (options) => <Card>{ options.title }</Card>; 


export { 
    Card,
    ImageCard
};
