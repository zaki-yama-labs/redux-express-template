import React, { Component } from 'react';
import Button from '@salesforce/design-system-react/components/button';

export default class App extends Component {
  render() {
    return (
      <Button
        iconName="download"
        iconPosition="left"
        label="Neutral Icon"
      />
    );
  }
}
