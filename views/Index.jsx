const React = require("react");
const lazyCSS = {
  textAlign: "center",
  color: "#ffffff",
  backgroundColor: "#000000",
  padding: "2rem",
  height: "90vh",
};
const heading = { margin: "0", padding: "1rem" };
const liStyle = {
  listStyle: "none",
};
const aStyle = {
  color: "#ffffff",
  textDecoration: "none",
};
const ulStyle = {
  padding:0,
  lineHeight:1.5,
};

class Index extends React.Component {
  render() {
    const capitalize = (str) => {
      str = str.toUpperCase().slice(0, 1).concat(str.slice(1));
      return str;
    };
    return (
      <>
        <section style={lazyCSS} className="pokemonAplenty">
          <nav>
              <a style={aStyle} href="/pokemon/new">Add a Pokemon</a>
          </nav>
          <h1 style={heading}>See Some Pokemon!</h1>
          <ul style={ulStyle}>
            {this.props.pokemon.map((pokemon) => {
              return (
                <li style={liStyle} key={pokemon.id}>
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
