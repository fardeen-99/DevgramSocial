const app = require("./src/app")
const database = require("./src/config/database")
const redis = require("./src/config/Cache")
database()
// redis()



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})