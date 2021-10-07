import chalk from "chalk";
//need to replace this with a logging module but will do for now
export const logs = {
  mw_success: chalk.bgGreen.black(" - Middleware has been loaded "),
  mw_fail: chalk.bgRed.black(" - Unable to load middleware "),
  ctr_success: chalk.bgGreen.black(" - Controllers have been loaded "),
  ctr_fail: chalk.bgRed.black(" - Unable to load controllers "),
  listening: (port) =>
    chalk.bgBlue.black(` - Server is listening on port ${port} `),
};
