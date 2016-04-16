/// <reference path="../typings/react/react.d.ts" />

var AuthorList = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.getJSON(this.props.url, function(data) {
        this.setState({data: data});
      }.bind(this));
  },
  render: function(){
    var authorNodes = this.state.data.map(author => (
      <Author name={author.name} id={author.id} key={author.id}></Author>)
    );
    
    return (
      <div className="commentList">
        {authorNodes}
      </div>
    );
  }
});

var Author = React.createClass({
    render: function(){
      return (
        <div className="author">
          <a href ={"author.html?id="+this.props.id}>{this.props.name}</a>
        </div>)
      }
})

ReactDOM.render(
  <AuthorList url="/api/authors" />,
  document.getElementById('content')
);
