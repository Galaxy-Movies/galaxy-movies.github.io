
// grid and list view:----------------------------------------------
function gridList(){
	const gridButton = document.getElementById("grid-button");
	const listButton = document.getElementById("list-button");
	const gridDiv = document.getElementsByClassName("grid-view")[0];
	const listDiv = document.getElementsByClassName("list-view")[0];
	const gridIcon = document.getElementsByClassName('displayIcon')[0];
	const listIcon = document.getElementsByClassName('displayIcon')[1];

	if(gridButton.checked)
	{
		gridDiv.style.display = "flex";
		listDiv.style.display = "none";
		gridIcon.style.color = "darkorange";
		listIcon.style.color = "orange";
	}
	else{
		gridDiv.style.display = "none";
		listDiv.style.display = "flex";
		listIcon.style.color = "darkorange";
		gridIcon.style.color = "orange";
	}
}

// search function:------------------------------------------------------------

function search() {
	const enteredInput = document.getElementById("search-box").value.toUpperCase();
	const movie = document.getElementById("movie-list").querySelectorAll(".movie");
	
	for (let i = 0; i < movie.length; i++)
	{
		let movieName = movie[i].getElementsByTagName('h2')[0].innerHTML.toUpperCase();
		if (movieName.indexOf(enteredInput) != -1)
		{
			movie[i].style.display = "flex";
		}
		else
		{
			movie[i].style.display = "none";
		}
	}
}

