import React from 'react';
import Card from './card';

export const AppContainer = () => {
  return (
    <div>
      <Card>
        <Card.Header>Card Header</Card.Header>
        <Card.Body>Card Body</Card.Body>
        <Card.Footer>Card Footer</Card.Footer>
      </Card>
    </div>
  );
};
