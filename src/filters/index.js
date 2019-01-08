import { formatDatePlugin } from '@/plugins/date.js'

let formatDate = time => {
  let date = new Date(time)
  return formatDatePlugin(date, 'yyyy-MM-dd')
}
let formatTime = time => {
  let date = new Date(time)
  return formatDatePlugin(date, 'yyyy-MM-dd hh:mm')
}

export {formatDate, formatTime}
