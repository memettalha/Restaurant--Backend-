import knex from './knex.js'
import { SHOW_DELETED } from '../constant.js'

const Category = {
    getAll: (query) => {
        let queryBuilder = knex('categories');
        
        // Silinen kayıtlar filtresi
        if (query.show_deleted === SHOW_DELETED.TRUE) {
            // Tüm kayıtları getir
        } else if (query.show_deleted === SHOW_DELETED.ONLY_DELETED) {
            queryBuilder = queryBuilder.whereNotNull('deleted_at');
        } else {
            queryBuilder = queryBuilder.whereNull('deleted_at');
        }
        
        return queryBuilder;
    },
    getById: (id) => {
        return knex('categories').whereNull('deleted_at').where({id}).first();
    },
    create: (category) => {
        category.created_at = new Date();
        return knex('categories').insert(category);
    },
    update: (id, category) => {
        category.updated_at = new Date();
        return knex('categories').where({id}).update(category);
    },
    delete: (id) => {
        return knex('categories').where({id}).update({deleted_at: knex.fn.now()});
    }
};

export default Category;