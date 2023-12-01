import { data } from "./CHALLENGE_05.data";

const getInvalidUsers = (data: string): string => {
  const alphaNumRegexp = /^[0-9a-z]+$/i;
  const emailRegexp = /^[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/i;

  return data
    .split("\n")
    .map((line) => line.split(","))
    .filter(([id, username, email, age, location]) => {
      return (
        !alphaNumRegexp.test(id) ||
        !alphaNumRegexp.test(username) ||
        !emailRegexp.test(email) ||
        !Number.isInteger(parseInt(age)) ||
        !location.trim()
      );
    })
    .map(([_id, username]) => username[0])
    .join("");
};

// Get valid checksum
console.log(getInvalidUsers(data));
