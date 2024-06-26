import app from "./app";
import mongoose from "mongoose";
import config from "./app/config";

// Application connection maintaining function
async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      // eslint-disable-next-line no-console
      console.log(`app listening on port ${config.port}`);
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

// caling main function
main();
