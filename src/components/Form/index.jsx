import "./style.css";

const Form = ({
  setFormData,
  formData,
  total,
  handleSubmit,
}) => {
  return (
    <div className="pai-formulario">
      <div className="container-form">
        <form className="form" onSubmit={handleSubmit}>
          <p className="form-description">Descrição</p>
          <input id="placeholder-text" className="form-input"
            type="text"
            placeholder = "Digite aqui sua descrição"
            value={formData.description}
            onChange={(event) => setFormData({ ...formData, description: event.target.value })
            }
          />
          <div>
            <p className="form-example">Ex: Compra de roupas</p>
          </div>
          <div className="form-centralize-text">
            <p className="form-value-text">Valor</p>
            <p className="form-value-type">Tipo de Valor</p>
          </div>
          <div className="form-centralize-input">
            <input id="placeholder-number" className="form-input-value"
              type="number"
              placeholder="$"
              value = {formData.value}
              onChange = {(event) => setFormData({...formData, value: event.target.value})
              }
            />
            <select className="form-input-type"
              name=""
              value={formData.type}
              id=""
              onChange={(event) => setFormData({...formData, type: event.target.value})
              }
            >
              <option className="form-option-input" value="Entrada">Entrada</option>
              <option value="Saída">Saida</option>
            </select>
          </div>
          <div className="centralize-input-button">
          <button className="input-button">Inserir valor</button>
          </div>
        </form>
      </div>
      <div className="total">
          <div className="total-left">
            <p className="total-title">Valor Total:</p>
            <span className="total-description">O valor se refere ao saldo</span>
          </div>
          <p className="total-right"> $ {total}</p>
        </div>
    </div>
  )
}

export default Form;