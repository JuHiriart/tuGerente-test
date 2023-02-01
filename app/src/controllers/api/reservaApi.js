const {Reserva} = require('../../database/models');
//const {Op} = require('sequelize');


const reservaApi = {

    all: (req,res) => {

      Reserva.findAll({
        attributes: ["id", "estado", "estadia_inicio", "estadia_final"]
      })
      .then( reservas => {
        return res.status(200).json({
          total: reservas.length,
          data: reservas
        })
      })

    },

    reservaId: (req, res) => {

      Reserva.findByPk(req.params.id, {

        include: [{association: "cliente"}, {association: "habitacion"}],

      })
      .then( reserva => {
        return res.status(200).json({
          data: reserva
        })
      })

    },
      
    nuevaReserva: (req, res) => { 

      if(req.body.estadia_inicio > req.body.estadia_final){
        return res.status(500).json({
          error: "fechas invalidas",
          fecha_inicio: req.body.estadia_inicio,
          fecha_final: req.body.estadia_final
        })
      }

        Reserva.create(req.body)
        .then( reserva => {
          return res.status(200).json({
            data: reserva,
            status: "creada"
          })
        })
        .catch( error => {
          return res.status(500).json({
            error: error,
            expected: {
              estado: "Pendiente, Pagado, Eliminado",
              detalle: "texto",
              estadia_inicio: "AAAA-MM-DD",
              estadia_final: "AAAA-MM-DD",
              monto: "monto hasta 2 decimales",
              metodo: "efectivo, crédito...",
              id_cliente: "id del cliente",
              id_habitacion: "id de la habitacion"
            }
          })
        })
    },

    reservaBorrar: (req, res) => {
      Reserva.destroy({
        where: {
          id: req.params.id
        }
      })
      .then( respuesta => {
        return res.status(200).json(respuesta);
      })
      .catch( error => {
        return res.status(500).json(error);
      })
    }
      
}
    module.exports = reservaApi;