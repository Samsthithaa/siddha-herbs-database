let herbsData = [];

// DOM Elements
const herbGrid = document.getElementById("herb-grid");
const herbCount = document.getElementById("herb-count");
const searchInput = document.getElementById("search-input");
const tasteFilter = document.getElementById("taste-filter");
const veeriyamFilter = document.getElementById("veeriyam-filter");
const actionFilter = document.getElementById("action-filter");
const resetBtn = document.getElementById("reset-btn");

// Initialize when page loads
document.addEventListener("DOMContentLoaded", () => {
  fetch("herbs_data_2.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      herbsData = data;

      populateFilterOptions(data);
      renderCards(data);
    })
    .catch((error) => {
      console.error("Error loading JSON:", error);

      herbGrid.innerHTML = `
        <div class="error-message">
          Unable to load herb data.
        </div>
      `;
    });

  // Event listeners
  searchInput.addEventListener("input", filterData);
  tasteFilter.addEventListener("change", filterData);
  veeriyamFilter.addEventListener("change", filterData);
  actionFilter.addEventListener("change", filterData);
  resetBtn.addEventListener("click", resetFilters);
});


// ==========================================
// RENDER HERB CARDS
// ==========================================

function renderCards(data) {
  herbGrid.innerHTML = "";

  herbCount.textContent = data.length;

  if (data.length === 0) {
    herbGrid.innerHTML = `
      <div class="no-results">
        No herbs match your criteria.
      </div>
    `;
    return;
  }

  data.forEach((herb) => {
    const card = document.createElement("div");

    card.className = "herb-card";

    card.innerHTML = `
      <div class="herb-number">
        #${herb.herb_number || "N/A"}
      </div>

      <h3 class="herb-name">
        ${herb.herb_name || "Unknown Herb"}
      </h3>

      <p class="tamil-name">
        ${herb.tamil_name || "N/A"}
      </p>

      <p class="botanical-name">
        <em>${herb.botanical_name || "N/A"}</em>
      </p>

      <p>
        <strong>English:</strong>
        ${herb.english_name || "N/A"}
      </p>

      <p>
        <strong>Taste (Suvai):</strong>
        ${herb.taste || herb.suvai || "N/A"}
      </p>

      <p>
        <strong>Veeriyam:</strong>
        ${herb.veeriyam || "N/A"}
      </p>

      <p>
        <strong>Action:</strong>
        ${herb.pharmacological_action || "N/A"}
      </p>

      <p>
        <strong>Gunam:</strong>
        ${herb.gunam || "N/A"}
      </p>
    `;

    herbGrid.appendChild(card);
  });
}


// ==========================================
// POPULATE FILTER DROPDOWNS
// ==========================================

function populateFilterOptions(data) {

  const tastes = new Set();
  const veeriyams = new Set();
  const actions = new Set();

  data.forEach((item) => {

    // Taste
    if (item.taste) {
      item.taste
        .split(",")
        .forEach((taste) => {
          const value = taste.trim();

          if (value) {
            tastes.add(value);
          }
        });
    }

    // Veeriyam
    if (item.veeriyam) {
      const value = item.veeriyam.trim();

      if (value) {
        veeriyams.add(value);
      }
    }

    // Pharmacological action
    if (item.pharmacological_action) {
      item.pharmacological_action
        .split(",")
        .forEach((action) => {
          const value = action.trim();

          if (value) {
            actions.add(value);
          }
        });
    }
  });


  // Add taste options
  [...tastes]
    .sort()
    .forEach((taste) => {
      tasteFilter.add(new Option(taste, taste));
    });


  // Add veeriyam options
  [...veeriyams]
    .sort()
    .forEach((veeriyam) => {
      veeriyamFilter.add(new Option(veeriyam, veeriyam));
    });


  // Add first 20 actions
  [...actions]
    .sort()
    .slice(0, 20)
    .forEach((action) => {
      actionFilter.add(new Option(action, action));
    });
}


// ==========================================
// FILTER DATA
// ==========================================

function filterData() {

  const search = searchInput.value
    .trim()
    .toLowerCase();

  const selectedTaste = tasteFilter.value;
  const selectedVeeriyam = veeriyamFilter.value;
  const selectedAction = actionFilter.value;


  const filtered = herbsData.filter((herb) => {

    // Search across multiple fields
    const matchesSearch =
      !search ||

      (herb.herb_name &&
        herb.herb_name.toLowerCase().includes(search)) ||

      (herb.tamil_name &&
        herb.tamil_name.toLowerCase().includes(search)) ||

      (herb.botanical_name &&
        herb.botanical_name.toLowerCase().includes(search)) ||

      (herb.english_name &&
        herb.english_name.toLowerCase().includes(search));


    // Taste filter
    const matchesTaste =
      !selectedTaste ||
      (
        herb.taste &&
        herb.taste
          .split(",")
          .map((t) => t.trim())
          .includes(selectedTaste)
      );


    // Veeriyam filter
    const matchesVeeriyam =
      !selectedVeeriyam ||
      (
        herb.veeriyam &&
        herb.veeriyam
          .toLowerCase()
          .includes(selectedVeeriyam.toLowerCase())
      );


    // Pharmacological action filter
    const matchesAction =
      !selectedAction ||
      (
        herb.pharmacological_action &&
        herb.pharmacological_action
          .toLowerCase()
          .includes(selectedAction.toLowerCase())
      );


    return (
      matchesSearch &&
      matchesTaste &&
      matchesVeeriyam &&
      matchesAction
    );
  });


  renderCards(filtered);
}


// ==========================================
// RESET FILTERS
// ==========================================

function resetFilters() {

  searchInput.value = "";
  tasteFilter.value = "";
  veeriyamFilter.value = "";
  actionFilter.value = "";

  renderCards(herbsData);
}
