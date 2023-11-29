import { data } from "./CHALLENGE_04.data";

const getValidChecksumFiles = (data: string) => {
  return data
    .split("\n")
    .map((line) => line.split("-"))
    .filter(([filename, checksum]) => {
      const charCount = Array.from(filename)
        .reduce((acum, curr) => {
          const position = acum.findIndex(([char]) => curr === char);

          if (position < 0) {
            acum.push([curr, 1]);
          } else {
            acum[position][1]++;
          }

          return acum;
        }, [] as [string, number][])
        .filter(([_, count]) => count === 1);

      return Array.from(checksum).every((checkChar) => {
        const [char] = charCount.shift() ?? [];

        return char === checkChar;
      });
    });
};

// Get valid checksum
console.log(getValidChecksumFiles(data)[32]);
