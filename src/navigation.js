window.addEventListener("DOMContentLoaded", navigator, true);
window.addEventListener("hashchange", navigator, false);

function navigator() {
	console.log({ location });

	if (location.hash.startsWith("#trends")) {
		trendsPage();
	} else if (location.hash.startsWith("#search=")) {
		searchPage();
	} else if (location.hash.startsWith("#movie=")) {
		movieDetailsPage();
	} else if (location.hash.startsWith("#category=")) {
		categoriesPage();
	} else {
		homePage();
	}
}

function homePage() {
	console.error("Home!!");

	getTrendingMoviesPreview();
	getCategoriesPreview();
}

function categoriesPage() {
	console.error("categories!!");
}

function movieDetailsPage() {
	console.error("Movie!!");
}

function searchPage() {
	console.error("Search!!");
}

function trendsPage() {
	console.error("TRENDS!!");
}
