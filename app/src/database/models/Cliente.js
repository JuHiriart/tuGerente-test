module.exports = Category = (sequelize, dataTypes) => {
    let alias = "Cliente";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },

        nombre: {
            type: dataTypes.STRING,
            allowNull: false
        },

        datos: {
            type: dataTypes.STRING,
        }

    };

    let config = {
        tableName: "Cliente",
        timestamps: false
    };

    const Cliente = sequelize.define(alias, cols, config);

    Cliente.associate = function (models) {

        Cliente.hasMany(models.Reserva, {
            as: "cliente",
            foreignKey: "id_cliente"
        })
        
    }
    
    return Cliente;
};