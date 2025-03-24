import knex from "./knex";

export const Product = {
    getAll : () => {
        return knex('products').whereNull('deleted_at')
    },
    getById: ({id}) => {
        return knex('products').whereNull('deleted_at').where({id})
    },
    update: ({id,product}) => {
        product.updated_at = new Date()
        return knex('products').whereNull('deleted_At').where({id}).update(product)
    },
    delete:({id}) => {
        return knex('products').where({id}).update({deleted_at:knex.fn.now()})
    }
}