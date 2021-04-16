class Contador extends React.Component{

	constructor (props){

		super(props);
		this.state = {contador: this.props.contador}
		this.onButtonClick = this.onButtonClick.bind(this);
	}

	onButtonClick(e){

		e.preventDefault();
		this.setState({
			contador: this.state.contador + 1,
		});

	}

	handleChange(event){
		this.setState({
			username: event.target.username}, function(){
				this.validateUsername();
			}
		})
	}
		render(){
			return(
					<div>
						<button onClick={this.onButtonClick}> Suma uno!</button>
						<p> Hola, van {this.state.contador}!!</p>
					</div>	
				)
		}
};

