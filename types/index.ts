interface ICurrency {
  name: string,
  id: number,
  symbol: string
}

export interface IOption {
  value: number,
  name: string
}

interface IValues {
  USD: {
    price: number
  }
}

export interface IServerCurrency extends ICurrency {
  values: IValues
}

export interface IClientCurrency extends ICurrency {
  price: number
}

export type SelectIndex = 1 | 2