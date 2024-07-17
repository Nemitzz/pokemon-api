# API Documentation

## English

---

### Pokémon API

A super simple and fun API to find Pokémon.

---

## Index

1. [Instalation](#instalation)
2. [Usage](#usage)
3. [Routes](#routes)

    - [**Pokémon**](#pokemon)
    - [GET /find/:id](#get--get-pokemon-by-id)
    - [POST /find/:id](#post--guess-the-pokemon)
    - [POST /find](#post--pokemon-search)

3. [Extras](#extras)

---

## Instalation

Instructions for download the repository and install the API dependencies.

In your terminal (VSCode, GIT Bash, Windows Terminal, etc.):

- Clone the repository: `git clone <repository_url>`
- Go to the cloned repository folder: `cd your_folder_name`
- Install the dependencies: `npm install`

---

## Usage

Instructions on how to run the application.

**In your terminal (VSCode, GIT Bash, Windows Terminal, etc.)**:

- You will need [Node.js](https://nodejs.org/en/download/package-manager) and [Insomnia](https://insomnia.rest/) installed
- Move to `/my-pokemon-api/src` typing the following command: `cd src`
- Run the app with the following command: `node index.js`

**On Insomnia**

- Create a new `request collection`
- On the left panel, add 3 new `HTTP Requests`, two of them beeing `POST` and one `GET` (you can change it on top of the middle panel)
- All URL starts with: http://localhost:3000/pokemon/find/

---

## Routes

Explanation of how the routes work.

---

# GET: Get Pokemon By Id

Returns the Pokémon corresponding to the ID placed in the URL above, after /find.

**Example**:

- URL: `http://localhost:3000/pokemon/find/1`

- Response:
    ```Json
    {
	    "name": "Bulbasaur",
    }
    ```

---

# POST: Guess the Pokémon

Returns whether the Pokémon entered in the body corresponds to the index in the URL.

**Example**:

- URL: `http://localhost:3000/pokemon/find/1`

- Body request:
    ```Json
    {
	    "name": "Bulbasaur",
    }
    ```

- Response:
    ```Json
    {
      "message": "Pokémon found in the Pokédex!",
	    "name": "Bulbasaur",
      "id": "1"
    }
    ```

**Example 2**:

- URL: `http://localhost:3000/pokemon/find/2`

- Body request:
    ```Json
    {
	    "name": "Bulbasaur",
    }
    ```

- Response:
    ```Json
    {
      "message": "Wrong Pokémon."
    }
    ```

---

# POST: Pokémon search

Returns the name and index of the Pokémon entered in the body.

**Example**:

- URL: `http://localhost:3000/pokemon/find`

- Body request:
    ```Json
    {
	    "name": "raichu",
    }
    ```

- Response:
    ```Json
    {
      "id": 26,
	    "name": "Raichu"
    }
    ```

**Example 2**:

- URL: `http://localhost:3000/pokemon/find`

- Body request:
    ```Json
    {
	    "name": "flour",
    }
    ```

- Response:
    ```Json
    {
      "message": "Pokémon not found"
    }
    ```

---

## Extras

- **Technologies Used**
    - JavaScript
    - Node.js

- All tests were done using [Insomnia](https://insomnia.rest/)
