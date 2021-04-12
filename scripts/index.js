const execa = require('execa')

execa.command('lerna exec --scope reveal -- yarn dev', {
  stdio: 'inherit'
})
execa.command('lerna exec --scope creator -- yarn dev', {
  stdio: 'inherit'
})
execa.command('lerna exec --scope server -- yarn dev', {
  stdio: 'inherit'
})
