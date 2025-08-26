export type quantidades = {
    ida: number
    volta: number
    vespertino: number
    idaVoltaAbsoluto: number
    idaVoltaVespertinoAbsoluto: number
}

export type ListaSalva = {
  dateActual: string;
  quantidades: quantidades;
  listaBruta: string;
  dateList: string;
}

export type dataForGraphic = {
    quantIda: number[]
    quantVolta: number[]
    quantVespertino: number[]
    dates: string[]
}