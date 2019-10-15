log4js = require('log4js')
require('dotenv').config()

log4js.configure({
  appenders:{
    // logstash: {
    //   type: "@log4js-node/logstash-http",
    //   url: '',
    //   application: "logs_info",
    //   logType: "application",
    // },
    file: {
      type : 'file' , 
      filename: './logs/log-info.log',
      layout:{
       type: "pattern",
        pattern: "%d{yyyy-MM-dd hh:mm:ss.SSS} %p %c %m"
      },
      maxLogSize: 10485760,
      compress: true
    }
  },
  categories:{
    default:{appenders: ['file'],level:'INFO'},
    all:{appenders: ['file'],level:'ALL'},
    debug:{appenders: ['file'],level:'DEBUG'},
    warn:{appenders: ['file'],level:'WARN'},
    error:{appenders: ['file'],level:'ERROR'},
    fatal:{appenders: ['file'],level:'FATAL'}
  }
})


const logger = log4js.getLogger()
module.exports = {logger}