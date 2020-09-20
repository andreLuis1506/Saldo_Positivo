const Expense =  require('../models/Expense');

module.exports ={
    async create(req, res){
        const { title, description, value, date, type, level, monthId} = req.body;

        const expense = await Expense.create({
            title,
            description,
            value,
            date,
            type,
            level,
            monthId
        }).then(function(expense){
            return res.status(201).json(expense);
        }).catch(function(err){
            return res.status(400).json(err);
        });

    },
    
    async list(req, res){
        const { monthId } = req.body
        const query = req.query

        const expenses = Expense.findAll({
            where: {monthId: monthId},
            order: [
                [
                query.sort ? query.sort : 'createdAt', 
                query.order ? query.order : 'DESC'
                ]
            ]
        }).then(function(expenses){
            return res.status(200).json(expenses)
        }).catch(function(err){
            return res.status(400).json(err)
        })
    },

    async edit(req,res){
        const {title, description, value, date, type, level} = req.body

        const expenseId = req.params.id

        const expense = await Expense.update({
            title: title,
            description: description,
            value: value,
            date: date,
            type: type,
            level: level
        },{
            where: {id: expenseId}
        }).then(function(expense){
            return res.status(200).json(expense)
        }).catch(function(err){
            return res.status(400).json(err)
        })
    }
}