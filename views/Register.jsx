const React = require("react");

const Layout = require("./Layout");

module.exports = function Register({ messages }) {
  return (
    <Layout>
      <h1>Register</h1>
      {messages ? (
        <div>
          {messages.split(",").map((message) => (
            <span>{message}</span>
          ))}
        </div>
      ) : null}
      <form method="POST" action="/register">
        <span id="register-name">Name</span>
        <input
          type="text"
          name="name"
          placeholder="Name"
          aria-label="Name"
          aria-describedby="register-name"
        />

        <span id="register-email">Email address</span>

        <input
          type="email"
          name="email"
          placeholder="Email"
          aria-label="Email"
          aria-describedby="register-email"
        />

        <span id="register-password">Password</span>
        <input
          type="password"
          name="password"
          placeholder="Password"
          aria-label="Password"
          aria-describedby="register-password"
        />

        <button type="submit">Register</button>
      </form>
    </Layout>
  );
};
