import React from 'react';
import dotnetify from 'dotnetify';

export default class RenderKnockout extends React.Component {
  componentDidMount() {
    dotnetify.ko.init();
  }
  render() {
    debugger;
    return <div dangerouslySetInnerHTML={{ __html: this.props.html }} />;
  }
}
