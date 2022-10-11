const React = require("react");

const Layout = require("./Layout");

module.exports = function Register({ messages }) {
  return (
    <Layout>
      <div className="form p-5">
        <h1>Register</h1>
        {messages ? (
          <div className="alert alert-danger" role="alert">
            {messages.split(",").map((message) => (
              <span className="error-message">{message}</span>
            ))}
          </div>
        ) : null}
        <form method="POST" action="/register">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="register-name">
                Name
              </span>
            </div>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              aria-label="Name"
              aria-describedby="register-name"
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="register-email">
                Email address
              </span>
            </div>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="register-email"
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="register-password">
                Password
              </span>
            </div>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="register-password"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};
