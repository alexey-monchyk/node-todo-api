const env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
    const config = require('./config.json');
    let envConfig = config[env];

    Object.keys(envConfig).forEach((key) => {
        process.env[key] = envConfig[key];
    });
} else {
    process.env.MONGODB_URI = 'mongodb://aliosha7891:userab9ad1@ds125683.mlab.com:25683/todo';
}