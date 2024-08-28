function ExpBox({ title, date, description }) {
  return (
    <div className="flex flex-col bg-mainColor30 bg-opacity-15 rounded-3xl gap-2 p-6 m-2">
      <p className="text-mainColor30">{date}</p>
      <p className="text-mainColor10 text-xl">{title}</p>
      <p className="text-mainColor30">{description}</p>
    </div>
  );
}
export default ExpBox;