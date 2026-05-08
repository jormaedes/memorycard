import { use, useEffect, useState } from 'react'
import Header from './components/Header';
import Win from './components/Win';
import getRandomIds from './utils/getRandomsIds';
import CardGrid from './components/CardGrid';
import shuffle from './utils/shuffle';
import './App.css'

const NUMBERS = 3

function App() {
	const [ids, setIds] = useState(getRandomIds(NUMBERS));
	const [bestScore, setBestScore] = useState(0);
	const [score, setScore] = useState(0);
	const [loading, setLoading] = useState(true);
	const [pkms, setPkms] = useState([]);
	const [error, setError] = useState(null);
	const [clikeds, setClickeds] = useState([]);

	useEffect(() => {
		let cancelled = false;
		async function fetchAll() {
			try {
				setLoading(true);
        		setError(null);
				const promises = ids.map(id =>
					fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
						.then(res => {
							if (!res.ok) throw new Error(`HTTP ${res.status}`);
							return res.json();
						})
				);

				const results = await Promise.all(promises);
				
				if (!cancelled) {
					const cards = results.map(data => ({
						id: data.id,
						name: data.name,
						image: data.sprites.other['official-artwork'].front_default,
					}));
					setPkms(cards);
				}
			}
			catch (error) {
				if (!cancelled) setError(error.message);
			}
			finally {
				if (!cancelled) setLoading(false);
			}
		}

		fetchAll();
		return () => { cancelled = true; };
	}, [ids]);


	useEffect(()=>{
		setBestScore(Math.max(bestScore, score))
	}, [score])

	function handleCliced(id) {
		if (clikeds.includes(id)) return -1;
		setScore(a => a + 1);
		const nClikeds = [...clikeds, id];
		setClickeds(nClikeds);
		shuffle(pkms);
	}

	function handlePlayAgain()
	{
		setIds(getRandomIds(NUMBERS));
		setClickeds([]);
		setScore(0);
		setPkms([])
		setLoading(true);
	}
	
	let win = clikeds.length !== 0 && clikeds.length === pkms.length;

	if (win) return (
		<>
			<Header score={score} bestScore={bestScore} />
			<Win handlePlayAgain={handlePlayAgain}/>
		</>
	)
	if (loading) return <p>A carregar Pokémon...</p>;
  	if (error)   return <p>Erro: {error}</p>;
	
	return (
		<>
			<Header score={score} bestScore={bestScore} />
			<CardGrid listPkms={pkms} handleCliced={handleCliced}/>
		</>
	)
}

export default App
