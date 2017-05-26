// IconReferenceList.js
import React from 'react';
import Icon from './Icon';


  render() {
    let listOfIcons = [
      <Icon
        key="1"
        iconName="Article"
        fontAwesomeSymbol='fa-file-text-o'
        description="Article Description"
      />,
      <Icon
        key="2"
        iconName="Exercise"
        fontAwesomeSymbol='fa-heartbeat'
        description="Exercise Description"
      />,
      <Icon
        key="3"
        iconName="Challenge"
        fontAwesomeSymbol='fa-puzzle-piece'
        description="Challenge Description"
      />
    ]

    return(
      <div>
        <ul>
          {listOfIcons}
        </ul>
      </div>
    );
  }
