const app = require("./app");
require("dotenv").config();

const port = process.env.PORT || 9090;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
