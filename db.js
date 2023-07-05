/** Database for lunchly */

const pg = require("pg");

// const db = new pg.Client("postgresql:///lunchly");

const db = new pg.Client({
    host: "localhost",
    user: "testing1",
    port: 5432,
    password: "testingpassword1",
    database: "lunchly"
})

db.connect();

module.exports = db;
