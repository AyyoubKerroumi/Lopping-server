const dbConfig = require('../config/dbConfig');

const {Sequelize, DataTypes} = require('sequelize');


const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle

        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.categories = require('./categorieModel.js')(sequelize,DataTypes); 
db.images = require('./imageModel.js')(sequelize,DataTypes) 

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})


// 1 to Many Relation

db.categories.hasMany(db.images, {
    foreignKey: { allowNull: false }, 
    onDelete: 'CASCADE' 
})

db.images.belongsTo(db.categories, {
    foreignKey: { allowNull: false }, 
    onDelete: 'CASCADE' 
})



module.exports = db;