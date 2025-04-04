import knex from "./knex.js";
import { SHOW_DELETED } from '../constant.js';

export const Ingredient = {
    getAll: (query) => {
        let queryBuilder = knex('ingredients');
        
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
        return knex('ingredients').whereNull('deleted_at').where({id}).first();
    },
    create: (ingredient) => {
        ingredient.created_at = new Date();
        return knex('ingredients').insert(ingredient);
    },
    update: (id, ingredient) => {
        ingredient.updated_at = new Date();
        return knex('ingredients').where({id}).update(ingredient);
    },
    delete: (id) => {
        return knex('ingredients').where({id}).update({deleted_at: knex.fn.now()});
    }
};