/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const up = (pgm) => {pgm.sql(
    `
    CREATE TABLE order_items(
        id SERIAL PRIMARY KEY,
        product_id INTEGER NOT NULL,
        product_quantity INTEGER NOT NULL DEFAULT 1,
        user_id INTEGER NOT NULL,
        order_id INTEGER NOT NULL,
        FOREIGN KEY (product_id) REFERENCES products(id),
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (order_id) REFERENCES orders(id),
        UNIQUE (user_id,product_id,order_id)
    )
    `
)};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {};
