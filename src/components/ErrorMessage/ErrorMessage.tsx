import css from './ErrorMessage.module.css';
import  { FC } from 'react';

const ErrorMessage: FC = () => {
    return <p className={css.error}>Oops! There was an error, please reload this page!</p>;
};

export default ErrorMessage;
