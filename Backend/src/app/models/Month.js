const {Model, DataTypes} = require('sequelize');

class Month extends Model{
    static init(connection){
        super.init({
            title:{
                type: DataTypes.STRING,
                allowNull: false, 
                validate:{
                    notEmpty: {
                        msg: 'Month needs a title'
                    }
                } 
            },
            income: {
                type: DataTypes.DECIMAL,
                allowNull: false, 
                validate:{
                    notEmpty: true
                } 
            },
            userId:{
                type: DataTypes.INTEGER,
                allowNull: false
            }
        }, {
            sequelize: connection
        })
    }
}

module.exports = Month;