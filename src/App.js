import React, { Component } from 'react';
import PlanetList from './PlanetList';
import SearchBox from './SearchBox';
//import {planets} from './planets';


class App extends Component {
	constructor() {
		super()
		this.state = {
			planets: [],
			searchfield: ''
		}
	}


	componentDidMount() {
		// fetch('https://swapi.co/api/planets/?format=json')
		// 	.then(response =>{
		// 		return response.json();
		// 	})
		// 	.then(planets => {
		// 		this.setState({ planets: planets.results})
		// 	});

		const urls = [
			'https://swapi.co/api/planets/?format=json',
			'https://swapi.co/api/planets/?format=json&page=2',
			'https://swapi.co/api/planets/?format=json&page=3',
			'https://swapi.co/api/planets/?format=json&page=4',
			'https://swapi.co/api/planets/?format=json&page=5',
			'https://swapi.co/api/planets/?format=json&page=6',
			'https://swapi.co/api/planets/?format=json&page=7'
		];
		
		const planetList = [];
		Promise.all(urls.map(url => fetch(url).then(response => response.json())))
		.then(data => {
			//console.log('1', data[0].results[0])//THIS GIVES THE ACTUAL PLANET NAME
			planetList.push(data[0].results)
			planetList.push(data[1].results)
			planetList.push(data[2].results)
			planetList.push(data[3].results)
			planetList.push(data[4].results)
			planetList.push(data[5].results)
			planetList.push(data[6].results)
			console.log("PLANET LIST", planetList)
			const flattenedPlanetList = planetList.flat();
			console.log("FlATTEND PLANET LIST", flattenedPlanetList);
			this.setState({planets: flattenedPlanetList })
		})
		.catch(err => console.log('Argh! Not working!!', err));
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	render() {
		const filteredPlanets = this.state.planets.filter((planet) => {
		 	return planet.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
			if(this.state.planets.length === 0){
				return <h1>Loading</h1>
			} else {
				return(
				<div className = 'tc'>
					<h1 className = 'white'>StarWars Planets... as robots</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<PlanetList planets={ filteredPlanets }/>
				</div>
				);
			}
		
	};
	
}

export default App;

//CLAUDIA's SOLUTION but only pulls in first page of results

// getData = () =>{
// 		const url = 'https://swapi.co/api/planets/?format=json';
// 		fetch(url)
// 			.then(response => {
// 				return response.json();
// 			})
// 			.then(json => {
// 				console.log("json result", json);
// 				this.setState({
// 					planets:json.results
// 				});
// 			});
// 	};

// 	componentDidMount(){
// 		console.log("mounting");
// 		this.getData();
// 		console.log("state", this.state);
// 	}

// Ben's suggestion
// 
//const planet_list = [];
// Promise.all(urls.map(url => fetch(url).then(response => response.json())))
// 		.then(data => {
// 				const i
// 				for(i=0, i<7, i++){
// 					const pageResult = data[i].results;
// 					for (data in pageResult){
// 						planet_list.push(data)
// 					}

// 				}
// 				console.log('1', data[0])
// 				console.log('2', data[1])
			
			// console.log('8', data[0].results[0])//THIS GIVES ME THE ACTUAL PLANET NAME!!
			// planet_list.push(data[0].results)
			// planet_list.push(data[1].results)
			// planet_list.push(data[2].results)
			// planet_list.push(data[3].results)
			// planet_list.push(data[4].results)
			// console.log("PLANET LIST", planet_list)
			// might need to flatten twice to make it all just one array of 61 planets
			// planet_list.flatMap()
			// planet_list.flatMap()
			// this.setState({planets: planet_list })
			// this.setState({planets: data[0].results })
		// })


