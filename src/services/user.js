import myFetch from './myFetch'

export function getAboutus() {
  const data = {
    website: 'rvajs.cn',
    tech: 'front-end',
    keywords: 'react react-native redux mobx'
  }

  return {data}
}

export function getProfile(name) {
  return myFetch({
    path: `/user/${name}`,
    type: 'GET'
  })
}
