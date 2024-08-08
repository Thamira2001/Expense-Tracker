const incomeSchema = require("../models/incomeModel");

exports.addIncome = async(req, res)=>{
    const {title, amount, category, description,date}=req.body;

    const income = incomeSchema({
        title,
        amount,
        category,
        description,
        date
    });

    console.log(income);

    try{
        //validations 
        if(!title || !category || !description || !date){
            return res.status(400).json({message:'all fields are required'});
        }
        if(amount <=0 || !amount === 'number'){
            return res.status(400).json({message:'invalid amount entered!, amount must be posstive'});
        }

        //saving to the database
        await income.save()
        //sending status code 200 as a response
        res.status(200).json({message:'Income added successfuly!'});


    } catch(error){
        //error occured when try to save to the db
        res.status(500).json({message:'Server error!'});
    }
}

exports.getIncomes = async(req, res)=>{
    try{
        const incomes = await incomeSchema.find().sort({createdAt: -1});
        res.status(200).json(incomes);
    }
    catch(error){
        res.status(500).json({message:'Sever Error'});
    }
}

exports.deleteIncome = async(req, res) =>{
    const {id} = req.params;
    incomeSchema.findByIdAndDelete(id)
        .then((income)=>{
            res.status(200).json({message:'Income deleted successfully!'});
        })
        .catch((err)=>{
            res.status(500).json({message:"Sever error!"});
        })
}