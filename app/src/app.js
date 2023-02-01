const express = require('express');
const app = express();

//inicio el servidor
const port = process.env.PORT || 8080;
app.listen(port, () => 
    console.log("Servidor en marcha")
);

app.use( express.json() );

//api routes
app.use("/reserva", require("./routes/reserva.api.routes.js"))