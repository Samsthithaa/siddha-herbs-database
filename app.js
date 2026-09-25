let herbsData = [];

// DOM Elements
const herbGrid = document.getElementById("herb-grid");
const herbCount = document.getElementById("herb-count");
const searchInput = document.getElementById("search-input");
const tasteFilter = document.getElementById("taste-filter");
const veeriyamFilter = document.getElementById("veeriyam-filter");
const actionFilter = document.getElementById("action-filter");
const resetBtn = document.getElementById("reset-btn");

// Fetch JSON data and initialize
document.addEventListener("DOMContentLoaded", () => {
  fetch("herbs_data_2.json")
    .then((response) => response.json())
    .then((data) => {
      herbsData = data;
      populateFilterOptions(data);
      renderCards(data);
    })
    .catch((error) => console.error("Error loading JSON:", error));

  // Event Listeners for Filters
  searchInput.addEventListener("input", filterData);
  tasteFilter.addEventListener("change", filterData);
  veeriyamFilter.addEventListener("change", filterData);
  actionFilter.addEventListener("change", filterData);
  resetBtn.addEventListener("click", resetFilters);
});

// Render cards dynamically
function renderCards(data) {
  herbGrid.innerHTML = "";
  herbCount.textContent = data.length;

  if (data.length === 0) {
    herbGrid.innerHTML = `
No herbs match your criteria.`;return;}data.forEach((herb) => {const card = document.createElement("div");card.className = "herb-card";card.innerHTML = `#${herb.herb_number || "N/A"}${herb.herb_name} (${herb.tamil_name})${herb.botanical_name}English: ${herb.english_name || "N/A"}Taste (Suvai): ${herb.taste} / ${herb.suvai}Veeriyam: ${herb.veeriyam}Action: ${herb.pharmacological_action}Gunam: ${herb.gunam}`;
herbGrid.appendChild(card);
});}// Extract unique properties to populate drop-down lists dynamicallyfunction populateFilterOptions(data) {const tastes = new Set();const veeriyams = new Set();const actions = new Set();data.forEach((item) => {if (item.taste) {item.taste.split(",").forEach((t) => tastes.add(t.trim()));}if (item.veeriyam) {veeriyams.add(item.veeriyam.trim());}if (item.pharmacological_action) {// Basic splitting for actions in parenthesesitem.pharmacological_action.split(",").forEach((a) => actions.add(a.trim()));}});tastes.forEach((t) => tasteFilter.add(new Option(t, t)));veeriyams.forEach((v) => veeriyamFilter.add(new Option(v, v)));// Populating first 15 key actions to keep filter cleanArray.from(actions).slice(0, 20).forEach((a) => actionFilter.add(new Option(a, a)));}// Multi-attribute Filter Logicfunction filterData() {const search = searchInput.value.toLowerCase();const selectedTaste = tasteFilter.value;const selectedVeeriyam = veeriyamFilter.value;const selectedAction = actionFilter.value;const filtered = herbsData.filter((herb) => {const matchesSearch =herb.herb_name.toLowerCase().includes(search) ||herb.tamil_name.includes(search) ||herb.botanical_name.toLowerCase().includes(search) ||(herb.english_name && herb.english_name.toLowerCase().includes(search));const matchesTaste = !selectedTaste || (herb.taste && herb.taste.includes(selectedTaste));
const matchesVeeriyam = !selectedVeeriyam || herb.veeriyam.includes(selectedVeeriyam);
const matchesAction =
  !selectedAction || (herb.pharmacological_action && herb.pharmacological_action.includes(selectedAction));

return matchesSearch && matchesTaste && matchesVeeriyam && matchesAction;
});renderCards(filtered);}function resetFilters() {searchInput.value = "";tasteFilter.value = "";veeriyamFilter.value = "";actionFilter.value = "";renderCards(herbsData);}
