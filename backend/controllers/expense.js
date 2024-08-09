const ExpenseSchema = require("../models/expenseModel");

exports.addExpense = async(req, res)=>{
    const {title, amount, category, description,date}=req.body;

    const expense = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    });

    console.log(expense);

    try{
        //validations 
        if(!title || !category || !description || !date){
            return res.status(400).json({message:'all fields are required'});
        }
        if(amount <=0 || !amount === 'number'){
            return res.status(400).json({message:'invalid amount entered!, amount must be posstive'});
        }

        //saving to the database
        await expense.save()
        //sending status code 200 as a response
        res.status(200).json({message:'Expense added successfuly!'});


    } catch(error){
        //error occured when try to save to the db
        res.status(500).json({message:'Server error!'});
    }
}

exports.getExpenses = async(req, res)=>{
    try{
        const expenses = await ExpenseSchema.find().sort({createdAt: -1});
        res.status(200).json(expenses);
    }
    catch(error){
        res.status(500).json({message:'Sever Error'});
    }
}

exports.deleteExpense = async(req, res) =>{
    const {id} = req.params;
    ExpenseSchema.findByIdAndDelete(id)
        .then((expense)=>{
            res.status(200).json({message:'Expense deleted successfully!'});
        })
        .catch((err)=>{
            res.status(500).json({message:"Sever error!"});
        })
}