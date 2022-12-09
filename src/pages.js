export const pagesData = [
  {
    _id: 1,
    title: [
      'Andesite',
      'aphanitic'
    ],
    meta: 'By James Maurice Rojo',
    link: '/preview/1',
    text:
      'A volcanic rock of intermediate composition, between silica-poor basalt and silica-rich rhyolite.',
    imgUrl: '/images/1.jpg'
  },
  {
    _id: 2,
    title: [
      'Andesite',
      'aphanitic'
    ],
    meta: 'By James Maurice Rojo',
    link: '/preview/2',
    text:
      'A volcanic rock of intermediate composition, between silica-poor basalt and silica-rich rhyolite.',
    imgUrl: '/images/2.jpg'
  },
]

export const getPageData = (id) => {
  const find = pagesData.find(el => el._id === +id)
  
  return find || {}
}
