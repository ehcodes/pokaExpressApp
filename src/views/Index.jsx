const React = require("react");
const Layout = require("./Layout.jsx");

const Index = ({ pluralPokemon }) => {
  const capitalize = (str) => {
    str = str.toUpperCase().slice(0, 1).concat(str.slice(1));
    return str;
  };
  return (
    <Layout title={`Pokemon Index`} page={`Index`}>
      <ul>
        {pluralPokemon.map((pokemon) => {
          return (
            <li key={pokemon.id}>
              <a href={`/pokemon/${pokemon.id}`}>{capitalize(pokemon.name)}</a>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

module.exports = Index;
