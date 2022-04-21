export const covertDateToDDMMYYYY = (date: object): string => {
    const stringDate = JSON.stringify(date)

    const dd = stringDate.slice(9, 11)
    const mm = stringDate.slice(6, 8)
    const yyyy = stringDate.slice(1, 5)

    const newDate = `${dd}/${mm}/${yyyy}`

    return newDate
}