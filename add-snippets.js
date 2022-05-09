const fs = require('fs');
const os = require('os');
const snippets = require('./snippets.json');
const baseDir = '/AppData/Roaming/Code/User/snippets/';

for (let reg in snippets) {
    const item = snippets[reg];
    const languages = item.scope.split(',');
    for (var i = 0; i < languages.length; i++) {
        var m;
        try {
            m = JSON.parse(fs.readFileSync(os.homedir() + baseDir + languages[i].trim() + '.json').toString());
            m[reg] = item;
        } catch (e) {
            m = {};
            m[reg] = item;
         }
        fs.writeFile(os.homedir() + baseDir + languages[i].trim() + '.json', JSON.stringify(m), () => {});
    }
}