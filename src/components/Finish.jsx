import '../styles/finish.css'

export default function Finish({ cName='win', handlePlayAgain, text, description, score, bestScore }) {
	return (
		<section className={`finish_container ${cName}`}>
			<div className="finish_content" aria-live="polite">
				<div className="finish_mark" aria-hidden="true">{cName === 'win' ? '16' : '!'}</div>
				<div className="finish_text">
					<p className="finish_eyebrow">ROUND COMPLETE</p>
					<h2>{text}</h2>
					<p className="finish_description">{description}</p>
				</div>
				<div className="finish_stats">
					<div>
						<span>ROUND SCORE</span>
						<strong>{score}</strong>
					</div>
					<div>
						<span>PERSONAL BEST</span>
						<strong>{bestScore}</strong>
					</div>
				</div>
				<button className="finish_play_again" onClick={handlePlayAgain}>
					Play again <span aria-hidden="true">&#8594;</span>
				</button>
			</div>
		</section>
	)
}