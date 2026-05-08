import { useState } from 'react'
import Header from './components/Header';
import getRandomIds from './utils/getRandomsIds';
import './App.css'

function App() {
	const [ids, setIds] = useState(getRandomIds(16));
	const [bestScore, setBestScore] = useState(0);
	const [score, setScore] = useState(0);

	return (
		<>
			<Header score={score} bestScore={bestScore}/>
			{
				ids.map(id=> 
					<li>{id}</li>
				)
			}
		</>
	)
}

export default App
