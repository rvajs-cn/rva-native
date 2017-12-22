import config from './config'

function getRealUrl(path) {
  let realUrl = path.trim()
  const isAbsolutePath = realUrl.indexOf('http') === 0
  return isAbsolutePath ? realUrl : `${config.base_url}${realUrl}`
}

async function myFetch({
  type = 'GET',
  path,
  formData = null,
  params = {},
  customHeader = {}
}) {
  const token = null

  let authorizationHeader = token ? {authorization: `Bearer ${token}`} : {}
  let bodydata =
    type === 'GET' ? {} : {body: formData || JSON.stringify(params)}

  const options = {
    method: type,
    headers: formData
      ? {...authorizationHeader, ...customHeader}
      : {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          ...authorizationHeader,
          ...customHeader
        },
    ...bodydata
  }

  let statusCode = 200

  return new Promise((resolve, reject) => {
    const realUrl = getRealUrl(path)
    fetch(realUrl, options)
      .then(response => {
        statusCode = response.status
        return response.text()
      })
      .then(jsonStr => {
        try {
          const json = JSON.parse(jsonStr)
          try {
            if (statusCode !== 200) {
              if (__DEV__) console.log(path, options, statusCode, json)
              reject(json)
            } else {
              if (__DEV__) {
                console.log(path, options, statusCode, json)
              }
              resolve({data: json})
            }
          } catch (err) {
            console.log(path, 'myFetch - exception return', err)
          }
        } catch (err) {
          if (statusCode === 400) {
            resolve({data: {}})
          }
          reject({
            code: statusCode,
            message: jsonStr
          })
        }
      })
      .catch(err => {
        if (__DEV__) console.log(path, 'myFetch - api request failure', err)
        reject({
          code: -1,
          message: err.message
        })
      })
  })
}

export default myFetch
