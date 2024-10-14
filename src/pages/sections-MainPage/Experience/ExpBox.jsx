function ExpBox({ title, date, description }) {
  return (
    <div className="flex flex-col bg-mainColor30 bg-opacity-5 rounded-3xl gap-2 p-6 m-6">
      <p className="text-mainColor30">{date}</p>
      <p className="text-mainColor10 text-3xl">{title}</p>
      <p className="text-mainColor30">{description}</p>
    </div>
  );
}
export default ExpBox;