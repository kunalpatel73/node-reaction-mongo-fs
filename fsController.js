const fs = require('fs');
const fsController = {};

['access', 'exists', 'readFile', 'close', 'open', 'read', 'write', 'rename', 'truncate'
    , 'ftruncate', 'rmdir', 'fsync', 'mkdir', 'readdir', 'fstat', 'lstat', 'stat', 'readlink'
    , 'symlink', 'link', 'unlink', 'fchmod', 'lchmod', 'chmod', 'lchown', 'fchown', 'chown'
    , 'utimes', 'futimes', 'writeFile', 'appendFile', 'realpath', 'mkdtemp', 'copyFile']

fsController.truncate = (req, res, next) => {
    fs.truncate(__dirname + '/renamed.js', 100,
        err => {
            console.log("truncate succeed");
            next();
        })
}

fsController.fslink = (req, res, next) => {
    fs.link(__dirname + '/renamed.js', __dirname + '/testFolder',
        err => {
            console.log("link succeed");
            next();
        })
}

fsController.utimes = (req, res, next) => {
    fs.utimes(__dirname + '/renamed.js', Date.now(), Date.now(),
        err => {
            console.log("utimes succeed");
            next();
        })
}

fsController.realpath = (req, res, next) => {
    fs.realpath(__dirname + 'renamed.js',
        err => {
            console.log("realpath succeed");
            next();
        })
}

fsController.copyFile = (req, res, next) => {
    fs.copyFile(__dirname + '/package.json', __dirname + '/renamed.js',
        err => {
            console.log("copyFile succeed");
            next();
        })
}

fsController.chown = (req, res, next) => {
    fs.chown(__dirname + '/renamed.js', 6, 5,
        err => {
            console.log("chown succeed")
            next();
        })
}

fsController.chmod = (req, res, next) => {
    fs.chmod(__dirname + '/renamed.js', 777,
        err => {
            console.log("chmod succeed");
            next();
        })
}

fsController.stat = (req, res, next) => {
    fs.stat(__dirname + '/renamed.js',
        err => {
            console.log("stat succeed");
            next();
        })
}

fsController.exists = (req, res, next) => {
    fs.exists(__dirname + '/index.html',
        exists => {
            console.log("exists succeed");
            console.log(exists)
            next();
        })
}

fsController.access = (req, res, next) => {
    fs.access(__dirname + '/index.html',
        err => {
            console.log("access succeed");
            next();
        })
}

fsController.rename = (req, res, next) => {
    fs.rename(__dirname + '/fileTest.js', __dirname + '/renamed.js',
        err => {
            console.log("rename succeed");
            next();
        })
}

fsController.rmdir = (req, res, next) => {
    fs.rmdir(__dirname + '/temp',
        err => {
            console.log("rmdir succeed");
            next();
        })
}

fsController.mkdir = (req, res, next) => {
    fs.mkdir(__dirname + '/temp',
        err => {
            console.log("mkdir succeed");
            next();
        })
}

fsController.writeFile = (req, res, next) => {
    fs.writeFile(__dirname + "/fileTest.js", JSON.stringify({ name: "eric" }),
        err => {
            console.log("write file succeed");
            next();
        });
}

fsController.readFile = (req, res, next) => {
    fs.readFile(__dirname + "/fileTest.js",
        err => {
            console.log("read file succeed");
            next();
        });
}

module.exports = fsController;