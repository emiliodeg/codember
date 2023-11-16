const input =
  "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&";

interface Acum {
  count: number;
  result: string;
}

type charOperator = "&" | "#" | "@" | "*";

const operators: Record<charOperator, (acum: Acum) => void> = {
  "&": (acum: Acum) => (acum.result = `${acum.result}${acum.count}`),
  "#": (acum: Acum) => (acum.count += 1),
  "@": (acum: Acum) => (acum.count -= 1),
  "*": (acum: Acum) => (acum.count **= 2),
};

const parser = (input: string): string => {
  return input
    .split("")
    .filter((char) => operators.hasOwnProperty(char))
    .reduce(
      (acum, curr) => {
        operators[curr](acum);

        return acum;
      },
      { count: 0, result: "" }
    ).result;
};

console.log(parser(input));
