  
import { getConnetion } from '../database/database'
import { queries } from '../database/queries'

//findAll Products
export const getAllProductsService = async () => {
    let productsList = null
    try {
        const conn = await getConnetion()
        productsList = await conn.query(queries.findAll)
    } catch (e) {
        throw e.message
    }
    return productsList
}