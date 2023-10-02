const React = require("react");
const Layout = require("./Layout.jsx");

const Show = ({ pokemon }) => {
  const capitalize = (str) => {
    str = str.toUpperCase().slice(0, 1).concat(str.slice(1));
    return str;
  };

  return (
    <Layout title={`Gotta Catch 'Em All`} page={`Show`} poke={pokemon}>
      <section>
        <h2>{capitalize(pokemon.name)}</h2>
        <img src={pokemon.img} alt={capitalize(pokemon.name)} />
      </section>
    </Layout>
  );
};

module.exports = Show;
