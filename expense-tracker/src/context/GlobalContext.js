import React,{ useContext, useState } from "react";
import axios from 'axios';

//host base url of backend that we need to connect to accces and render info from db through backend to the frontend to be displayed 
const BASE_URL='http://localhost:5000/api/v1/';

const GlobalContext = React.createContext()

export const GlobalProvider = ({children})=>{
    //deriving array of incomes and expenses from backend 

    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);

    //functions regarding incomes 

    //add an income from frontend to backend and to db 
    const addIncome = async(income)=>{
        const response = await axios.post(`${BASE_URL}add-income`, income)
            .catch((err)=>{
                setError(err.response.data.message);
            })

            getIncomes();//show all the incomes with the new income as well 
    }

    //getting all incomes from backend 
    const getIncomes = async()=>{
        const response = await axios.get(`${BASE_URL}get-incomes`);
        setIncomes(response.data);
        console.log(response.data);
    }

    //deleteing an income from front end which then goes to backend where it handles the request and deletes the income fromt the db
    const deleteIncome = async(id)=>{
        const response = await axios.delete(`${BASE_URL}delete-income/${id}`);
        getIncomes();//get all the incomes after deletion of income 
    }

    //function to get total incomes 
    const totalIncomes = ()=>{
        let totalIncome =0 ;
        incomes.forEach((income)=>{
            totalIncome+=income;
        })

        return totalIncome;
    }

    //functions regarding expenses

    //add an income from frontend to backend and to db 
    const addExpense = async(expense)=>{
        const response = await axios.post(`${BASE_URL}add-expense`, expense)
            .catch((err)=>{
                setError(err.response.data.message);
            })

            getExpenses();//show all the expenses with the new expense as well 
    }

    //getting all expenses from backend 
    const getExpenses = async()=>{
        const response = await axios.get(`${BASE_URL}get-expenses`);
        setExpenses(response.data);
        console.log(response.data);
    }

    //deleteing an income from front end which then goes to backend where it handles the request and deletes the income fromt the db
    const deleteExpense = async(id)=>{
        const response = await axios.delete(`${BASE_URL}delete-expense/${id}`);
        getIncomes();//get all the expenses after deletion of expense
    }

    //function to get total expenses
    const totalExpenses = ()=>{
        let totalExpenses =0 ;
        expenses.forEach((expense)=>{
            totalExpenses+=expense;
        })

        return totalExpenses;
    }

    //function to get balance of icnomes and expenses 
    const totalBalance = ()=>{
        return totalIncomes() - totalExpenses();
    }

    //function to get transaction history-- need to add
    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }

    return(

        <GlobalContext.Provider value={{
            addIncome,
            incomes,
            getIncomes,
            deleteIncome,
            totalIncomes,
            addExpense,
            expenses,
            getExpenses,
            deleteExpense,
            totalExpenses,
            totalBalance,
            transactionHistory,
            error,
            setError,

        }}>

            {children}

        </GlobalContext.Provider>

    )

}


export const useGlobalContext = ()=>{
    return useContext(GlobalContext);
}