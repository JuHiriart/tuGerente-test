module.exports = Reserva = (sequelize, dataTypes) => {
    let alias = "Reserva";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },

        estado: {
            type: dataTypes.STRING,
            allowNull: true
        },

        detalle: {
            type: dataTypes.STRING,
            allowNull: true
        },

        estadia_inicio: {
            type: dataTypes.DATE,
            allowNull: false
        },

        estadia_final: {
            type: dataTypes.DATE,
            allowNull: false
        },

        monto: {
            type: dataTypes.DECIMAL(20,2),
            allowNull: false
        },

        metodo: {
            type: dataTypes.STRING,
            allowNull: false
        },

        id_cliente: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        id_habitacion: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
        
    };

    let config = {
        tableName: "Reserva",
        timestamps: false
    };

    const Reserva = sequelize.define(alias, cols, config);


    Reserva.associate = function (models) {

        Reserva.belongsTo(models.Cliente, {
            as: "cliente",
            foreignKey: "id_cliente"
        });

        Reserva.belongsTo(models.Habitacion, {
            as: "habitacion",
            foreignKey: "id_habitacion"
        });
        
    }

    return Reserva;
};
