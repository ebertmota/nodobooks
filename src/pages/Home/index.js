import React, { useState, useEffect, useCallback } from 'react';
import ReactStars from 'react-stars';

import api from '../../services/api';

import Menu from '../../components/atoms/Menu';
import Header from '../../components/organisms/Header';
import bannerImg from '../../assets/banner.svg';

import {
  Container,
  Content,
  BookList,
  BookItem,
  BannerImage,
  Main,
  MenuContainer,
  BookTitle,
  StarsContainer,
  BookPrice,
  Button,
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
      <Header inputValueChanges={searchBooks} />
      <Content>
        <BannerImage src={bannerImg} alt="Big Summer Sale" />

        <Main>
          <MenuContainer>
            <Menu onCategoryChange={loadBooksByCategory} />
          </MenuContainer>

          <BookList>
            {books.map(book => (
              <BookItem key={book.id}>
                <img src={book.cover} alt="anyt" />
                <div>
                  <span>{book.author}</span>
                  <BookTitle>{book.title}</BookTitle>
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
                      review
                    </span>
                  </StarsContainer>

                  <p>{book.description}</p>
                  <BookPrice>{book.price}</BookPrice>

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
