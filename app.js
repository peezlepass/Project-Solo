require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const renderTemplate = require("./lib/renderTemplate");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const Home = require("./views/Home");
const path = require("path");
const authentication = require("./routes/authentication");
const { User } = require("./db/models");

const app = express();

const PORT = process.env.PORT ?? 7777;
const { SESSION_SECRET } = process.env;

const sessionConfig = {
  name: "potluck",
  store: new FileStore(),
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10,
    httpOnly: true,
  },
};

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve("public")));
app.use(session(sessionConfig));

app.use("/", authentication);

app.get("/", async (req, res) => {
  const user = req.session?.userId
    ? await User.findOne({ where: { id: req.session?.userId } })
    : null;
  renderTemplate(Home, { user }, res);
});

app.listen(PORT, () => console.log(`Сервер поднят на ${PORT} порту!`));
