import React, { useState, useCallback, useEffect } from 'react';
import { FaCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

import api from '../../../services/api';

import { Container, CategoryItem, CategoryList } from './styles';

const Menu = ({ isOpened, onCategoryChange, defaultCategory }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

  const loadCategories = useCallback(async () => {
    const response = await api.get('/categories');

    setCategories(response.data.rows);
  }, []);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  const handleCategoryChanges = useCallback(
    category_id => {
      setSelectedCategory(category_id);
      onCategoryChange(category_id);
    },
    [setSelectedCategory, onCategoryChange],
  );

  return (
    <Container open={isOpened}>
      <CategoryList>
        <CategoryItem
          onClick={() => handleCategoryChanges(0)}
          selected={!!(selectedCategory === 0)}
        >
          {selectedCategory === 0 && <FaCircle color="#756AD3" size={10} />}
          <span>All categories</span>
        </CategoryItem>
        {categories.map(category => (
          <CategoryItem
            key={category.id}
            onClick={() => handleCategoryChanges(category.id)}
            selected={!!(selectedCategory === category.id)}
          >
            {selectedCategory === category.id && (
              <FaCircle color="#756AD3" size={10} />
            )}
            <span>{category.name}</span>
          </CategoryItem>
        ))}
      </CategoryList>
    </Container>
  );
};

Menu.propTypes = {
  isOpened: PropTypes.bool,
  onCategoryChange: PropTypes.func.isRequired,
  defaultCategory: PropTypes.number,
};

Menu.defaultProps = {
  isOpened: false,
  defaultCategory: 0,
};

export default Menu;
