const React = require("react");

const BackgroundStars = require("./BackgroundStars");

module.exports = function Layout({ children, user }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Solo Project</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="/js/tailwind.config.js"></script>
        <link rel="stylesheet" href="/css/application.css"></link>
      </head>
      <body className="bg-night-sky h-full text-white">
        <header>
          <nav>
            <h2 className="text-3xl font-bold underline">
              <a href="/">Solo Project</a>
            </h2>
            {user ? (
              <>
                <span>{user.name}</span>
                <a href="/logout">Logout</a>
              </>
            ) : (
              <>
                <a href="/register">Register</a>
                <a href="/login">Login</a>
              </>
            )}
          </nav>
        </header>

        <BackgroundStars></BackgroundStars>
        <main>{children}</main>
        <script src="/js/application.js"></script>
      </body>
    </html>
  );
};
