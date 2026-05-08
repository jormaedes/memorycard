import '../styles/header.css';

export default function Header({ score, bestScore }) {
	return (
		<header className="header_container">
			<div className="header_game_info container">
				<h1 className="title_game">Memory Game</h1>
				<div className="score_container">
					<p className="score_point">Score: {score} </p>
					<p className="best_score_point">Best score: {bestScore} </p>
				</div>
			</div>
			<div className="header_decription container">
				<span>Get points by clicking on an image but don't click on any more than once!</span>
			</div>
		</header>
	)
}