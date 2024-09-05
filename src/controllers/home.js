export const getHome = (req, res) => {
  res.sendFile("index.html", { root: "./src/views/" });
};

export const getAbout = (req, res) => {
  res.sendFile("about.html", { root: "./src/views/" });
};

export const getContact = (req, res) => {
  res.sendFile("contact.html", { root: "./src/views/" });
};
