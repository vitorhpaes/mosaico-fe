import moment from 'moment'

export const dateFromNow = (date: Date) => {
    return moment(date).fromNow()
}