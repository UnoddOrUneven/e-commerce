/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const up = (pgm) => {
    pgm.sql(`                  
        CREATE TABLE carts(
            id SERIAL PRIMARY KEY,
            product_id INTEGER NOT NULL,
            product_quantity INTEGER NOT NULL DEFAULT 1,
            user_id INTEGER NOT NULL,
            FOREIGN KEY (product_id) REFERENCES products(id),
            FOREIGN KEY (user_id) REFERENCES users(id),
            UNIQUE (user_id,product_id)
        );
    `)};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {};
