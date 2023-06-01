import app from "./app";
import "dotenv/config";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("database is connected");
    const Port = process.env.PORT || 3000;
    app.listen(Port, () => {
      console.log(`Server is running: ${Port}`);
    });
  })
  .catch((err) => console.log(err));
