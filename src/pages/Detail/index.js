import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ReactStars from 'react-stars';
import Menu from '@components/atoms/Menu';

import Button from '@components/atoms/Button';
import Footer from '@components/atoms/Footer';
import PurchaseModal from '@components/organisms/PurchaseModal';
import Header from '@components/organisms/Header';
import api from '../../services/api';

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
      <Header onCategoryChange={loadBooksByCategory} />
      <Content>
        <PurchaseModal
          isOpen={modalOpen}
          setIsOpen={toggleModal}
          handlePurchase={handleSubmit}
        />
        <MenuContainer>
          <Menu onCategoryChange={loadBooksByCategory} />
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
      <Footer />
    </Container>
  );
};

export default Detail;
