module.exports = {
  apps : [{
    name: "VCH",
    script: "index.js",
    env: {
      PORT: 3000,
      http_server_port: 4000,
      NODE_ENV: "development",
      db : "mongodb://localhost:27017/BookStore",
      db_name: "BookStore",
      JWT_TOKEN_SECRET: "vch@11111111iiiiiiiii",
     
    },
    env_production: {
      PORT: 3000,
      http_server_port: 4000,
      NODE_ENV: "production",
      JWT_TOKEN_SECRET: "vch@11111111iiiiiiiii",
      db : "mongodb+srv://appchat:zK26s3auQa52Ux1I@cluster0.aw7bq.mongodb.net/AppChat?retryWrites=true&w=majority",
      db_name: "BookStore",
     
    },
    error_file: 'err.log',
    out_file: 'out.log',
    log_file: 'combined.log',
    time: true
  }]
};
