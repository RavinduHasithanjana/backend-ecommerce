module.exports = {
    // Database configuration and credentials
    HOST: "173.82.114.220",
    USER: "admin_userfresh",
    PASSWORD: "Passport@1",
    DB: "admin_fresh",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};