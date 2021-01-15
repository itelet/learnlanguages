import React, { Component } from "react";
import './index.css'
import WordList from "./wordList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Words extends Component {
  render() {
    const question = [];
    const answer = [];
    const { words, auth } = this.props;
    if(words){
      Object.entries(words.First.wordsdata).map(([key, value]) => {
        question.push(key);
        answer.push(value);
      })
    }
    console.log(question)
    console.log(answer)
    if (!auth.uid && !words) return <Redirect to="/" />;
    return (
      <div className="mainWrap">
        <h2 className="mainText">
          You have to write the correct answer to the input field!
        </h2>
        <div className="mainFlex">
          <div className="question">
            {question[0]}
          </div>
          <div className="answer">
            <input type="text" placeholder="Answer here!"></input>
            {/*answer[0]*/}
          </div>
        </div>
        <div className="submitWrapper">
            <button className="submitButton">Next</button>
        </div>
        {/*<WordList words={words} />*/}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    const words = state.firestore.data.words
    return {
    words: words,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "words" }])
)(Words);
