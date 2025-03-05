// Har bir jamoa uchun ballarni kiritish
const scores = [
    {name: "1-24 guruhi", tur1: 3, tur2: 2.5, tur3: 5, tur4: 0}, // Jamoa 1
    {name: "2-24 guruhi", tur1: 4, tur2: 5, tur3: 6.5, tur4: 0}, // Jamoa 2
    {name: "3-24 guruhi", tur1: 3, tur2: 5.5, tur3: 6, tur4: 0}, // Jamoa 3
    {name: "4-24 guruhi", tur1: 4, tur2: 2, tur3: 6, tur4: 0}, // Jamoa 4
    {name: "5-24 guruhi", tur1: 4, tur2: 5, tur3: 4.5, tur4: 0}, // Jamoa 5
    {name: "2-23 guruhi", tur1: 4, tur2: 3.5, tur3: 5.5, tur4: 0}, // Jamoa 6
    {name: "3-23 guruhi", tur1: 6, tur2: 4.5, tur3: 6, tur4: 0}, // Jamoa 7
    {name: "4-23 guruhi", tur1: 4, tur2: 4.5, tur3: 6, tur4: 0}, // Jamoa 8
  ];

  // Har bir jamoa uchun ballarni jadvalga joylashtirish
  scores.forEach((score, index) => {
    const total = score.tur1 + score.tur2 + score.tur3 + score.tur4;

    // Jamoaning ballarini jadvalga joylashtirish
    updateMatchScore(`score${index + 1}-1`, score.tur1);
    updateMatchScore(`score${index + 1}-2`, score.tur2);
    updateMatchScore(`score${index + 1}-3`, score.tur3);
    updateMatchScore(`score${index + 1}-4`, score.tur4);
    updateMatchScore(`total${index + 1}`, total);
  });
document.getElementById("startButton").addEventListener("click", function() {
  
    // Jadvalni peshqadamlar bo'yicha tartiblash
    sortTable();
  });
  
  // Yig'indi ballarni hisoblash va jadvalga joylashtirish
  function updateMatchScore(cellId, score) {
    const cell = document.getElementById(cellId);
    cell.textContent = score;
  }
  
  // Jadvalni tartiblash (Peshqadamlar tugmasi bosilganda)
  function sortTable() {
    const rows = Array.from(document.querySelectorAll("#matches tr"));
    rows.sort((rowA, rowB) => {
      const totalA = parseInt(rowA.cells[5].textContent, 10);
      const totalB = parseInt(rowB.cells[5].textContent, 10);
      return totalB - totalA;
    });
  
    const tableBody = document.getElementById("matches");
    rows.forEach((row, index) => {
      tableBody.appendChild(row);
    });
  
    // Eng yuqori 3 o'rinlarni ajratib ko'rsatish
    // for (let i = 0; i < 3; i++) {
    //   rows[i].classList.add("top-three");
    // }
    rows[2].classList.add("top-three");
    rows[1].classList.add("top-two");
    rows[0].classList.add("top-one");
  }
  
