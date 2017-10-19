let root
if (process.env.NODE_ENV === 'production') {
  root = '/api'
} else {
  root = '/testapi'
  // root = '/devapi'
}
let path = (inf = null, n = false) => {
  let result = ''
  if (process.env.NODE_ENV === 'production') {
    result = root + inf
  } else {
    if (n) {
      result = root + '/local' + inf
    } else {
      // result = root + '/corss' + inf
      result = root + '/cross' + inf
    }
  }
  return result
}
/*
corss  请求远端 
local  请求本地mock Json 文件

example:
export const ILOGIN = root + login
*/  
let login = (process.env.NODE_ENV === 'production') ? '/jdt-web/wx/configdata.do' : '/jdt-web/wx/configdata.do'

export const ILOGIN = (n = false) => path(login, n)
