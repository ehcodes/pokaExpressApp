const React = require("react");
const Layout = require("./Layout.jsx");

const Edit = ({ pokemon }) => {
  return (
    <Layout title={`Edit ${pokemon.name}`} page={`Edit`} poke={pokemon}>
      <form action={`/pokemon/${pokemon.id}?_method=PUT`} method="POST">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" defaultValue={pokemon.name} />
        <label htmlFor="img">Image URL</label>
        <input type="text" name="color" defaultValue={pokemon.img} />
        <input type="submit" value="Submit Changes" />
      </form>
    </Layout>
  );
};

module.exports = Edit;
