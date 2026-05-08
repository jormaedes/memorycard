export default function Header({ score, bestScore }) {
	return (
		<header className="header_container">
			<div className="header_game_info">
				<h1 className="title_game">Memorey Card Game</h1>
				<div className="score_container">
					<span className="score_point">score: {score} </span>
					<span className="best_score_point">best score: {bestScore} </span>
				</div>
			</div>
			<div className="header_decription">
				<span>Get points by clicking on an image but don't click on any more than once!</span>
			</div>
		</header>
	)
}