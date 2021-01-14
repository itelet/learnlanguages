import React, { Component } from "react";
import WordList from "./wordList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Words extends Component {
  render() {
    const { words, auth } = this.props;
    if (!auth.uid) return <Redirect to="/" />;
    return (
      <div>
        <WordList words={words} />
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
