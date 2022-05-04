module.exports = (sequelize, DataTypes) => {

    const Categorie = sequelize.define("categorie", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description:{
            type: DataTypes.STRING
        }
    })
    return Categorie;
}