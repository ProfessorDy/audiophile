

const url = 'http://api.exchangeratesapi.io/v1/latest?access_key=7d5c5738fad1e82696d713646abbde18'

async function getData() {

    const res = await fetch(url, { next: { revalidate: 2700 } })


    if (!res.ok) {

        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Price(usd: number) {
    const data = await getData()

    const rate:number = data.rates.NGN * usd

    const value: number  = Math.trunc(rate)

    return value.toLocaleString()
  
}
