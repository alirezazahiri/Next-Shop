const truncate = (title) => {
  const splittedString = title.split(" ");
  return `${splittedString[0]} ${splittedString[1]}`;
};

export default truncate