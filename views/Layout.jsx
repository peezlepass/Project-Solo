const React = require("react");

const BackgroundStars = require("./BackgroundStars");
const { determineSign } = require("../lib/horoscope");

module.exports = function Layout({ children, user }) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <meta charSet="UTF-8" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Project Solo</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="/project-solo/js/tailwind.config.js"></script>
        <link rel="stylesheet" href="/project-solo/css/application.css"></link>
      </head>
      <body className="bg-mauve min-h-full text-white">
        <div className="fixed inset-0 bg-night-sky z-1"></div>
        <header className="max-w-7xl mx-auto py-8 relative z-10">
          <nav className="flex justify-between items-end">
            <h2 className="text-3xl font-bold tracking-tighter">
              <a href="/project-solo">Project Solo</a>
            </h2>
            <div className="flex gap-x-4 text-xl">
              {user ? (
                <>
                  <span className="text-bold">Hi {determineSign(user)}</span>
                  <a
                    href="/project-solo/logout"
                    className="transition-color duration-300 hover:text-sky-400"
                  >
                    Logout
                  </a>
                </>
              ) : (
                <>
                  <a
                    href="/project-solo/register"
                    className="transition-color duration-300 hover:text-sky-400"
                  >
                    Register
                  </a>
                  <a
                    href="/project-solo/login"
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
        <main className="relative z-10">{children}</main>
        <script
          type="text/javascript"
          async
          src="https://platform.twitter.com/widgets.js"
        ></script>
        <script src="/project-solo/js/application.js"></script>
      </body>
    </html>
  );
};
