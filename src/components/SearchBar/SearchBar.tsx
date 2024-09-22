import { Formik, Form, Field } from "formik";
import css from './SearchBar.module.css';
import toast from "react-hot-toast";
import { IoSearch } from "react-icons/io5";
import { FC } from "react";

interface SearchBarProps {
    onSearch: (searchText: string) => void; 
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
    const handleSubmit = (values: { search: string }, actions: any) => {
        if (values.search === "") {
            toast.error("Please enter text!", {
                position: 'top-right',
            });
        } else {
            onSearch(values.search);
            actions.resetForm();
        }
    };

    return (
        <header className={css.container}>
            <Formik
                initialValues={{ search: "" }}
                onSubmit={handleSubmit}
            >
                <Form className={css.form}>
                    <Field
                        name="search"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        className={css.input}
                    />
                    <button type="submit" className={css.searchBtn}>
                        Search <IoSearch className={css.icon} />
                    </button>
                </Form>
            </Formik>
        </header>
    );
};

export default SearchBar;