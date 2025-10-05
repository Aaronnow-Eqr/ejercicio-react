import { useState, useEffect } from "react"

function Home () {
  const [Pokemons, setPokemons] = useState([])
  const [link, setLink] = useState('https://pokeapi.co/api/v2/pokemon');
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(link)
      .then(res => res.json())
      .then(res => setPokemons(res))
      .catch(err => console.log(err))
  }, [link])

  const updateStates = (pageNumber, Newlink) => {
    setPage(pageNumber)
    setLink(Newlink)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div>
      <h1 className="font-bold text-4xl">Pokemons</h1>
      <input type="text" name="search" id="search" />
      <div className="grid grid-cols-4 gap-4">
        {
          Pokemons?.results?.map(
            (Pokemon, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded shadow">
                <h2>{Pokemon.name}</h2>
              </div>
            )
          )
        }
      </div>
      <div className="flex justify-center items-center gap-6">
        <button disabled={!Pokemons?.previous} onClick={() => updateStates(page - 1, Pokemons.previous)}>Prev</button>
        <p>{page}</p>
        <button disabled={!Pokemons?.next} onClick={() => updateStates(page + 1, Pokemons.next)}>Next</button>
      </div>
    </div>
  )
}

export { Home }