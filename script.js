let arr = [
	"Item1", "Item2", "Item3", "Item4", "Item5", 
	"Item6", "Item7", "Item8", "Item9", "Item10"
];

document.addEventListener("DOMContentLoaded", () => {
	const InfiList = document.getElementById("infi-list");

	// ✅ Populate 10 items initially
	InitialTenItems(InfiList);

	// ✅ Add scroll event to list AFTER it's in DOM
	InfiList.addEventListener("scroll", () => {
		if (InfiList.scrollTop + InfiList.clientHeight >= InfiList.scrollHeight) {
			AddTwoItems(InfiList);
		}
	});
});

function InitialTenItems(container) {
	arr.forEach((item) => {
		const li = document.createElement("li");
		li.textContent = item;
		container.appendChild(li);
	});
}

function AddTwoItems(container) {
	// You can pick from arr or generate dynamically
	for (let i = 0; i < 2; i++) {
		const li = document.createElement("li");
		li.textContent = "New Item " + Math.floor(Math.random() * 1000);
		container.appendChild(li);
	}
}
