const staircase = (n: number) => {
  let count: number = n;
  let spacing: string = ' ';
  let hash: string = '#';

  for (let j = 0; j < n; j++) {
    console.log(spacing.repeat(count - 1) + hash.repeat(j + 1));
    count--;
  }
};

staircase(100);
