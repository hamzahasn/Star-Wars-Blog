const getState = ({ getStore, getActions, setStore }) => {
	const baseUrl = "https://www.swapi.tech/api";
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			planets: [],
			people: [],
			vehicles: [],
			details: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			fetchData: () => {
				fetch(`${baseUrl}/planets`)
					.then(res => {
						if (!res.ok) throw new Error(res.statusText);
						return res.json();
					})
					.then(data => setStore({ planets: data.results }))
					.catch(err => console.error(err));
				fetch(`${baseUrl}/people`)
					.then(res => {
						if (!res.ok) throw new Error(res.statusText);
						return res.json();
					})
					.then(data => setStore({ people: data.results }))
					.catch(err => console.error(err));
				fetch(`${baseUrl}/vehicles`)
					.then(res => {
						if (!res.ok) throw new Error(res.statusText);
						return res.json();
					})
					.then(data => setStore({ vehicles: data.results }))
					.catch(err => console.error(err));
			},
			fetchDetails: url => {
				fetch(`${url}/`)
					.then(res => {
						if (!res.ok) throw new Error(res.statusText);
						console.log(res.json);
						return res.json();
					})
					.then(data => setStore({ details: data }))
					.catch(err => console.error(err));
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
