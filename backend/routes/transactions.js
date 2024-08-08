const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');

const router = require('express').Router();

router.get('/', (req,res) =>{
    res.send('Hello world!');
})

router.post('/add-income', addIncome)
router.get('/get-incomes', getIncomes)
router.delete('/delete-income/:id', deleteIncome)

module.exports = router;