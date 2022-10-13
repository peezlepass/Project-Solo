const React = require("react");

const BackgroundStars = require("./BackgroundStars");
const { determineSign } = require("../lib/horoscope");

module.exports = function Layout({ children, user }) {
  return (
    <html lang="en" className="h-full antialiased">
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
        <header className="max-w-7xl mx-auto py-8">
          <nav className="flex justify-between items-end">
            <h2 className="text-3xl font-bold tracking-tighter">
              <a href="/">Project Solo</a>
            </h2>
            <div className="flex gap-x-4 text-xl">
              {user ? (
                <>
                  <span className="text-bold">Hi {determineSign(user)}</span>
                  <a
                    href="/logout"
                    className="transition-color duration-300 hover:text-sky-400"
                  >
                    Logout
                  </a>
                </>
              ) : (
                <>
                  <a
                    href="/register"
                    className="transition-color duration-300 hover:text-sky-400"
                  >
                    Register
                  </a>
                  <a
                    href="/login"
                    className="transition-color duration-300 hover:text-sky-400"
                  >
                    Login
                  </a>
                </>
              )}
            </div>
          </nav>
        </header>

        <BackgroundStars></BackgroundStars>
        <main className="min-h-full-body relative z-10">{children}</main>
        <script src="/js/application.js"></script>
      </body>
    </html>
  );
};
