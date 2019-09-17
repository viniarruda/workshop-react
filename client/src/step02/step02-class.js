import React from "react";

class Step02 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "React"
    };
  }

  componentDidMount() {
    this.setState({
      name: "React JS"
    });
  }

  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default Step02;
