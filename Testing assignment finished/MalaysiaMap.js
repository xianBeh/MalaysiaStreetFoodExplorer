//link state to other webpages
document.querySelectorAll("path").forEach(state => {
  state.addEventListener("click", () => {
    switch (state.id) {
      case "MY01": //johor
        window.top.location.href = "murtabak.html";
        break;
      case "MY04": //melaka
        window.top.location.href = "cendol.html";
        break;
      case "MY07": //pulau pinang
        window.top.location.href = "char-kway-teow.html";
        break;
      case "MY08": //perak
        window.top.location.href = "ramly-burger.html";
        break;
      case "MY10": //selangor
        window.top.location.href = "nasi-lemak.html";
        break;
      case "MY11": //Terengganu
        window.top.location.href = "keropok-lekor.html";
        break;
      case "MY14": //Kuala Lumpur
        window.top.location.href = "roti-canai.html";
        break;

      default:
        alert("No popular foods linked for this state. ");
    }
  });
});