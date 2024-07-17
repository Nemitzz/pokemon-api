const express = require('express');
const pokemon = require('./pokemon');

const app = express();
app.use(express.json());

app.get('/pokemon/find/:id', (req, res) => {
  const { id } = req.params;

  if (id < 1 || id > 151) {
    return res
      .status(400)
      .json({ message: 'Invalid ID. ID must be a number between 1 and 151' });
  }

  const pokemonIndex = id;
  const pokemonName = pokemon[pokemonIndex];

  res.json({ name: pokemonName });
});

app.post('/pokemon/find/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (id < 1 || id > 151) {
    return res
      .status(400)
      .json({ message: 'Invalid ID. ID must be a number between 1 and 151' });
  }

  const pokemonIndex = id;
  const pokemonName = pokemon[pokemonIndex].toLowerCase();

  if (pokemonName === name.toLowerCase()) {
    res.json({
      message: 'Pokémon found in the Pokédex!',
      name: pokemonName,
      id: pokemonIndex,
    });
  } else {
    res.json({ message: 'Wrong Pokémon.' });
  }
});

app.post('/pokemon/find', (req, res) => {
  const { name } = req.body;

  const index = pokemon.findIndex(
    (pokemons) => pokemons && pokemons.toLowerCase() === name.toLowerCase(),
  );

  if (index !== -1) {
    const id = index;
    res.json({ id, name: pokemon[index] });
  } else {
    res.status(400).json({ message: 'Pokémon not found' });
  }
});

module.exports = app;
