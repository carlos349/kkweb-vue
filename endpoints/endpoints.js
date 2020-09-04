const data = {
    protocol: 'http://',
    server: 'localhost:4200',
    serverImg : 'localhost:8080'
}
const endpoints = {
    endpointTarget: data.protocol+data.server,
    endpointImg: data.protocol+data.serverImg
}

module.exports = endpoints