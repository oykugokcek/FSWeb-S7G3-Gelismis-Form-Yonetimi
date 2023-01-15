function List({ formData }) {
  const renderedFormData = formData.map((personData) => {
    return <div>{personData.name} </div>;
  });
  return <div className="List">{renderedFormData}</div>;
}

export default List;
