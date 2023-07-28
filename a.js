const d = require('./curlbody.json');

const found = new Set();
Object.keys(d.dependencies).map(k => {
    const v = d.dependencies[k];
    if (v.requires) {
        Object.keys(v.requires).map(r => {
            if(!d.dependencies[r]) {
                console.log('required item missing',r, 'in', k);
            } else {
                found.add(r);
            }

        })
    }
    return k;
}).filter(k => !found.has(k)).map(k => console.log('unused', k));