// const currentUrl = window.location.search
//   .replace('?', '')
//   .split('&')
//   .reduce((result, e) => {
//     var splitedResult = e.split('=')
//     result[decodeURIComponent(splitedResult[0])] = decodeURIComponent(splitedResult[1])
//     return result
//   }, {})

const currentPathname = window.location.pathname.split('/')
const code = currentPathname[currentPathname.length - 1]

if (code) {
  chrome.storage.sync.set({ auth: { authCode: code } })
}

// chrome.storage.sync.clear()
