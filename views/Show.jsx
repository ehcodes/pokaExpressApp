const React = require("react");

const lazyCSS = {
  textAlign: "center",
  color: "#ffffff",
  backgroundColor: "#000000",
  padding: "2rem",
  height: "90vh",
};
const heading = { margin: "0", padding: "1rem" };
const aStyle = { color: "#ffffff", textDecoration: "none", display: "block" };

class Show extends React.Component {
  render() {
    const pokemon = this.props.pokemon;
    const capitalize = (str) => {
      str = str.toUpperCase().slice(0, 1).concat(str.slice(1));
      return str;
    };
    return (
      <>
        <section style={lazyCSS} className="pokemonAplenty">
          <h1 style={heading}>Gotta Catch 'Em All</h1>
          <h2 style={heading}>{capitalize(pokemon.name)}</h2>
          <img src={correctSrc(pokemon.img)} alt={capitalize(pokemon.name)} />
          <a style={aStyle} href="/pokemon/" title="See Some Pokemon">
            Back
          </a>
        </section>
      </>
    );
  }
}

module.exports = Show;
