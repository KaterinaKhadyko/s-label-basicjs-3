var AJAX = function(url, method, callback) {
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			callback.call(null, xhttp.responseText);
		}
	};

	xhttp.open(method, url, true);
	xhttp.send();
};

document.addEventListener("DOMContentLoaded", function() {
	var menuItems = null;
	var content = null;

	AJAX("content-template.html", "GET", function(contentData) {
		content = contentData;

		AJAX("tree-menu.json", "GET", function(data) {
			menuItems = JSON.parse(data);

			var menuHolder = document.getElementById("menu");
			var contentHolder = document.getElementById("content");
			var menuUL = buildMenu(menuHolder, menuItems);

			menuHolder.firstElementChild.addEventListener("click", function(e) {
				e.preventDefault();
				menuUL.style.display = menuUL.style.display == "block" ? "none" : "block";
			});

			document.addEventListener("click", function(e) {
				if (!checkParent(e.target, menuHolder) && menuUL.style.display == "block") {
					menuUL.style.display = "none";
					collapseAll(menuUL);
				}
			});
		});
	});
});

function buildMenu(container, menuItems) {
	var ulElement = document.createElement("ul");

	for (var i = 0; i < menuItems.length; i++) {
		var liElement = document.createElement("li");
		liElement.innerText = menuItems[i].menu;

		liElement.onclick = (function(menuItem) {
			return function () {
				document.title = menuItem.title;
				//contentHolder.innerHTML = contentData.replace("{{content}}", menuItem.content);
			}
		})(menuItems[i]);

		if (menuItems[i].childs && menuItems[i].childs.length) {
			liElement.style.background = "Tomato";
			liElement.style.cursor = "pointer";
			var childUL = buildMenu(liElement, menuItems[i].childs);

			(function(list) {
				liElement.addEventListener("click", function(e) {
					e.stopPropagation();
					list.style.display = list.style.display == "block" ? "none" : "block";
				});
			})(childUL);
		}

		ulElement.appendChild(liElement);
	}

	container.appendChild(ulElement);

	return ulElement;
}

function checkParent(elem, comparer) {
	if (elem != document) {
		if (elem != comparer) {
			return checkParent(elem.parentNode, comparer);
		} else {
			return true;
		}
	} else {
		return false;
	}
}

function collapseAll(list) {
	var uls = list.getElementsByTagName("ul");

	for (var i = 0; i < uls.length; i++) {
		uls[i].style.display = "none";
	}
}