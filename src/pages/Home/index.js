import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';
import animateScrollTo from 'animated-scroll-to';
import api from '../../services/api';

import Menu from '../../components/atoms/Menu';
import Button from '../../components/atoms/Button';
import Footer from '../../components/atoms/Footer';
import Header from '../../components/organisms/Header';
import PurchaseModal from '../../components/organisms/PurchaseModal';

import error404img from '../../assets/404.svg';
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
  ErrorMessageContainer,
} from './styles';

const Home = ({ history }) => {
  const [books, setBooks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState();
  const inputEl = useRef(null);

  useEffect(() => {
    if (history.location.state) {
      inputEl.current.focus();
      animateScrollTo(document.querySelector('#main'));
    }
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

  useEffect(() => {
    const storagedSelectedCategory = Number(
      localStorage.getItem('@nodobooks/selected-categories'),
    );

    if (storagedSelectedCategory) {
      loadBooksByCategory(storagedSelectedCategory);
    }
  }, [loadBooksByCategory]);

  const searchBooks = useCallback(async name => {
    animateScrollTo(document.querySelector('#main'));
    const response = await api.get('/books/search', {
      params: {
        query: name,
      },
    });

    setBooks(response.data.rows);
  }, []);

  const toggleModal = useCallback(book_id => {
    setSelectedBook(book_id);
    setModalOpen(modal => !modal);
  }, []);

  const handleSubmit = useCallback(
    async data => {
      await api.post('/buy', {
        data: {
          product_id: selectedBook,
          ...data,
        },
      });
    },
    [selectedBook],
  );
  return (
    <Container>
      <Header
        inputValueChanges={searchBooks}
        onCategoryChange={loadBooksByCategory}
        inputRef={inputEl}
      />

      <Content>
        <BannerImage src={bannerImg} />
        <PurchaseModal
          isOpen={modalOpen}
          setIsOpen={toggleModal}
          handlePurchase={handleSubmit}
        />

        <Main id="main">
          <MenuContainer>
            <Menu onCategoryChange={loadBooksByCategory} />
          </MenuContainer>
          {books.length === 0 ? (
            <ErrorMessageContainer>
              <img src={error404img} alt="Nothing found" />

              <div>
                <strong>Oops!</strong>
                <p>
                  We can&apos;t seem to find the book you&apos;re looking for.
                </p>
              </div>
            </ErrorMessageContainer>
          ) : (
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
                    <Button onClick={() => toggleModal(book.id)}>
                      BUY NOW
                    </Button>
                  </div>
                </BookItem>
              ))}
            </BookList>
          )}
        </Main>
      </Content>
      <Footer />
    </Container>
  );
};

Home.propTypes = {
  history: PropTypes.objectOf({
    location: PropTypes.objectOf({
      state: PropTypes.number,
    }),
  }).isRequired,
};

export default Home;
