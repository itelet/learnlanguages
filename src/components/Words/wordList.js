import React from "react";

const WordList = ({ words }) => {
    return (
    <React.Fragment>
        { words && 
            Object.entries(words.First.wordsdata).map(([key, value]) => {
              return(<div>{key} - {value}</div>);
            })
        }
    </React.Fragment>
  );
};

export default WordList;