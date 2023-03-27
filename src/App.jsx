import './App.css'
import "./reset.css"

import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Form from "./components/Form"
import Header from "./components/Header"
import List from "./components/List"

function App() {
  const [listTransactions, setListTransactions] = useState([])

  const [formData, setFormData] = useState({
    description: "",
    type: "Entrada",
    value: ""
  })

  const total = listTransactions.reduce((valorAnterior, valorAtual) => {
    return valorAtual.value + valorAnterior;
  }, 0)

  const itensFiltrados = (transaction) => {setListTransactions(listTransactions.filter((item) => {
    return item !== transaction
  }))}

  const notify = () => toast("Há campos vazios!")
  
  function handleSubmit(event) {
    event.preventDefault()
    if(formData.description === "" || formData.value === ""){
      notify()
    } else {
      const newTransactions = {
        description: formData.description,
        type: formData.type,
        value: formData.type === "Saída" ? Number(formData.value) * (-1) : Number(formData.value)
      }
      setListTransactions([...listTransactions, newTransactions])
    }
  }

  return (
    <>
      <Header />
      <div className="pai">
        <ToastContainer />
        <Form 
          formData={formData}
          listTansactions={listTransactions}
          setListTransactions={setListTransactions}
          setFormData={setFormData}
          total={total}
          handleSubmit={handleSubmit}
        />
        <List 
          listTransactions={listTransactions}
          itensFiltrados={itensFiltrados}
        />
      </div>
    </>
  )
}

export default App
