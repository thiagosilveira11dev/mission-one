
const convertButton = document.getElementsByTagName('button')[0]
const moeda = document.getElementById('currencymoney')

const dolar = 5.2
const euro = 5.9

const convertValues = () => {
    const input = document.getElementById('entrada').value
    const realTextValue = document.getElementById('realTextValue')
    const currencyValue = document.getElementById('currencyValue')

    realTextValue.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL"
    }).format(input);

    if (moeda.value === "Dol") {
        currencyValue.innerHTML = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD"
        }).format(input / dolar)
    }

    if (moeda.value === "Eur") {
        currencyValue.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "EUR"
        }).format(input / euro);
    };
}
changeFlag = () => {
    const currencyName = document.getElementById("currencyName")
    const bandeira = document.getElementById("bandeira")

    if (moeda.value === "Dol") {
        currencyName.innerHTML = "Dolar Americano"
        bandeira.src = "./img/eua.svg"
    }

    if (moeda.value === "Eur") {
        currencyName.innerHTML = "Euro"
        bandeira.src = "./img/euro.svg"
    }
    convertValues ()
}

convertButton.addEventListener('click', convertValues)
moeda.addEventListener('change', changeFlag)
