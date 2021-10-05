const data = {
    protocol: 'https://',
    protocolQ: 'http://',
    server: '52.67.12.97:4200',
    serverQ: 'localhost:3200',
    serverImg : 'kkspa.cl',
    database: 'kkprettynails-syswa'
}
const endpoints = {
    endpointTarget: data.protocol+data.server,
    endpointImg: data.protocol+data.serverImg,
    database: data.database
}

module.exports = endpoints