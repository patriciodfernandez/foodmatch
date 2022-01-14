const app = require("./app");
const db = require("./db");
const PORT = 3003;

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
});

