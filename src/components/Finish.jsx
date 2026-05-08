import '../styles/finish.css'

export default function Finish({ cName='win', handlePlayAgain , text, description}) {
	return (
		<section className="finish_container">
			<div className="finish_content">
				<div className="finish_text">
					<p className={cName}>{text}</p>
					<p>{description}</p>
				</div>
				<button onClick={handlePlayAgain}>Play again</button>
			</div>

		</section>
	)
}