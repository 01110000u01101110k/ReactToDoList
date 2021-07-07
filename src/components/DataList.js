import { useMainContext } from "../store/mainStore";

const DataList = () => {
  const { data, setData } = useMainContext();
  const countDoneNotes = data.filter((item) => item.isDone);

  const handleSetValue = (item) => {
    let newArr = data.map((element) =>
      element.note === item.note
        ? Object.assign({}, element, { isDone: !element.isDone })
        : element
    );
    setData((prev) => (prev = newArr));
  };
  return (
    <>
      {countDoneNotes.length} / {data.length}
      {data.map((item) => (
        <div className="noteWrap" key={item.note}>
          <input
            type="checkbox"
            className="checkbox"
            onChange={() => handleSetValue(item)}
          />
          <p className="noteItem">{item.note}</p>
          <p className={item.isDone ? "noteDone" : "noteNotDone"}>
            {item.isDone ? "Done" : "Not Done"}
          </p>
        </div>
      ))}
    </>
  );
};

export default DataList;
