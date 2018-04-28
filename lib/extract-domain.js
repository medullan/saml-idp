module.exports = (url, preservePort) => {
    let domain;
    //find & remove protocol (http, ftp, etc.) and get domain
    if(typeof url === 'string'){
      if (url.indexOf('://') > -1) {
          domain = url.split('/')[2];
      }
      else {
          domain = url.split('/')[0];
      }
      //find & remove port number
      if(preservePort === false) domain = domain.split(':')[0];
    }

    return domain;
};