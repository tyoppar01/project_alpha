/**
 * Specialized for modifying existing types, Utility Method
 * 
 * Omit - can exclude attributes that do not wish to be included
 * Pick - Opposite of Omit method
 * Partial - can be any partial of an object (make all optional)
 * Required - Opposite of Partial
 */

function query<T>(
    items: T[],
    query: 
    {
      // Below method is more appropriate
      [TProp in keyof T]?: (val: T[TProp]) => boolean
    }
) {
    return items.filter(item => {
        // iterate through each of the item's properties
        for (const property of Object.keys(item)) {

            // get the query for this property name
            const propertyQuery = query[property]

            // see if this property value matches the query
            if (propertyQuery && propertyQuery(item[property])) {
                return true
            }
        }

        // nothing matched so return false
        return false
    })
}

const matches = query(
    [
        { name: "Ted", age: 12 },
        { name: "Angie", age: 31 }
    ],
    {
        name: name => name === "Angie",
        age: age => age > 30
    })