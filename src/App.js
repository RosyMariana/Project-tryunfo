import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const sum3 = 210;
const atrib = 90;

class App extends React.Component {
  constructor() {
    super();
    
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.deletarCard = this.deletarCard.bind(this);
    
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cartas: [],
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      const {
        cardName,
        cardDescription,
        cardImage,
        cardRare,
        cardAttr1,
        cardAttr2,
        cardAttr3,
      } = this.state;

      let disabled = true;
      const soma = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
      if (cardName && cardDescription && cardImage && cardRare
      && Number(cardAttr1) <= atrib
      && Number(cardAttr1) >= 0
      && Number(cardAttr2) >= 0
      && Number(cardAttr3) >= 0
      && Number(cardAttr2) <= atrib
      && Number(cardAttr3) <= atrib
      && soma <= sum3) {
        disabled = false;
      }
      this.setState({
        isSaveButtonDisabled: disabled,
      });
    });
  }

  
  onSaveButtonClick() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }

    this.setState((state) => ({
      cartas: [...state.cartas,
        {
          cardName,
          cardDescription,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardImage,
          cardRare,
          cardTrunfo,
        }],
    }));
    this.setState(() => (
      {
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
      }));
  }
  deletarCard(carta) {
    const { cartas } = this.state;
    const testeCartas = cartas.filter((card) => card !== carta);
    this.setState({
      cartas: testeCartas,
    }, () => {
      this.setState({
        hasTrunfo: carta.hasTrunfo ? carta.hasTrunfo = false: carta.hasTrunfo,
      });
    });
    
  }

  render() {
    const { cartas } = this.state;
    const teste = cartas.map((carta, cont) => (
      <div key={ cont }>
        <Card
          cardName={ carta.cardName }
          cardDescription={ carta.cardDescription }
          cardAttr1={ carta.cardAttr1 }
          cardAttr2={ carta.cardAttr2 }
          cardAttr3={ carta.cardAttr3 }
          cardImage={ carta.cardImage }
          cardRare={ carta.cardRare }
          cardTrunfo={ carta.cardTrunfo }
        />
        <button
          type="button"
          data-testid="delete-button"
          onClick={ () => this.deletarCard(carta) }
          >
            Excluir</button>
      </div>
    ));
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
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
        />
        { cartas ? teste : ''}
      </div>
    );
  }
}

export default App;
