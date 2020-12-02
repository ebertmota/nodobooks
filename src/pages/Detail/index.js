import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ReactStars from 'react-stars';
import api from '../../services/api';

import Menu from '../../components/atoms/Menu';

import Button from '../../components/atoms/Button';
import Header from '../../components/organisms/Header';

import PurchaseModal from '../../components/organisms/PurchaseModal';

import {
  Container,
  Content,
  MenuContainer,
  BookContainer,
  BookItem,
  BookPrice,
  StarsContainer,
  BookAuthor,
} from './styles';

const Detail = () => {
  const { id } = useParams();
  const { push } = useHistory();

  const [book, setBook] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    async function loadBooks() {
      const response = await api.get(`/books/${id}`);

      setBook(response.data.book);
    }
    loadBooks();
  }, [id]);

  const loadBooksByCategory = useCallback(async () => {
    push('/');
  }, [push]);

  const searchBooks = useCallback(async name => {
    const response = await api.get('/books/search', {
      params: {
        query: name,
      },
    });

    setBook(response.data.rows);
  }, []);

  const toggleModal = useCallback(() => {
    setModalOpen(modal => !modal);
  }, []);

  const handleSubmit = useCallback(
    async data => {
      await api.post('/buy', {
        data: {
          product_id: book.id,
          ...data,
        },
      });
    },
    [book.id],
  );

  return (
    <Container>
      <Header
        inputValueChanges={searchBooks}
        onCategoryChange={loadBooksByCategory}
      />
      <Content>
        <PurchaseModal
          isOpen={modalOpen}
          setIsOpen={toggleModal}
          handlePurchase={handleSubmit}
        />
        <MenuContainer>
          {book.category > 0 && (
            <Menu
              onCategoryChange={loadBooksByCategory}
              defaultCategory={book.category}
            />
          )}
        </MenuContainer>

        <BookContainer>
          <BookItem key={book.id}>
            <div>
              <img src={book.cover} alt={book.name} />
            </div>
            <div>
              <header>
                <BookAuthor>{book.author}</BookAuthor>
                <strong>{book.title}</strong>
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
              </header>

              <BookPrice>{`$ ${book.price}`}</BookPrice>
              <Button onClick={toggleModal}>BUY NOW</Button>
              <p>{book.description}</p>
            </div>
          </BookItem>
        </BookContainer>
      </Content>
    </Container>
  );
};

export default Detail;
