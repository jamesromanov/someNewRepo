const { connectDb } = require("./config/db");
const app = require("./middleware/app");
connectDb();
app.listen(process.env.PORT, () => {
  console.log("Server running on:", process.env.PORT);
});
