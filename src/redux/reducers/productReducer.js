import { 
  ADD_PRODUCT 
} from "../../constants/constants"


const initState = [
  {title: "sample Product 1",id: "8bca46c5-3f43-4a74-9f34-9d4864736ac0" ,price : 1000,rating : 4, color : "red", size : "XL" ,imgUrl : "http://www.tennisnuts.com/images/product/full/Nike-LunarGlide-6-Womens-Running-Shoe-654434_603_G_PREM.jpg", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nostrum?"},
  {title: "sample Product 2",id: "f5f5b71f-e6e4-4603-a7b4-fbe7e8501966" ,price : 1000,rating : 2, color : "black", size : "L" ,imgUrl : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.MWRhqaRx6fZj6jDbDj-9ggHaHa%26pid%3DApi&f=1", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nostrum?"},
  {title: "Sample Product 3",id: "7d9c84ee-ec3e-4ee1-b1a7-e6670a4585ba" ,price : 1000,rating : 3, color : "pink", size : "L" ,imgUrl : "https://cdn.sweatband.com/mizuno_wave_inspire_14_ladies_running_shoes_aw18_mizuno_wave_inspire_14_ladies_running_shoes_aw18-_angled_2000x2000.jpg", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nostrum?"},
  {title: "sample Product 4",id: "3c57bed3-4f93-44b8-9074-91e50f8dfe95" ,price : 1000,rating : 5, color : "dark blue", size : "M" ,imgUrl : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.rJDm_6aSJTZoqx_eRvCYPAHaE6%26pid%3DApi&f=1", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nostrum?"},
  {title: "Sample Product 5",id: "61b08826-edfc-4d4c-81f7-a044eea692a9" ,price : 1000,rating : 5, color : "black", size : "M" ,imgUrl : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.MWRhqaRx6fZj6jDbDj-9ggHaHa%26pid%3DApi&f=1", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nostrum?"},
  {title: "Sample Product 6",id: "7bd4fc06-20c3-465b-ac27-4b23f0f90269" ,price : 1000,rating : 5, color : "white", size : "XL" ,imgUrl : "https://www.silvermeregolfstore.com/content/images/thumbs/0006934_footjoy-ladies-arc-lp-golf-shoes-93953.png", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nostrum?"},
  {title: "Sample Product 7",id: "46ba53ea-b9a1-4637-a914-17c8ca06f8ae" ,price : 1000,rating : 5, color : "blue", size : "XXL" ,imgUrl : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.wycFRpdMjTifD1dm4v2S9wHaE8%26pid%3DApi&f=1", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nostrum?"},
  {title: "Sample Product 8",id: "3e4ab17b-b356-43cc-82c1-4bb852a1adb7" ,price : 1000,rating : 4, color : "lime green", size : "L" ,imgUrl : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.d3PLg6cB8VghicPV5jwnMwHaF_%26pid%3DApi&f=1", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nostrum?"},
  {title: "Sample Product 9",id: "eba5e326-fa6a-4c82-8102-151f4c7df474" ,price : 1000,rating : 3, color : "white", size : "S" ,imgUrl : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5oUsXPFdcTnl62rjgbrPVQHaHa%26pid%3DApi&f=1", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nostrum?"},
  {title: "Sample Product 10",id: "44e9bbff-22c2-4ae8-a679-e7eab5b346ca" ,price : 1000,rating : 4, color : "yellow", size : "S" ,imgUrl : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.cut5vEb4f6mBG1ICQUzmlgHaHa%26pid%3DApi&f=1", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nostrum?"},
  {title: "sample Product 11",id: "56sca46c5-3f43-4a74-9f34-9d4864736ac0" ,price : 1000,rating : 4, color : "red", size : "XL" ,imgUrl : "http://www.tennisnuts.com/images/product/full/Nike-LunarGlide-6-Womens-Running-Shoe-654434_603_G_PREM.jpg", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nostrum?"},
  {title: "sample Product 12",id: "24fgb71f-e6e4-4603-a7b4-fbe7e8501966" ,price : 1000,rating : 2, color : "black", size : "L" ,imgUrl : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.MWRhqaRx6fZj6jDbDj-9ggHaHa%26pid%3DApi&f=1", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nostrum?"},
  {title: "Sample Product 13",id: "7dfc84ee-ec3e-4ee1-b1a7-e6670a4585ba" ,price : 1000,rating : 3, color : "pink", size : "L" ,imgUrl : "https://cdn.sweatband.com/mizuno_wave_inspire_14_ladies_running_shoes_aw18_mizuno_wave_inspire_14_ladies_running_shoes_aw18-_angled_2000x2000.jpg", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nostrum?"},
  {title: "sample Product 14",id: "3c57fed3-4f93-44b8-9074-91e50f8dfe95" ,price : 1000,rating : 5, color : "dark blue", size : "M" ,imgUrl : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.rJDm_6aSJTZoqx_eRvCYPAHaE6%26pid%3DApi&f=1", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nostrum?"},
  {title: "Sample Product 15",id: "61b08826-edfc-4d4c-81f7-a044eea692a9" ,price : 1000,rating : 5, color : "black", size : "M" ,imgUrl : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.MWRhqaRx6fZj6jDbDj-9ggHaHa%26pid%3DApi&f=1", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nostrum?"},
  {title: "Sample Product 16",id: "9bd4fc06-20c3-465b-ac27-4b23f0f90269" ,price : 1000,rating : 5, color : "white", size : "XL" ,imgUrl : "https://www.silvermeregolfstore.com/content/images/thumbs/0006934_footjoy-ladies-arc-lp-golf-shoes-93953.png", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nostrum?"},
  {title: "Sample Product 17",id: "46ba63ea-b9a1-4637-a914-17c8ca06f8ae" ,price : 1000,rating : 5, color : "blue", size : "XXL" ,imgUrl : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.wycFRpdMjTifD1dm4v2S9wHaE8%26pid%3DApi&f=1", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nostrum?"},
  {title: "Sample Product 18",id: "1d5xc17b-b356-43cc-82c1-4bb852a1adb7" ,price : 1000,rating : 4, color : "lime green", size : "L" ,imgUrl : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.d3PLg6cB8VghicPV5jwnMwHaF_%26pid%3DApi&f=1", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nostrum?"},
  {title: "Sample Product 19",id: "48cxcdsc-fa6a-4c82-8102-151f4c7df474" ,price : 1000,rating : 3, color : "white", size : "S" ,imgUrl : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5oUsXPFdcTnl62rjgbrPVQHaHa%26pid%3DApi&f=1", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nostrum?"},
  {title: "Sample Product 20",id: "36e9sdsd-22c2-4ae8-a679-e7eab5b346ca" ,price : 1000,rating : 4, color : "yellow", size : "S" ,imgUrl : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.cut5vEb4f6mBG1ICQUzmlgHaHa%26pid%3DApi&f=1", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nostrum?"},
]


// const initState = {
//   total : 0,
//   items : [],
// }

const productReducer = (state=initState, action) => {
  switch (action.type){
    case ADD_PRODUCT :
      return state
    default : 
      return state
  }

}

export default productReducer