export const map = (items, callback) => {
  const mapping = (items, callback, index, newItems) => {
    if (index === items.length) {
      return newItems;
    }

    const newValue = callback(items[index]);

    return mapping(items, callback, index + 1, [...newItems, newValue]);
  };

  return mapping(items, callback, 0, []);
};
