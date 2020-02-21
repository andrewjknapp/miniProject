var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "homepage.html"));
});

app.get("/reservationForm.html", function(req, res) {
    res.sendFile(path.join(__dirname, "reservationForm.html"));
});

app.get("/reservationView.html", function(req, res) {
    res.sendFile(path.join(__dirname, "reservationView.html"));
});

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
]


app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
