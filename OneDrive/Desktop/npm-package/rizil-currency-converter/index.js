import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_v0vOevL2vMwMU4pdIyX4BPIaK5dCPoODwn46CVPB');

export async function convertCurrency(fromCurrency,toCurrency,units) {
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multiplier = res.data[toCurrency];
    return multiplier * units;
}