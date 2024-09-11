import './category-list.css';
import category1 from "../../static/images/category-1.png"
import category2 from "../../static/images/category-2.png"
import category3 from "../../static/images/category-3.png"

const CategoryList = () => {
  return (
    <div className="category-list">
      <div className="container">
        <div className="category-container">
          <div className="category-items">
            <div className="category-first-item">
              <img src={category1} alt="" />
              <button>Мода</button>
            </div>
            <div className="category-second-item">
              <img src={category2} alt="" />
              <button>Корпоративные</button>
            </div>
            <div className="category-third-item">
              <img src={category3} alt="" />
              <button>Спорт</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
