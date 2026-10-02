
const express = require("express")
const cors = require("cors")
const mysql = require("mysql2")
const app = express()
app.use(express.json())
app.use(cors())

// =======database connection================
const connectObj = {
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'mydb',
    port: 3306
}
const connection = mysql.createConnection(connectObj);
connection.connect((err) => {
    if (err) {
        console.log(err);

    } else {
        console.log("db connect successfully !");

    }
})

// ==================API========================
app.get("/", (req, res) => {

    connection.query(`select * from productapp`, (err, result) => {
        res.setHeader("content-type", "application/json");

        if (err == null) {
            res.send(result);

        }
        else {
            res.status(500).send("err");

        }

        connection.end();

    })

})

app.post("/products", (request, response) => {
    console.log("data received in request packet body is: ")
    console.log(request.body)

    
    var queryText = `INSERT INTO productapp
                    (id, title, price, description)
                    VALUES (
                        '${request.body.id}',
                        '${request.body.title}',
                        '${request.body.price}',
                        '${request.body.description}'
                    )`; 
    console.log(queryText);

    connection.query(queryText, (err, result) => {

        response.setHeader("content-type", "application/json");

        if (err == null) {
            response.send(result);
        }
        else {
            response.send(err);
        }

        connection.end();
    });


});

app.put("/products/:no", (request, response) => {

    console.log("data received in request packet body is:");
    console.log(request.body);

    console.log("Product id:", request.params.no);

    var queryText = `
        UPDATE productapp
        SET title = ?,
            price = ?,
            description = ?,
            images = ?
        WHERE id = ?
    `;

    connection.query(
        queryText,
        [
            request.body.title,
            request.body.price,
            request.body.description,
            JSON.stringify(request.body.images),
            request.params.no
        ],
        (err, result) => {

            response.setHeader("content-type", "application/json");

            if (err == null) {
                response.send(result);
            } else {
                response.status(500).send(err);
            }

            connection.end();
        }
    );
    
});

app.delete("/products/:no", (request, response) => {

    console.log("Product id:", request.params.no);

    var queryText = `
        DELETE FROM productapp
        WHERE id = ?
    `;

    connection.query(
        queryText,
        [request.params.no],
        (err, result) => {

            response.setHeader("content-type", "application/json");

            if (err == null) {
                response.send(result);
            } else {
                response.status(500).send(err);
            }

            connection.end();
        }
    );
});
app.listen(9999, () => {
    console.log("server is running on ....9999");
})