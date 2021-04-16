
var Task = React.createClass({

	getInitialState: function(){
		return({
			update: false
		});
	},

		render: function(){
			return(
			
					<li className={ if this.props.done then 'done'} >
					{this.props.name}
					{ if this.state.updated <small> Updated...</small>}
					</li>
					);
				
					}
				});



var Task = React.createClass({

onUpdate: function(event) {

this.setState({

updated: true

});

},

render: function() {

		<li className={ if this.props.done then 'done' } onClick={this.onUpdate}>

		{ this.props.name }

		{ if this.state.Updated <small>Updated…</small> }

		</li>

}

});

const [state, setState] = useState(initialState);


const {useState} = React;

function MuestraCuenta(props) {

	return(
				<p> Hola, van {props.contador}!!! </p>
		);
}

function Contador(props){

	const [constador,setContador] = useState(props.constador);

	const onButtonClick = () => {

		setContador(constador + 1)
	}

	return(
			<div>
					<button onClick= {onButtonClick}> Suma uno! </button>
							<MuestraCuenta constador= {constador}/>
			</div>
	);
};