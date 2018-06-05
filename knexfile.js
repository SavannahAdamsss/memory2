module.exports = {
  development: {
      client: "pg",
      connection: "postgres:///coffee_registry"
  },
  production: {
      client: "pg",
      connection: process.env.DATABASE_URL
  }
};
