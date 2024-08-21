import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const InputValue = async (message: string): Promise<string | void> => {
  const response = await rl.question(message, (answer) => {
    return answer;
  });
  return response;
};
export { InputValue };
