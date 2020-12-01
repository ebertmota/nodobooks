import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';
import api from '../../services/api';

import Menu from '../../components/atoms/Menu';
import Button from '../../components/atoms/Button';
import Header from '../../components/organisms/Header';
import bannerImg from '../../assets/banner.svg';

import {
  Container,
  Content,
  BookList,
  BookItem,
  BookPrice,
  BookAuthor,
  BannerImage,
  Main,
  MenuContainer,
  StarsContainer,
} from './styles';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function loadBooks() {
      const response = await api.get('/books');

      setBooks(response.data.rows);
    }
    loadBooks();
  }, []);

  const loadBooksByCategory = useCallback(async category_id => {
    const response = await api.get('/books', {
      params: {
        category: category_id,
      },
    });

    setBooks(response.data.rows);
  }, []);

  const searchBooks = useCallback(async name => {
    const response = await api.get('/books/search', {
      params: {
        query: name,
      },
    });

    setBooks(response.data.rows);
  }, []);

  return (
    <Container>
      <Header
        inputValueChanges={searchBooks}
        onCategoryChange={loadBooksByCategory}
      />

      <Content>
        <BannerImage src={bannerImg} />

        <Main>
          <MenuContainer>
            <Menu onCategoryChange={loadBooksByCategory} />
          </MenuContainer>
          <BookList>
            {books.map(book => (
              <BookItem key={book.id}>
                <Link to={`/detail/${book.id}`}>
                  <img src={book.cover} alt={book.name} />
                </Link>
                <div>
                  <BookAuthor>{book.author}</BookAuthor>
                  <Link to={`/detail/${book.id}`}>{book.title}</Link>
                  <StarsContainer>
                    <ReactStars
                      value={book.stars}
                      edit={false}
                      size="200px"
                      className="rating-stars"
                      color1="#EEEDF5"
                      color2="#F2C94C"
                    />
                    <span>
                      {book.reviews}
                      {'\n'}
                      review
                    </span>
                  </StarsContainer>

                  <p>{book.description}</p>
                  <BookPrice>{`$ ${book.price}`}</BookPrice>
                  <Button>BUY NOW</Button>
                </div>
              </BookItem>
            ))}
          </BookList>
        </Main>
      </Content>
    </Container>
  );
};

export default Home;
