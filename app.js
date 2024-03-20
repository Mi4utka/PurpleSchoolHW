const uni = (arr) => {
  const uniqueArray = [];
  const idsSet = new Set();

  arr.forEach((obj) => {
    if (!idsSet.has(obj.id)) {
      idsSet.add(obj.id);
      uniqueArray.push(obj);
    }
  });

  return uniqueArray;
};
const makeMeUniquePlease = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Вася' },
  { id: 1, name: 'Вася' },
];
console.log(uni(makeMeUniquePlease));
