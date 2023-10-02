const React = require("react");

const Layout = ({ title, page, poke, children }) => {
  const capitalize = (str) => {
    str = str.toUpperCase().slice(0, 1).concat(str.slice(1));
    return str;
  };
  return (
    <html>
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <header>
          <h1>{title}</h1>
          <nav>
            <ul>
              {page != `Index` ? (
                <li>
                  <a href={`/pokemon/`}>All Pokemon</a>
                </li>
              ) : null}
              {page == `Edit` ? (
                <li>
                  <a href={`/pokemon/${poke.id}`}>
                    Return to {capitalize(poke.name)}
                  </a>
                </li>
              ) : null}
              {page != `New` ? (
                <li>
                  <a href="/pokemon/new">Add a Pokemon</a>
                </li>
              ) : null}
              {page == `Show` ? (
                <li>
                  <a href={`/pokemon/${poke.id}/edit`}>
                    Edit {capitalize(poke.name)}
                  </a>
                </li>
              ) : null}
              {page == `Show` ? (
                <li>
                  <form
                    action={`/pokemon/${poke.id}?_method=DELETE`}
                    method="POST"
                  >
                    <input type="submit" value={`Delete ${poke.name}`} />
                  </form>
                </li>
              ) : null}
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <script src="/main.js" defer></script>
      </body>
    </html>
  );
};

module.exports = Layout;
