function calculateFaktorial() {
    const inputAngka = document.getElementById('calculator');
    const number = parseInt(inputAngka.value)
    const result = document.getElementById('result');
    console.log(number)

    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i
        console.log(i)
    }
    result.innerHTML = factorial;
}