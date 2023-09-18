const React = require("react");
const lazyCSS = {
  textAlign: "center",
  color: "#ffffff",
  backgroundColor: "#000000",
};
const ulStyle = {};
const liStyle = {
  listStyle: "none",
};
const aStyle = {
  color: "#ffffff",
  textDecoration: "none",
};

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    const capitalize = (str) => {
      str = str.toUpperCase().slice(0, 1).concat(str.slice(1));
      return str;
    };
    return (
      <>
        <section style={lazyCSS} className="pokemonAplenty">
          <h1>See Some Pokemon!</h1>
          <ul style={ulStyle}>
            {pokemon.map((pokemon, i) => {
              return (
                <li style={liStyle}>
                  <a style={aStyle} href={`/pokemon/${i}`}>
                    {capitalize(pokemon.name)}
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </>
    );
  }
}

module.exports = Index;
