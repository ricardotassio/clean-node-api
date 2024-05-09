module.exports = {
  mongodbMemoryServerOptions: {
    binary: {
      version: '5.0.7',
      skipMD5: true
    },
    autoStart: false,
    instance: {
      dbName: 'jest'
    }
  }
}
