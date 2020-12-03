import React, { useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import Modal from '../../molecules/Modal';
import Button from '../../atoms/Button';
import InputField from '../../molecules/InputField';
import getValidationErrors from '../../../utils/getValidationErrors';
import {
  Container,
  Form,
  ButtonsContainer,
  ResponseContainer,
  ResponseContent,
} from './styles';
import successIcon from '../../../assets/icons/success.svg';
import errorIcon from '../../../assets/icons/error.svg';

const PurchaseModal = ({ isOpen, setIsOpen, handlePurchase }) => {
  const [purchaseStatus, setPurchaseStatus] = useState('');

  const formRef = useRef(null);

  const handleSubmit = useCallback(
    async data => {
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required('This field is required'),
          email: Yup.string().required('This field is required'),
          phone: Yup.number().min(8).required('This field is required'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await handlePurchase(data);

        setPurchaseStatus('success');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        } else {
          setPurchaseStatus('error');
        }
      }
    },
    [handlePurchase],
  );

  const handleClose = useCallback(() => {
    setIsOpen();

    setPurchaseStatus('');
  }, [setIsOpen]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        {purchaseStatus === '' ? (
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Buy now</h1>

            <InputField
              labelText="Name"
              name="name"
              placeholder="Type your name here"
            />
            <InputField
              type="email"
              labelText="E-mail"
              name="email"
              placeholder="Type your e-mail here"
            />
            <InputField
              labelText="Phone"
              type="number"
              name="phone"
              placeholder="Type your phone here"
            />
            <ButtonsContainer>
              <Button unSelectable onClick={setIsOpen}>
                CANCEL
              </Button>
              <Button type="submit" selected>
                SEND
              </Button>
            </ButtonsContainer>
          </Form>
        ) : (
          <ResponseContainer>
            <header>
              <h1>Buy now</h1>
            </header>
            <ResponseContent>
              {purchaseStatus === 'success' && (
                <div>
                  <img src={successIcon} alt="success" />
                  <span>
                    Your purchase was successfully sent! Thank you for using our
                    store.
                  </span>
                </div>
              )}
              {purchaseStatus === 'error' && (
                <div>
                  <img src={errorIcon} alt="error" />
                  <span>
                    There was a mistake sending your purchase, try again later.
                  </span>
                </div>
              )}
            </ResponseContent>
            <ButtonsContainer>
              <Button selected onClick={handleClose}>
                CLOSE
              </Button>
            </ButtonsContainer>
          </ResponseContainer>
        )}
      </Container>
    </Modal>
  );
};

PurchaseModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  handlePurchase: PropTypes.func.isRequired,
};

export default PurchaseModal;
