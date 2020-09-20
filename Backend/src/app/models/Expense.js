const {Model, DataTypes} = require('sequelize');

class Expense extends Model{
    static init(connection){
        super.init({
            title:{
                type: DataTypes.STRING,
                allowNull: false, 
                validate:{
                    notEmpty: {
                        msg: 'Expense needs a title'
                    }
                } 
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true, 
            },
            value: {
                type: DataTypes.DECIMAL,
                allowNull: false, 
            },
            date: {
                type: DataTypes.STRING,
                allowNull: false, 
                validate:{
                    notEmpty: true,
                    isDate: true
                } 
            },
            level: {
                type: DataTypes.STRING,
                allowNull: false, 
                validate:{
                    notEmpty: {
                        msg: 'Expense needs a level'
                    }
                } 
            },
            monthId: {
                type: DataTypes.INTEGER,
                allowNull: false, 
                validate:{
                    notEmpty: {
                        msg: 'User needs a name'
                    }
                } 
            }
        }, {
            sequelize: connection
        })
    }
}

module.exports = Expense;