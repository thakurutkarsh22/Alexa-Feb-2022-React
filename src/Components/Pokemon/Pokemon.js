import { Component } from "react";

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: "ditto",
      selectedPokemon: null
    };
  }

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemon}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "pokemon");
        this.setState({ selectedPokemon: data });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    //  dont ever update state here without any condition ........
    console.log("prevState", prevState.pokemon);
    console.log("this.state", this.state.pokemon);
    if (prevState.pokemon !== this.state.pokemon) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemon}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data, "pokemon");
          this.setState({ selectedPokemon: data });
        });
    }
  }

  selection(e) {
    console.log(e.target.value);
    this.setState({ pokemon: e.target.value });
  }

  render() {
    return (
      <>
        <div>Pokemon</div>
        <div>Select Pokemon</div>
        <select onChange={this.selection.bind(this)}>
          <option value="ditto">DITTO</option>
          <option value="bulbasaur">Bulbasaur</option>
          <option value="charizard">Charizard</option>
          <option value="pikachu">Pikachu</option>
        </select>

        <div>Name of the pokemon: {this.state.selectedPokemon?.name}</div>
        <div>Height of the pokemon: {this.state.selectedPokemon?.height}</div>
      </>
    );
  }
}

export default Pokemon;
