function Name() {
  const namesArray = [
    {
      id: "123nsdfkj",
      name: "akash",
      age: "12",
    },
    {
      id: "123nsdfkj",
      name: "akash",
      age: "12",
    },
    {
      id: "124nsdfkj",
      name: "akash",
      age: "12",
    },
    {
      id: "123nszfkj",
      name: "akash",
      age: "12",
    },
    {
      id: "123nsbfkj",
      name: "akash",
      age: "12",
    },
  ];
  return namesArray.map((element) => (
    <div
      key={element.id}
      style={{
        width: "100px",
        height: "50px",
        backgroundColor: "lightblue",
        margin: "10px",
      }}
    >
      {element.name}
    </div>
  ));
}

export default Name;
