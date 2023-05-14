const path = require("path")
//import path from "path"
const fs = require("fs-extra")
//import fs from "fs-extra"

const getOneImage = async (req, res, next) => {
    let image = req.params.image;
    const pathImage = path.resolve(__dirname, `../images/${image}`)
    if ( fs.existsSync(pathImage)){
        res.sendFile(pathImage)
    }
    else{
        const pathNoImage = path.resolve (__dirname, "../images/not-found.png")
        res.sendFile(pathNoImage)
    }
};

module.exports.getOneImage = getOneImage;