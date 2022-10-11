const React = require("react");
const Layout = require("./Layout");

module.exports = function Login({ messages }) {
  return (
    <Layout>
      <h1>Login</h1>
      {messages ? (
        <div>
          {messages.split(",").map((message) => (
            <span>{message}</span>
          ))}
        </div>
      ) : null}
      <form method="POST" action="/login">
        <span id="login-email">Email address</span>
        <input
          type="email"
          name="email"
          placeholder="Email"
          aria-label="Email"
          aria-describedby="login-email"
        />

        <span id="login-password">Password</span>
        <input
          type="password"
          name="password"
          placeholder="Password"
          aria-label="Password"
          aria-describedby="login-password"
        />
        <button type="submit">Login</button>
      </form>
    </Layout>
  );
};
