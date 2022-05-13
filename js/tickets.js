const tickets = [{
            source: "JPN",
            destination: "PHL"
      },
      {
            source: "BRA",
            destination: "UAE"
      },
      {
            source: "USA",
            destination: "BRA"
      },
      {
            source: "UAE",
            destination: "JPN"
      }
];

function getSortedTickets(arrayTickets) {

      let sortedTickets = [];

      function getFirstAndLastTickets() {

            let sourceArr = [];
            let destinationArr = [];

            for (let i = 0; i < arrayTickets.length; i++) {
                  sourceArr[i] = arrayTickets[i].source;
                  destinationArr[i] = arrayTickets[i].destination;
            }

            let first = sourceArr.filter((s) => destinationArr.indexOf(s) === -1);
            let last = destinationArr.filter((d) => sourceArr.indexOf(d) === -1);

            return [first[0], last[0]];
      }

      for (let i = 0; i < arrayTickets.length; i++) {

            let firstTicketWasFound = false;

            if (getFirstAndLastTickets()[0] === arrayTickets[i].source || firstTicketWasFound) {

                  if (!firstTicketWasFound) {
                        sortedTickets.push(arrayTickets[i].source, arrayTickets[i].destination);
                        firstTicketWasFound = true;
                  }

                  for (let j = 0; j < arrayTickets.length; j++) {

                        if (arrayTickets[i].destination === arrayTickets[j].source) {
                              sortedTickets.push(arrayTickets[j].destination);
                              i = j;
                        }
                  }
            }


      }

      sortedTickets.push(getFirstAndLastTickets()[1]);

      return sortedTickets.toString();
}

// result: "USA, BRA, UAE, JPN, PHL"
console.log(getSortedTickets(tickets));