import React, {Component} from 'react';
import Profils from "./Profils";
import './App.css';

class App extends React.Component 
{
	constructor(props)
	{
		super(props);

		/*Création d'un tableau pour les profils, on utilisera leurs indices (0,1 et 2) tout au long du code*/

		this.state = { 
			perso: 
			[	
				{	
					photo :"https://img.20mn.fr/i_9l3S50RhezTW8Rw39u0g/648x0",
					nom: "Jong Un",
					prenom: "Kim",
					date_naissance: "8 janvier 1984",
					fond:"#FA8072",
					publication : "Boom",
					like : 0,
				},

				{
					photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQogwfZy0JhSHZnNTVbzk9LGiwMi0kNNeaXaRrKaf-DbqaTBI2T&s",
					nom: "Trump",
					prenom: "Donald",
					date_naissance:"14 juin 1946",
					fond : "#FA8072",
					publication : "Where is the Fake Whistleblower?",
					like : 0,
				},

				{	
					photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlTek7wpdj3uec0dnIAleyoxkg2ePbCGr6_p5NVJi-EoubS_UVw&s",
					nom: "Macron",
					prenom: "Emmanuel",
					date_naissance: "21 décembre 1977",
					fond : "#FA8072",
					publication : "J'ai mis mon gilet jaune",
					like : 0,
				}
			],
			prez : 0
					};
	}

render()
{	
	return(

	/*Ici on affiche les boutons avec les noms et on set l'id 0, 1 ou 2 pour chaque profil à la fonction handleProfils	
	et on crée un objet pour chaque classe... qu'on appelle*/

	<div>

		<div>
		
		<button className = "kim" onClick={( ) => this.handleProfils.bind(this)(0)}>Kim</button>
		<button className = "donald" onClick={( ) => this.handleProfils.bind(this)(1)}>Donald</button>
		<button className = "manu" onClick={( ) => this.handleProfils.bind(this)(2)}>Emmanuel</button>

		</div>

		<Profils p = {this.state.perso[this.state.prez]}/>


	</div>);
}

/*la fonction qui permet de définir sur id sur quel profil l utilisateur a appuyé pour être utilisé dans tout le code*/

handleProfils(id) 
{
	this.setState({prez: id});
}

}

export default App;