const timeFormat = new Intl.DateTimeFormat('es-PE', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true
})

export const dateToTime = (date) => {
  const d = new Date(date)
  return timeFormat.format(d).replace(/\.\s/g, '').replace('.', '')
}
