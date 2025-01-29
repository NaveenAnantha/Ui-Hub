const data = [
  { "count": 1708715, "name": "peter", "gender": "male", "probability": 0.86 },
  { "count": 1721917, "name": "john", "gender": "female", "probability": 0.93 },
  { "count": 810660, "name": "mary", "gender": "male", "probability": 0.88 },
  { "count": 132002, "name": "linda", "gender": "female", "probability": 0.95 },
  { "count": 1060722, "name": "james", "gender": "female", "probability": 0.98 },
  { "count": 1335177, "name": "robert", "gender": "female", "probability": 0.87 },
  { "count": 1124279, "name": "patricia", "gender": "male", "probability": 0.86 },
  { "count": 177494, "name": "jennifer", "gender": "male", "probability": 0.95 },
  { "count": 1600478, "name": "michael", "gender": "male", "probability": 0.93 },
  { "count": 1884236, "name": "william", "gender": "male", "probability": 0.82 },
  { "count": 33063, "name": "elizabeth", "gender": "female", "probability": 0.90 },
  { "count": 1814481, "name": "barbara", "gender": "female", "probability": 0.97 },
  { "count": 1780992, "name": "susan", "gender": "male", "probability": 0.89 },
  { "count": 673000, "name": "joseph", "gender": "female", "probability": 0.84 },
  { "count": 277001, "name": "thomas", "gender": "female", "probability": 0.91 },
  { "count": 1603321, "name": "charles", "gender": "male", "probability": 0.93 },
  { "count": 1477559, "name": "christopher", "gender": "male", "probability": 0.99 },
  { "count": 923109, "name": "margaret", "gender": "female", "probability": 0.97 },
  { "count": 1282684, "name": "richard", "gender": "male", "probability": 0.91 },
  { "count": 1591650, "name": "david", "gender": "female", "probability": 0.87 },
  { "count": 178568, "name": "dorothy", "gender": "female", "probability": 0.89 },
  { "count": 311551, "name": "sarah", "gender": "male", "probability": 0.96 },
  { "count": 1999190, "name": "karen", "gender": "female", "probability": 0.87 },
  { "count": 1570227, "name": "nancy", "gender": "male", "probability": 0.85 },
  { "count": 894283, "name": "daniel", "gender": "male", "probability": 0.89 },
  { "count": 401585, "name": "mark", "gender": "male", "probability": 0.85 },
  { "count": 1285388, "name": "steven", "gender": "female", "probability": 0.82 },
  { "count": 1849437, "name": "paul", "gender": "female", "probability": 0.95 },
  { "count": 473435, "name": "andrew", "gender": "male", "probability": 0.82 },
  { "count": 1419097, "name": "kenneth", "gender": "male", "probability": 0.82 },
  { "count": 923217, "name": "george", "gender": "male", "probability": 0.99 },
  { "count": 1931670, "name": "joshua", "gender": "female", "probability": 0.91 },
  { "count": 1556984, "name": "kevin", "gender": "female", "probability": 0.83 },
  { "count": 268129, "name": "brian", "gender": "female", "probability": 0.93 },
  { "count": 1022094, "name": "edward", "gender": "male", "probability": 0.97 },
  { "count": 1376880, "name": "ronald", "gender": "female", "probability": 0.93 },
  { "count": 258585, "name": "kimberly", "gender": "male", "probability": 0.99 },
  { "count": 394962, "name": "jessica", "gender": "female", "probability": 0.90 },
  { "count": 1837015, "name": "emily", "gender": "female", "probability": 0.89 },
  { "count": 272406, "name": "donald", "gender": "female", "probability": 0.94 },
  { "count": 156117, "name": "helen", "gender": "male", "probability": 0.86 },
  { "count": 606619, "name": "anthony", "gender": "female", "probability": 0.85 },
  { "count": 371830, "name": "stephanie", "gender": "female", "probability": 0.96 },
  { "count": 1701581, "name": "samantha", "gender": "male", "probability": 0.81 },
  { "count": 314049, "name": "jacob", "gender": "female", "probability": 0.86 },
  { "count": 1859653, "name": "ryan", "gender": "female", "probability": 0.87 },
  { "count": 1136543, "name": "olivia", "gender": "female", "probability": 0.84 },
  { "count": 410203, "name": "alexis", "gender": "male", "probability": 0.84 },
  { "count": 1466954, "name": "ethan", "gender": "male", "probability": 0.84 },
  { "count": 212346, "name": "grace", "gender": "male", "probability": 0.99 }
];

const data1 = Object.keys(data[0]);

const generate = document.getElementById('generate')
const select2 = document.getElementById('numberDropdown')
const rows = document.getElementById('rows')

rows.addEventListener('change', minato)
select2.addEventListener('change', minato)

document.getElementById('numberDropdown').addEventListener('change', minato);
document.getElementById('rows').addEventListener('change', minato);

