const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Includes
const head = fs.readFileSync("src/includes/head.html");
const hidden = fs.readFileSync("src/includes/hidden.html");
const sectionHeader = fs.readFileSync("src/includes/section-header.html");
const sectionHeaderActive = fs.readFileSync("src/includes/section-header-active.html");
const sectionFooter = fs.readFileSync("src/includes/section-footer.html");
const temp = fs.readFileSync("src/includes/temp.html");

// Pages
module.exports = [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        inject: "body",
        title: "Екатеринбургу 300 лет",
        head,
        sectionHeaderActive,
        sectionFooter,
        hidden,
        temp
    })
];
