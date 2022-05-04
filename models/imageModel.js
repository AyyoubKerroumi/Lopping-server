module.exports = (sequelize, DataTypes) => {

    const Image = sequelize.define("image", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description:{
            type: DataTypes.STRING
        },
        CategorieId: {
            type: DataTypes.INTEGER,
        },
        file:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Image;
}