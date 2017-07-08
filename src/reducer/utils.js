import { OrderedMap } from 'immutable'

export function recordsFromArray(RecordType, array) {
    return array.reduce((acc, item) => {
        return acc.set(item.id, new RecordType(item))
    }, new OrderedMap({}))
}