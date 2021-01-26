function labas(data) {
    for (let i = 0; i < data.length; i++) {
        const skaiciuoja = data[i];
        console.log(skaiciuoja);
        const sakinys = `my name is ${skaiciuoja.name} and i like ${skaiciuoja.fruit} ${skaiciuoja.why} `
        console.log(sakinys);
    }
}
export { labas }