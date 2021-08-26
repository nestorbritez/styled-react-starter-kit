module.exports = {
  process: (_, filename) => {
    return `module.exports = "${filename.toString().split('src')[1]}";`
  },
}
