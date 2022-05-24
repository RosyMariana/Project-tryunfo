import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    const checar = (
      <label htmlFor="trunfo-input">
        Super Trybe Trunfo
        <input
          data-testid="trunfo-input"
          id="trunfoCheck"
          name="cardTrunfo"
          type="checkbox"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </label>
    );
    return (
      <div>
        <h1> Adicionar nova carta</h1>
        <form>
          <label htmlFor="name-input">
            Nome:
            <input
              type="text"
              data-testid="name-input"
              id="name"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <p />
          <label htmlFor="description-input">
            Descrição:
            <textarea
              id="descriçao"
              name="cardDescription"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <p />
          <label htmlFor="attr1-input">
            Attr01:
            <input
              data-testid="attr1-input"
              id="attr1"
              name="cardAttr1"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
            <p />
          </label>
          <label htmlFor="cardAttr2-input">
            Attr02:
            <input
              data-testid="attr2-input"
              id="attr2"
              name="cardAttr2"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
            <p />
          </label>
          <label htmlFor="attr3-input">
            Attr03:
            <input
              data-testid="attr3-input"
              id="attr3"
              name="cardAttr3"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
            <p />
          </label>
          <label htmlFor="image-input">
            Imagem
            <input
              type="text"
              data-testid="image-input"
              id="image"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="rare-input">
            Raridade
            <select
              id="raridade"
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal"> normal</option>
              <option value="raro"> raro</option>
              <option value="muito raro"> muito raro</option>
            </select>
          </label>
          <p />
          {
            hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : checar
          }
          <p />
          <button
            data-testid="save-button"
            type="button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
