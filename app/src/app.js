const express = require('express');
const app = express();

//inicio el servidor
app.listen(3000, () => 
    console.log("Servidor en marcha")
);

app.use( express.json() );

//api routes
app.use("/reserva", require("./routes/reserva.api.routes.js"))