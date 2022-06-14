const ListItem = (props) => {
  const { listItem } = props;
  console.log(props);
  return <li>{listItem.title}</li>;
};

export default ListItem;
