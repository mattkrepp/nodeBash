const pwd = require('./pwd.js');
const ls = require('./ls.js');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if(cmd === 'pwd'){
        pwd();
    }
    else if(cmd === 'ls'){
        ls();
    }
    // else if()
    // else{
    // process.stdout.write('You typed: ' + cmd);
    // process.stdout.write('\nprompt > ');
    // }

});