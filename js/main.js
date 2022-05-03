import Glasses from "../models/glasses.js";

let dataGlasses = [
	{
		id: "G1",
		src: "./img/g1.jpg",
		virtualImg: "./img/v1.png",
		brand: "Armani Exchange",
		name: "Bamboo wood",
		color: "Brown",
		price: 150,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
	},
	{
		id: "G2",
		src: "./img/g2.jpg",
		virtualImg: "./img/v2.png",
		brand: "Arnette",
		name: "American flag",
		color: "American flag",
		price: 150,
		description:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
	},
	{
		id: "G3",
		src: "./img/g3.jpg",
		virtualImg: "./img/v3.png",
		brand: "Burberry",
		name: "Belt of Hippolyte",
		color: "Blue",
		price: 100,
		description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
	},
	{
		id: "G4",
		src: "./img/g4.jpg",
		virtualImg: "./img/v4.png",
		brand: "Coarch",
		name: "Cretan Bull",
		color: "Red",
		price: 100,
		description: "In assumenda earum eaque doloremque, tempore distinctio.",
	},
	{
		id: "G5",
		src: "./img/g5.jpg",
		virtualImg: "./img/v5.png",
		brand: "D&G",
		name: "JOYRIDE",
		color: "Gold",
		price: 180,
		description:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
	},
	{
		id: "G6",
		src: "./img/g6.jpg",
		virtualImg: "./img/v6.png",
		brand: "Polo",
		name: "NATTY ICE",
		color: "Blue, White",
		price: 120,
		description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
	},
	{
		id: "G7",
		src: "./img/g7.jpg",
		virtualImg: "./img/v7.png",
		brand: "Ralph",
		name: "TORTOISE",
		color: "Black, Yellow",
		price: 120,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
	},
	{
		id: "G8",
		src: "./img/g8.jpg",
		virtualImg: "./img/v8.png",
		brand: "Polo",
		name: "NATTY ICE",
		color: "Red, Black",
		price: 120,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
	},
	{
		id: "G9",
		src: "./img/g9.jpg",
		virtualImg: "./img/v9.png",
		brand: "Coarch",
		name: "MIDNIGHT VIXEN REMIX",
		color: "Blue, Black",
		price: 120,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
	},
];

let init = () => {
	const glasses = getGlasses(dataGlasses);
	renderGlasses(glasses);
	changeGlasses(glasses);
};

init();

function getGlasses(dataGlasses) {
	const glasses = dataGlasses.map((glass) => {
		const { id, src, virtualImg, brand, name, color, price, description } =
			glass;

		return new Glasses(
			id,
			src,
			virtualImg,
			brand,
			name,
			color,
			price,
			description
		);
	});

	return glasses;
}

function renderGlasses(arr) {
	const content = arr.reduce((result, glass) => {
		return (
			result +
			`<img id="${glass.id}" src="${glass.src}" class="col-4 glass-hover" alt="" />`
		);
	}, "");

	getEle("vglassesList").innerHTML = content;
}

function changeGlasses(glasses) {
	glasses.forEach((glass) => {
		getEle(`${glass.id}`).addEventListener("click", () => {
			const content = `<img id="toggleGlass" src="${glass.virtualImg}" alt = "" />`;
			getEle("avatar").innerHTML = content;

			// Description
			getEle("glassesInfo").style.display = "block";
			getEle("glassesInfo").innerHTML = `
            <p class="mb-1">${glass.name} - ${glass.brand} (${glass.color})</p>
            <div class="mb-2">
               <button class="btn btn-danger mr-2">$${glass.price}</button>
               <span class="text-success">Stocking</span>
            </div>
            <p class="mb-1">${glass.description}</p>
         `;
		});
	});
}

function getEle(id) {
	return document.getElementById(id);
}

window.removeGlasses = (bool) => {
	if (!bool) {
		getEle("toggleGlass").style.display = "none";
	} else {
		getEle("toggleGlass").style.display = "block";
	}
};
