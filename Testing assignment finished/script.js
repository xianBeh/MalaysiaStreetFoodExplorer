//get cookie by name
function getCookie(name) {
  let cookies = document.cookie.split("; ");
  for (let c of cookies) {
    let [key, value] = c.split("=");
    if (key === name) return value;
  }
  return null;
}

document.addEventListener("DOMContentLoaded", function () {
  let authArea = document.getElementById("authArea");

  //get user from different storages
  let user = localStorage.getItem("loggedInUser") || 
             sessionStorage.getItem("loggedInUser") || 
             getCookie("username");

  if (user) {
    authArea.innerHTML = `
      <span class="nav-link text-white">Welcome, ${user}
      <button class="btn btn-sm btn-warning ms-2" id="logoutBtn">Logout</button>
      </span>`;
  }

  // Logout button
  document.addEventListener("click", function (e) {
    if (e.target && e.target.id === "logoutBtn") {
      localStorage.removeItem("loggedInUser");
      sessionStorage.removeItem("loggedInUser");
      document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      location.reload();
    }
  });
});

//API
$("#getMeal").click(function () {
  $.ajax({
    url: "https://www.themealdb.com/api/json/v1/1/random.php", // RESTful API endpoint
    method: "GET",
    success: function (response) {
      let meal = response.meals[0];
      $("#mealResult").html(`
        <h4>${meal.strMeal}</h4>
        <img src="${meal.strMealThumb}" class="img-fluid rounded" style="max-width:300px;">
        <p><strong>Category:</strong> ${meal.strCategory}</p>
        <p><a href="${meal.strYoutube}" target="_blank">Watch Recipe Video</a></p>
      `);
    },
    error: function () {
      $("#mealResult").html("<p class='text-danger'>Error fetching meal data!</p>");
    }
  });
});
