const execa = require('execa')

!(async () => {
  await execa
    .command('lerna exec --scope creator -- yarn dev')
    .stdout?.pipe(process.stdout)
  await execa
    .command('lerna exec --scope reveal -- yarn dev')
    .stdout?.pipe(process.stdout)
  await execa
    .command('lerna exec --scope server -- yarn dev')
    .stdout?.pipe(process.stdout)
  // await execa.command('lerna exec --scope creator -- yarn dev')
  // await execa.command('lerna exec --scope reveal -- yarn dev')
  // await execa.command('lerna exec --scope server -- yarn dev')
})()
