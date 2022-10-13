const React = require("react");
const { format } = require("date-fns");
const Layout = require("./Layout");

module.exports = function Register({ messages }) {
  return (
    <Layout>
      <div className="flex items-center justify-center h-full-body">
        <form
          method="POST"
          action="/register"
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
            type="text"
            name="name"
            placeholder="Name"
            aria-label="Name"
            aria-describedby="register-name"
            className="bg-transparent border border-violet-300 px-4 py-2 rounded-md"
          />

          <input
            type="text"
            name="dob"
            placeholder="Birth date: DD-MM"
            aria-label="Dob"
            aria-describedby="register-dob"
            className="bg-transparent border border-violet-300 px-4 py-2 rounded-md"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            aria-label="Email"
            aria-describedby="register-email"
            className="bg-transparent border border-violet-300 px-4 py-2 rounded-md"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="register-password"
            className="bg-transparent border border-violet-300 px-4 py-2 rounded-md"
          />

          <button
            type="submit"
            className="rounded-full bg-purple-900 rounded self-center px-4 py-2"
          >
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};
