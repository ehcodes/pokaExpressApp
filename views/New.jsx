const React = require("react");

const New = () => {
  return (
    <div>
      <h1>Add New Pokemon</h1>
      <form action="/pokemon" method="POST">
        Name: <input type="text" name="name" />
        <br />
        Img: <input type="text" name="img" />
        <br />
        <input type="submit" name="" value="Create Pokemon" />
      </form>
    </div>
  );
};

module.exports = New;