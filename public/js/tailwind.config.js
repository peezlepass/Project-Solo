tailwind.config = {
  theme: {
    extend: {
      backgroundImage: {
        // https://codepen.io/billyysea/pen/nLroLY
        "night-sky":
          "linear-gradient(to bottom, rgb(11, 16, 22) 0%, rgb(63, 70, 94) 70%,rgb(104, 86, 102) 100%);",
      },
      minHeight: {
        "full-body": "calc(100vh - 100px)",
      },
      height: {
        "full-body": "calc(100vh - 100px)",
      },
      blur: {
        xs: "2px",
      },
    },
  },
};
