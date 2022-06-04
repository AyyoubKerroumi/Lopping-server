module.exports = (sequelize, DataTypes) => {

    const Image = sequelize.define("image", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description:{
            type: DataTypes.STRING
        },
        file:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Image;
}