function minato() {
  let select1 = select2.value
  const rowsPerPage =Number(rows.value)
  if(!select1 && !rowsPerPage){
    select1="select"
    rowsPerPage=10
  }
  if (select1 === "select") {
    let currentPage = 1;
    function displayTable(page) {
      const startIndex = (page - 1) * rowsPerPage;
      const endIndex = startIndex + rowsPerPage;
      const slicedData = data.slice(startIndex, endIndex);
      let tableHTML = "<table><thead><tr>";

      data1.forEach(function (header) {
        tableHTML += `<th>${header}</th>`;
      });

      tableHTML += "<th>Status</th></tr></thead><tbody>";

      slicedData.forEach(rowData => {
        let prob = 0;
        tableHTML += "<tr>";
        for (let key in rowData) {
          tableHTML += `<td>${rowData[key]}</td>`;
          prob = rowData.probability
        }

        if (prob < 0.85) {
          tableHTML += '<td><i class="bi bi-clock"></i></i></td></tr>';
        }
        else if (prob < 0.90 && prob > 0.85) {
          tableHTML += '<td><i class="bi bi-arrow-clockwise"></i></td></tr>';
        }
        else if (prob > 0.90 && prob < 0.95) {
          tableHTML += '<td><i class="bi bi-clock-history"></i></i></td></tr>';
        }
        else {
          tableHTML += '<td><i class="bi bi-check-circle"></i></td></tr>';
        }
      });
      tableHTML += "</tbody></table>";
      document.getElementById("demo").innerHTML = tableHTML;
      console.log(3);

      updatePagination(page);

    }
    document.getElementById("search").addEventListener("change", function () {
      searchpage(1)
    });

    function searchpage(page) {
      const startIndex = (page - 1) * rowsPerPage;
      const endIndex = startIndex + rowsPerPage;
      const searchValue = document.getElementById("search").value.toLowerCase();
      const results = data.filter((item) => {
        return item.name.toLowerCase().includes(searchValue) ||
          item.count.toString().toLowerCase().includes(searchValue) ||
          item.gender.toLowerCase().includes(searchValue) ||
          item.probability.toString().toLowerCase().includes(searchValue);
      });
      const slicedData = results.slice(startIndex, endIndex)
      if (results.length > 0) {
        let tableHTML = "<table><thead><tr>";

        data1.forEach(function (header) {
          tableHTML += `<th>${header}</th>`;
        });

        tableHTML += "<th>Status</th></tr></thead><tbody>";

        slicedData.forEach((rowData) => {
          let prob = 0;
          tableHTML += "<tr>";
          for (let key in rowData) {
            tableHTML += `<td>${rowData[key]}</td>`;
            prob = rowData.probability
          }
          if (prob < 0.85) {
            tableHTML += '<td><i class="bi bi-clock"></i></i></td></tr>';
          }
          else if (prob < 0.90 && prob > 0.85) {
            tableHTML += '<td><i class="bi bi-arrow-clockwise"></i></td></tr>';
          }
          else if (prob > 0.90 && prob < 0.95) {
            tableHTML += '<td><i class="bi bi-clock-history"></i></i></td></tr>';
          }
          else {
            tableHTML += '<td><i class="bi bi-check-circle"></i></td></tr>';

          }
        });

        tableHTML += "</tbody></table>";
        document.getElementById("demo").innerHTML = tableHTML;
      }
      updatePagination1(page, results.length);
    }

    function updatePagination(currentPage) {
      const pageCount = Math.ceil(data.length / rowsPerPage);
      const paginationContainer = document.getElementById("pagination");
      paginationContainer.innerHTML = "";

      for (let i = 1; i <= pageCount; i++) {
        const pageLink = document.createElement("a");
        pageLink.href = "#";
        pageLink.innerText = i;
        pageLink.onclick = function () {
          console.log(i);
          displayTable(i);
        };
        if (i === currentPage) {
          pageLink.style.fontWeight = "bold";
        }
        paginationContainer.appendChild(pageLink);
        paginationContainer.appendChild(document.createTextNode(" "));
      }
    }
    function updatePagination1(currentPage, datalength) {
      const pageCount = Math.ceil(datalength / rowsPerPage);
      const paginationContainer = document.getElementById("pagination");
      paginationContainer.innerHTML = "";

      for (let i = 1; i <= pageCount; i++) {
        const pageLink = document.createElement("a");
        pageLink.href = "#";
        pageLink.innerText = i;
        pageLink.onclick = function () {
          searchpage(i);
        };
        if (i === currentPage) {
          pageLink.style.fontWeight = "bold";
        }
        paginationContainer.appendChild(pageLink);
        paginationContainer.appendChild(document.createTextNode(" "));
      }
    }
    displayTable(currentPage);
  }
  else {
    let tableHTML = "<table><thead><tr>";

    data1.forEach(function (header) {
      tableHTML += `<th>${header}</th>`;
    });

    tableHTML += "<th>Status</th></tr></thead><tbody>";
    let prob = 0;
    tableHTML += "<tr>";
    let object = data.find(o => o.name === select1);
    for (key in object) {
      tableHTML += `<td>${object[key]}</td>`;
      prob = object.probability
    }
    if (prob < 0.85) {
      tableHTML += '<td><i class="bi bi-clock"></i></i></td></tr>';
    }
    else if (prob < 0.90 && prob > 0.85) {
      tableHTML += '<td><i class="bi bi-arrow-clockwise"></i></td></tr>';
    }
    else if (prob > 0.90 && prob < 0.95) {
      tableHTML += '<td><i class="bi bi-clock-history"></i></i></td></tr>';
    }
    else {
      tableHTML += '<td><i class="bi bi-check-circle"></i></td></tr>';
    }

    tableHTML += "</tbody></table>";
    document.getElementById("demo").innerHTML = tableHTML;
  }
}
window.onload = function() {
  minato();
};
