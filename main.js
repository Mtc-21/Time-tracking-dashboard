  const link = document.querySelectorAll(".navbar a");
    const card = document.querySelectorAll(".card");
    const title = document.querySelector(".title");
    const description = document.querySelector(".title");
    const lastWeek = document.querySelector(".week");
    let search = "weekly";
    const data = [
      {
        "title": "Work",
        "timeframes": {
          "daily": {
            "current": 5,
            "previous": 7
          },
          "weekly": {
            "current": 32,
            "previous": 36
          },
          "monthly": {
            "current": 103,
            "previous": 128
          }
        }
      },
      {
        "title": "Play",
        "timeframes": {
          "daily": {
            "current": 1,
            "previous": 2
          },
          "weekly": {
            "current": 10,
            "previous": 8
          },
          "monthly": {
            "current": 23,
            "previous": 29
          }
        }
      },
      {
        "title": "Study",
        "timeframes": {
          "daily": {
            "current": 0,
            "previous": 1
          },
          "weekly": {
            "current": 4,
            "previous": 7
          },
          "monthly": {
            "current": 13,
            "previous": 19
          }
        }
      },
      {
        "title": "Exercise",
        "timeframes": {
          "daily": {
            "current": 1,
            "previous": 1
          },
          "weekly": {
            "current": 4,
            "previous": 5
          },
          "monthly": {
            "current": 11,
            "previous": 18
          }
        }
      },
      {
        "title": "Social",
        "timeframes": {
          "daily": {
            "current": 1,
            "previous": 3
          },
          "weekly": {
            "current": 5,
            "previous": 10
          },
          "monthly": {
            "current": 21,
            "previous": 23
          }
        }
      },
      {
        "title": "Self Care",
        "timeframes": {
          "daily": {
            "current": 0,
            "previous": 1
          },
          "weekly": {
            "current": 2,
            "previous": 2
          },
          "monthly": {
            "current": 7,
            "previous": 11
          }
        }
      }
    ];

    function change(search) {
      for (let i = 0; i < card.length; i++) {
        if (parseInt(card[i].getAttribute("data-id")) == i) {
          card[i].children[2].textContent = data[i].timeframes[search].current + "hrs";
          card[i].children[3].textContent = "Last Week -" + data[i].timeframes[search].previous + "hrs";
        }
      }
    }

    Array.from(link).forEach(link => {
      link.addEventListener("click", () => {
        search = link.textContent.toLocaleLowerCase();
        change(search)
      });
    });
