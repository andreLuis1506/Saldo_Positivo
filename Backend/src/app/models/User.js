const {Model, DataTypes} = require('sequelize');

class User extends Model{
    static init(connection){
        super.init({
            name:{
                type: DataTypes.STRING,
                allowNull: false, 
                validate:{
                    notEmpty: {
                        msg: 'User needs a name'
                    }
                } 
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate:{
                    notEmpty: {
                        msg: 'User needs a email.'
                    },
                    isEmail: true,

                }                 
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false, 
                validate:{
                    notEmpty: {
                        msg: 'User needs a password.'
                    },
                    len: [6,14]
                } 
            },
            fixedIncome: {
                type: DataTypes.STRING,
                allowNull: false, 
                validate:{
                    notEmpty: true,
                } 
            },
            income: {
                type: DataTypes.DECIMAL,
                allowNull: true, 
                validate:{
                    min:1
                } 
            }
        }, {
            sequelize: connection
        })
    }
}

module.exports = User;