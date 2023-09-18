const React = require("react");
const lazyCSS =
{
  textAlign:'center',
  color: '#ffffff',
  backgroundColor: '#000000'
};

class Index extends React.Component {
  render() {
    return (
        <>
          <section style={lazyCSS}>
            <h1>See some of the pokemon!</h1>
          </section>
        </>
      );
  }
}

module.exports = Index;