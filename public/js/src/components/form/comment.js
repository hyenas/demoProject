import './comment.less';
import React from 'react';

var Comment = React.createClass({

  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span>{this.props.children.toString()}</span>
      </div>
    );
  }
});

export default Comment;