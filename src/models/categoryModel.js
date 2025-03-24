import knex from './knex.js'
import { SHOW_DELETED } from '../constant.js'

const Category = {
    getAll:(query)=>{
        console.log(query)
        if(query.show_deleted === SHOW_DELETED.TRUE){
            return knex('categories')
        }else if(query.show_deleted === SHOW_DELETED.ONLY_DELETED){
            return knex('categories').whereNotNull('deleted_at')
        }else{
            return knex('categories').whereNull('deleted_at')
        }
    },
    getById:(id)=>{
        return knex('categories').whereNull('deleted_at').where({id}).first()
    },
    update: (id,category) => {
        return knex ('categories').where({id}).update(category)
    },
    delete: (id) => {
        category.updated_at = new Date()
        return knex('categories').where({id}).update({deleted_at:knex.fn.now()})
    }
}