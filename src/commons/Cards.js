import React from 'react';

const Card = (props) => <div>{ props.children }</div>;

const ImageCard = (options) => <Card>{ options.title }</Card>; 

const CameraCard = (options) => <Card> { options.title } </Card>;

const TextCard = (options) => <Card> { options.title } </Card>; 

export { 
    Card,
    ImageCard,
    CameraCard,
    TextCard
};
