function sumAll(data) {
    for (let i = 0; i < data.length; i++) {
        const numberPair = data[i];
        const sum = numberPair[0] + numberPair[1];

        console.log(numberPair, sum);
    }
}

export { sumAll }
