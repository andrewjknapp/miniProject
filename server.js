var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let tables = [
    {
        routeName: "Table1",
        NameofTable: "Table 1",
        NameofCust: "John Smith",
        NumbofChair: 4,
        custEmail: "Johnsmith@aol.com"
    },
    {
        routeName: "Table2",
        NameofTable: "Table 2",
        NameofCust: "Snow White",
        NumbofChair: 7,
        custEmail: "Snowwhite@dwarf.com"


    }

















app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
