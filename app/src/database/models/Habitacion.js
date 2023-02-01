module.exports = Category = (sequelize, dataTypes) => {
    let alias = "Habitacion";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },

        numero: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

    };

    let config = {
        tableName: "Habitacion",
        timestamps: false
    };

    const Habitacion = sequelize.define(alias, cols, config);

    
    return Habitacion;
};