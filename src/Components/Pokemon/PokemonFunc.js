import { useEffect, useState } from "react";

function PokemonFunc() {
  const [pokemon, setPokemon] = useState("ditto");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  // you can do side efffect here only
  // componentDidMount() && componentDidUpdate() && componentWillUnmount

//  we do not do render blocking things ..... 

//     function call() {
//       const prom = new Promise((res,rej) => {
//         setTimeout(() => {
//             return "hey there i am 5 sec late"
//         }, 5000);
//       });

//       prom.then(data => console.log(data));


//     //   localStorage.get
//   }
//   call();

// case 1: filled dependency ... 
  useEffect(() => {
    console.log("useEffect 1");
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "pokemon");
        setSelectedPokemon(data);
      });

    //   this return will do work lies of componentWillUnmount not exactly ....
    //  cleaning purpose ... subscription .. 
      return () => {
        // console.log("cleaning the subscription") ;
        console.log("cleanup 1") ;
      }
  }, [pokemon]);

    //    case 2:  dependency array is blank 
    useEffect(() => {
        console.log("useEffect 2");
        
        
        return  () => {
            // cleanup /// 
            console.log("cleanup 2");

        }
    }, [])

    //  case 3 : no dependency array 
    useEffect(() => {
        console.log("useEffect 3");

        return  () => {
            // cleanup /// 
        console.log("cleanup 3");

        }
    })

    // 
    // useEffect(() => {
    //     let id = setInterval(() => console.log("hey there"), 1000);
        
    //     return () => {
    //         clearInterval(id);
    //     }
    // }, [])

  function selection(e) {
    console.log(e.target.value);
    setPokemon(e.target.value);
  }

  return (
    <>
      {console.log("render")}
      <div>PokemonFunc</div>
      <select onChange={(e) => selection(e)}>
        <option value="ditto">DITTO</option>
        <option value="bulbasaur">Bulbasaur</option>
        <option value="charizard">Charizard</option>
        <option value="pikachu">Pikachu</option>
      </select>

      <div>Name of the pokemon: {selectedPokemon?.name}</div>
      <div>Height of the pokemon: {selectedPokemon?.height}</div>
    </>
  );
}

export default PokemonFunc;
