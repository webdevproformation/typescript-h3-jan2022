// npm init --yes
// npm install ora
// npm install -D 
// tsc --init
// 
import ora from 'ora';

const spinner = ora('Loading unicorns').start();

setTimeout(() => {
  spinner.color = 'yellow';
  spinner.text = 'Loading rainbows';
}, 1000);