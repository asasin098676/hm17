import React, { useState, useEffect } from "react";
import Contract from "../Contract/Contract";
import "../Contracts/Contracts.css";

const Contracts = () => {
  const contacts = [
    {
      firstName: "Барней",
      lastName: "Стинсовський",
      phone: "+380956319521",
      gender: "male",
    },
    {
      firstName: "Робін",
      lastName: "Щербатська",
      phone: "+380931460123",
      gender: "female",
    },
    {
      firstName: "Анонімний",
      lastName: "Анонімус",
      phone: "+380666666666",
    },
    {
      firstName: "Лілія",
      lastName: "Олдровна",
      phone: "+380504691254",
      gender: "female",
    },
    {
      firstName: "Маршен",
      lastName: "Еріксонян",
      phone: "+380739432123",
      gender: "male",
    },
    {
      firstName: "Теодор",
      lastName: "Мотсбес",
      phone: "+380956319521",
      gender: "male",
    },
  ];
  let [contactList, setContacts] = useState(contacts);
  const [checkedMale, setCheckedMale] = useState(false);
  const [checkedFemale, setCheckedFemale] = useState(false);
  let [search, setSearch] = useState("");

  function searchChangeInut(event) {
    setSearch(event.target.value);
  }
  useEffect(() => {
    setContacts(
      contacts
        .map((elem) => {
          if (
            Object.values(elem).filter((val) =>
              val.toLowerCase().includes(search)
            ).length > 0
          ) {
            if ((checkedFemale && elem.gender === "female") || !elem.gender) {
              return elem;
            }
            if ((checkedMale && elem.gender === "male") || !elem.gender) {
              return elem;
            }
          }
        })
        .filter((val) => val !== undefined)
    );
  }, [search, checkedFemale, checkedMale]);

  return (
    <div>
      <div className="navigation">
        <input className="searcInp" onChange={searchChangeInut}></input>
        <div className="checkedRender">
          <input
            type="checkbox"
            value={checkedMale}
            onChange={() => setCheckedMale((checkedMale) => !checkedMale)}
          />
          {checkedMale ? "Male" : "notMale"}
          <input
            type="checkbox"
            value={checkedFemale}
            onChange={() => setCheckedFemale((checkedFemale) => !checkedFemale)}
          />
          {checkedFemale ? "female" : "notFemale"}
        </div>
      </div>
      <div>
        {contactList.map((element, i) => {
          return <Contract data={element} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Contracts;
