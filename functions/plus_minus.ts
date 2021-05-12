const plusMinus = (arr: number[]): void => {
  const n: number = arr.length;
  arr = arr.reduce(
    (acc: number[], el: number) => {
      if (el > 0) acc[0]++;
      else if (el < 0) acc[1]++;
      else acc[2]++;

      return acc;
    },
    [0, 0, 0]
  );

  arr.forEach((el: number) => {
    console.log((el / n).toFixed(6));
  });
};

plusMinus([1, 1, 0, 0, -1]);
