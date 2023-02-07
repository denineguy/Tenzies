import React from "react"

export default function Die(props) {
	const styles = {
			backgroundColor: props.isHeld ? "#59E391" : "#ffffff"
	}


	return (
		<div>
			{props.value ===1 && <div 
			className={`die--face die--${props.value}`}
			style={styles}
			onClick={props.holdDice}>
				<span class={`dot dot--${props.value}`}></span>
			</div>  }

			{props.value === 2 && <div 
				className={`die--face die--${props.value}`}
				style={styles}
				onClick={props.holdDice}>
					<span class={`dot dot--${props.value}`}></span>
					<span class={`dot dot--${props.value}`}></span>
			</div>  }

			{props.value === 3 && <div 
				className={`die--face die--${props.value}`}
				style={styles}
				onClick={props.holdDice}>
					<span class={`dot dot--${props.value}`}></span>
					<span class={`dot dot--${props.value}`}></span>
					<span class={`dot dot--${props.value}`}></span>
			</div>  }

			{props.value === 4 && <div 
				className={`die--face die--${props.value}`}
				style={styles}
				onClick={props.holdDice}>
					<div className="column">
						<span class={`dot dot--${props.value}`}></span>
						<span class={`dot dot--${props.value}`}></span>
					</div>
					<div className="column">
						<span class={`dot dot--${props.value}`}></span>
						<span class={`dot dot--${props.value}`}></span>
					</div>
			</div>  }

			{props.value === 5 && <div 
				className={`die--face die--${props.value}`}
				style={styles}
				onClick={props.holdDice}>
					<div className="column">
						<span class={`dot dot--${props.value}`}></span>
						<span class={`dot dot--${props.value}`}></span>
					</div>
					
					<div className="column">
						<span class={`dot dot--${props.value}`}></span>
					</div>

					<div className="column">
						<span class={`dot dot--${props.value}`}></span>
						<span class={`dot dot--${props.value}`}></span>
					</div>
			</div>  }

			{props.value === 6 && <div 
				className={`die--face die--${props.value}`}
				style={styles}
				onClick={props.holdDice}>
					<div className="column">
						<span class={`dot dot--${props.value}`}></span>
						<span class={`dot dot--${props.value}`}></span>
						<span class={`dot dot--${props.value}`}></span>
					</div>
					<div className="column">
						<span class={`dot dot--${props.value}`}></span>
						<span class={`dot dot--${props.value}`}></span>
						<span class={`dot dot--${props.value}`}></span>
					</div>
			</div>  }
		</div>
		
		
		
	)
}