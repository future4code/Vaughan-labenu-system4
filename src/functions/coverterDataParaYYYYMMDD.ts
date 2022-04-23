export const coverterDataParaYYYYMMDD = (date: string): string => {
    const dd = date.slice(0, 2)
    const mm = date.slice(3, 5)
    const yyyy = date.slice(6)

    const newDate = `${yyyy}-${mm}-${dd}`

    return newDate
}