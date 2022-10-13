const React = require("react");
const Layout = require("./Layout");

module.exports = function Login({ messages }) {
  return (
    <Layout>
      <div className="flex items-center justify-center h-full-body">
        <form
          method="POST"
          action="/login"
          className="flex flex-col gap-y-6 text-xl"
        >
          {messages ? (
            <div className="text-pink-400">
              {messages.split(",").map((message) => (
                <span className="block">{message}</span>
              ))}
            </div>
          ) : null}
          <input
            type="email"
            name="email"
            placeholder="Email"
            aria-label="Email"
            aria-describedby="login-email"
            className="bg-transparent border border-violet-300 px-4 py-2 rounded-md"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="login-password"
            className="bg-transparent border border-violet-300 px-4 py-2 rounded-md"
          />
          <button
            type="submit"
            className="rounded-full bg-purple-900 rounded self-center px-4 py-2"
          >
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
};
