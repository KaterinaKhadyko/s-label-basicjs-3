document.addEventListener("DOMContentLoaded", function() {
	var menuItems = null;
	var content = null;

	AJAX("content-template.html", "GET", function(contentData) {
		content = contentData;

		AJAX("menu-data.json", "GET", function(data) {
			menuItems = JSON.parse(data);

			var menuHolder = document.getElementById("menu");
			var contentHolder = document.getElementById("content");
			var ulElement = document.createElement("ul");

			for (var i = 0; i < menuItems.length; i++) {
				var liElement = document.createElement("li");
				liElement.innerText = menuItems[i].menu;

				liElement.onclick = (function(menuItem) {
					return function () {
						document.title = menuItem.title;
						contentHolder.innerHTML = contentData.replace("{{content}}", menuItem.content);
					}
				})(menuItems[i]);

				ulElement.appendChild(liElement);
			}

			menuHolder.appendChild(ulElement);
		});
	});
});

function checkParent(elem, comparer) {
	if (elem != document) {
		if (elem != comparer) {
			checkParent(elem.parentNode, comparer);
		} else {
			return true;
		}
	} else {
		return false;
	}
}