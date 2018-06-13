import React, { Component } from "react";

class Galery extends Component {
  render() {
    const { title, children, author } = this.props;
    return (
      <div className="galery">
        <header>{title} by {author} - {React.Children.count(children)} images</header>
        <div className="content">{children}</div>
      </div>
    );
  }
}

Galery.defaultProps = {
  author: 'Anonymous'
}

export default Galery;
