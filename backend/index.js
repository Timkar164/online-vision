import app from "./shared/app.js";
import "colors"

console.log("Starting API...");

const port = process.env.PORT || 5000;

console.log("Port: " + port);

app.listen(port, () =>
    console.log("Express API has started.")
);