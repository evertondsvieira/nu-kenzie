import { useState } from "react";
import "./style.css";

const List = ({ listTransactions, itensFiltrados }) => {
  const [transactionType, setTransactionType] = useState("");

  const handleFilter = (type) => {
    setTransactionType(type);
  };

  const filteredTransactions = transactionType
    ? listTransactions.filter(
        (transaction) => transaction.type === transactionType
      )
    : listTransactions;

  return (
    <div className="pai-lista">
      <div className="filter-centralize">
        <h2 className="filter-resume">Resumo Financeiro</h2>
        <div className="filter-centralize-button">
          <button className="filter-all" onClick={() => handleFilter("")}>
            Todos
          </button>
          <button
            className={
              transactionType === "Entrada"
                ? "filter-input active"
                : "filter-input"
            }
            onClick={() => handleFilter("Entrada")}
          >
            Entrada
          </button>
          <button
            className={
              transactionType === "Saída"
                ? "filter-expenses active"
                : "filter-expenses"
            }
            onClick={() => handleFilter("Saída")}
          >
            Despesas
          </button>
        </div>
      </div>
      <ul className="container-list">
        {filteredTransactions.length === 0 ? (
          <h2 className="no-input">Não há lançamentos no momento</h2>
        ) : (
          filteredTransactions.map((transaction, index) => {
            return (
              <div className="input-list" key={index}>
                {transaction.type === "Entrada" ? (
                  <li className="input">
                    <div className="centralize-list-text">
                      <h3 className="description-list">
                        {transaction.description}
                      </h3>
                      <p className="type-list">{transaction.type}</p>
                    </div>
                    <div className="centralize-list-value">
                      <span className="value-list">
                        {transaction.value.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </span>
                      <div className="centralize-trash">
                        <button
                          className="trash"
                          onClick={() => itensFiltrados(transaction)}
                        >
                          <img src="./trash.svg" alt="Lixeira" />
                        </button>
                      </div>
                    </div>
                  </li>
                ) : (
                  <li className="output-list">
                    <div className="centralize-list-text">
                      <h3 className="description-list">
                        {transaction.description}
                      </h3>
                      <p className="type-list">{transaction.type}</p>
                    </div>
                    <div className="centralize-list-value">
                      <span className="value-list">
                        {transaction.value.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </span>
                      <div className="centralize-trash">
                        <button
                          className="trash"
                          onClick={() => itensFiltrados(transaction)}
                        >
                          <img src="./trash.svg" alt="Lixeira" />
                        </button>
                      </div>
                    </div>
                  </li>
                )}
              </div>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default List;
