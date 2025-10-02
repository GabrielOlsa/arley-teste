function soma() {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
  
    fetch(`/soma?a=${a}&b=${b}`)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        document.getElementById("resposta").innerText = data.r;
      });
  }
  function subtrair() {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
  
    fetch(`/subtrair?a=${a}&b=${b}`)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        document.getElementById("resposta").innerText = data.r;
      });
  }
  function dividir() {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
  
    fetch(`/dividir?a=${a}&b=${b}`)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        document.getElementById("resposta").innerText = data.r;
      });
  }
  function multiplicacao() {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
  
    fetch(`/multiplicacao?a=${a}&b=${b}`)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        document.getElementById("resposta").innerText = data.r;
      });
  }