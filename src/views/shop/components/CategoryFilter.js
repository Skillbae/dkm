import { ArrowRightOutlined } from "@ant-design/icons"


const CartegoryFilterItem = ({ title }) => (
  <div className="categoryFilter-item">
    <ArrowRightOutlined/>
    <span>{title}</span>
  </div>
)



const CategoryFilter = ({title, arr}) => {
  // const [selected, setSelected] = useState([])



  return (
    <div className="categoryFilter">
    <h2 >{title}</h2>
    
    {arr.map((title)=>(
      <CartegoryFilterItem key={title} title={title}/>
    ))}
    
      
    </div>
  )
}

export default CategoryFilter
