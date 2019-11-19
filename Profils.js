import React, {Component} from 'react';
import './Profils.css';

class Profils extends React.Component
{	
	constructor(props)
	{
		super(props);
	}

/*la fonction qui permet le changement de fond*/

	handleBackground(id)
	{
		if(this.props.p.fond=="#FA8072")
		{
			this.props.p.fond="#7899FF";
			this.setState({prez: id});
		}
		else 
		{
			this.props.p.fond="#FA8072";
			this.setState({prez: id});
		}
	}

/*la fonction qui permet d'ajouter les likes*/	

	handleLike(id)
	{
		this.props.p.like=this.props.p.like+1;
		this.setState({prez: id});
	}
	
	render()
	{
		/*Ici on crée les containers pour strcuturer l'affichage des profils avec ses éléments*/

		return(

			<div className="Profils" style={{backgroundColor: this.props.p.fond}}>

				<div className="photo"> <img src={this.props.p.photo}/> </div>

				<div className="Prenom"> {this.props.p.prenom} </div>

				<div className="Nom"> {this.props.p.nom} </div>
			
				<div className="Date_naissance"> {this.props.p.date_naissance} </div>

				<div className="fond"> <button onClick={( ) => this.handleBackground(this.props.p)}> Change style </button> </div>

				<div className="ContainerPublication">

					<div className="Publication">

						<h4>Dernière publication :</h4>
			
						<div className="Text"> {this.props.p.publication} </div>

							<button className="LikeAffichage" onClick={( ) => this.handleLike(this.props.p) }>
							<h3>+1 Like</h3> 
							</button>
							<div className="Like"> {this.props.p.like} </div>
					</div>

				</div>

			</div>)
	}
}
export default Profils;