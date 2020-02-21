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

app.get("/api/getTable", function(req,res) {
    console.log("Returned tables");
    res.json(tables);
})

app.post("/api/addTable", function(req, res) {
    let newRes = req.body;
    tables.push(newRes);
    console.log(newRes);
  });

app.post("/api/remove", function(req, res) {
    let index = Number(req.body);
    tables.splice(index,1);
})

let tables = [
    {
        id: 5432,
        name: "John Smith",
        email: "Johnsmith@aol.com",
        phone: "234-5123"
    },
    {
        id: 5435,
        name: "Snow White",
        email: "Snowwhite@dwarf.com",
        phone: "456-1029"


    }
]


app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
