import { data } from "./CHALLENGE_03.data";

const getInvalidPassword = (data: string, index: number) => {
  const groups = data.matchAll(/^(?<min>\d+)-(?<max>\d+) (?<char>\w): (?<password>\w+)$/gm);

  const invalidPasswords = Array.from(groups)
    .map(({ groups }) => ({
      min: +groups!.min,
      max: +groups!.max,
      char: groups!.char,
      password: groups!.password,
    }))
    .reduce((acum, curr) => {
      const count = curr.password.split(curr.char).length - 1;

      if (curr.min <= count && count <= curr.max) return acum;

      return [...acum, curr.password];
    }, [] as string[]);

  return invalidPasswords[index];
};

// Challenge password 42sd
console.log(getInvalidPassword(data, 41));

// sudo password
console.log(getInvalidPassword(data, 12));
