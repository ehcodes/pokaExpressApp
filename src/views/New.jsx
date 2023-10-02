const React = require("react");
const Layout = require("./Layout.jsx");

const New = () => {
  return (
    <Layout title={`Add New Pokemon`} page={`New`}>
      <form action="/pokemon" method="POST">
        <label htmlFor="name">Pokemon's Name</label>
        <input type="text" name="name" />
        <label htmlFor="img">Image URL for Pokemon</label>
        <input type="text" name="img" />
        <input type="submit" name="" value="Add Pokemon" />
      </form>
    </Layout>
  );
};

module.exports = New;
