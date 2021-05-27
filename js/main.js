let data = {
  "columns": [
    {
      "code": "Острів",
      "name": "Острів",
      "viewState": 0,
      "isFileContent": false,
      "isFileName": false,
      "isPrintable": true,
      "hint": "",
      "dataType": "Text"
    },
    {
      "code": "Локація",
      "name": "Локація",
      "viewState": 0,
      "isFileContent": false,
      "isFileName": false,
      "isPrintable": true,
      "hint": "",
      "dataType": "Text"
    },
    {
      "code": "Текст",
      "name": "Текст",
      "viewState": 0,
      "isFileContent": false,
      "isFileName": false,
      "isPrintable": true,
      "hint": "",
      "dataType": "Text"
    },
    {
      "code": "Дата",
      "name": "Дата",
      "viewState": 0,
      "isFileContent": false,
      "isFileName": false,
      "isPrintable": true,
      "hint": "",
      "dataType": "DateTime"
    },
    {
      "code": "Коментар",
      "name": "Коментар",
      "viewState": 0,
      "isFileContent": false,
      "isFileName": false,
      "isPrintable": true,
      "hint": "",
      "dataType": "Text"
    }
  ],
  "rows": [
    {
      "values": [
        "Труханов",
        "Київ",
        " столиця та найбільше місто України, одне з найбільших і найстаріших міст Європи. Розташований у середній течії Дніпра, у північній Наддніпрянщині. Політичний, соціально-економічний, транспортний та освітньо-науковий центр країни. Окрема адміністративно-територіальна одиниця в складі України й адміністративний центр Київської області. Адміністративно до складу Київської області не входить. Місце розташування центральних органів влади України, іноземних місій, штаб-квартир більшості підприємств і громадських об'єднань, що працюють в Україні.",
        "2020-12-12T00:00:00",
        "Тестове"
      ]
    }
  ]
}



for(let col of data.columns) {
  let head = document.querySelector('.content');
  let headContent = '<div class="card">';
      headContent += `<h4>${col.name}</h4>`;
      headContent += `</div>`;
  head.insertAdjacentHTML('beforeend', headContent);
}
let cards = document.querySelectorAll('.card');
for(let row of data.rows) {
    for(let i = 0; i < cards.length; i++) {
        let value = row.values[i];
        if (data.columns[i].dataType == 'DateTime') {
            let date = new Date(row.values[i]);
            let year = date.getFullYear();
            let month = (1 + date.getMonth()).toString().padStart(2, '0');
            let day = date.getDate().toString().padStart(2, '0');
            value = `${day}.${month}.${year}`;
        } else {
            value = row.values[i];
        }
        cards[i].insertAdjacentHTML('beforeend', `
            <div><h3>${value}</h3></div>
        `);
    }
}

