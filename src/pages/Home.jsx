import React from 'react';
import { Categories, SortPopup, PizzaBlock, LoadingBlock, Button } from '../components';
import { useSelector } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { useDispatch } from 'react-redux';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';
const categoryNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Закрытые', 'Острые'];
const sortItems = [
  {
    name: 'популярности',
    type: 'popular',
    order: 'desc',
  },
  {
    name: 'цене',
    type: 'price',
    order: 'desc',
  },
  {
    name: 'алфавиту',
    type: 'name',
    order: 'asc',
  },
];
function Home() {
  
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const cardItems = useSelector(({ cart }) => cart.items);
  const { category, sortBy } = useSelector(({ filter }) => filter);
  const handlePizzaToCart = (obj) => {
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj,
    });
  };
 console.log(category)
  const onSelectCategory = React.useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch],
  );
  const onSelectPopup = React.useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    [dispatch],
  );

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  return (
  
    <main className="main">
      
      <nav className="main-nav">
        <Categories
          onClickCategory={onSelectCategory}
          activeCategory={category}
          items={categoryNames}
        />
       
               <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSort={onSelectPopup} />
      </nav>
      <h1 className="main-logo">{category == null ? 'Все пиццы' : categoryNames[category]}</h1>
      <section className="pizza-menu">
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock
                onClickAddPizza={handlePizzaToCart}
                key={obj.id}
                addedCount={cardItems[obj.id] && cardItems[obj.id].items.length}
                {...obj}
              />
            ))
          : Array(10).fill(<LoadingBlock />)}
      </section>
    </main>
  );
}
export default Home;
