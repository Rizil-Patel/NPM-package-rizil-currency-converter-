import { convertCurrency } from "rizil-currency-converter";

convertCurrency("USD","INR",10).then(res => console.log(res))