const Month =  require('../models/Month');
const jwt = require('jsonwebtoken');

module.exports ={
    async create(req, res){
        const { title, income, userId} = req.body;

        const month = await Month.findOrCreate({
            where: { title: title, userId: userId },
            defaults: {
                title, 
                income,
                userId
            }
        }).then(function(month){
            return res.status(201).json(month);
        }).catch(function(err){
            return res.status(400).json(err);
        });
    },

    async list(req, res){
        const id = req.body.userId;

        const months = await Month.findAll({
            where: {userId: id}
        }).then(function(months){
            return res.status(200).json(months);
        }).catch(function(err){
            return res.status(400).json(err)
        });
    },

    async lastMonth(req, res){
        const { userId} = req.body

        const month = await Month.findOne({
            where: {userId: userId,},
            order: [['createdAt', 'DESC']]
        }).then(function(month){
            return res.status(200).json(month)
        }).catch(function(err){
            return res.status(400).json(err)
        })
    },
    
    async edit(req, res){
        const {income} = req.body
        const monthId = req.params.id

        const month = await Month.update({
            income: income
        }, {
            where: {id: monthId} 
        }).then(function(month){
            return res.status(200).json(month)
        }).catch(function(err){
            return res.status(400).json(err)
        })
    }
}