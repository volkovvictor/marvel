import { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';

import './findChar.scss';

const FindChar = () => {
    const {error, clearError, getCharacterByName} = useMarvelService()

    const [char, setChar] = useState(null);

    const onUpdateChar = (name) => {
        clearError()
        getCharacterByName(name).then(setChar)
    }


    const errorMessage = !error ? null : <div style={{marginTop: "8px"}}><ErrorMessage/></div>;
    const content = !char ? null : char.length > 0 ?
            <div style={{display: 'flex', alignItems: 'center', marginTop: '25px'}}>
                <div className='find__success'>There is! Visit {char[0].name} page?</div>
                <Link to={`/${char[0].id}`} className="button button__secondary">
                    <div className="inner">TO PAGE</div>
                </Link>
            </div> :
            <div className='find__error'>The character was not found. Check the name and try again</div>
    return (
        <Formik 
            initialValues={{name: ''}}
            validationSchema={Yup.object({
                name: Yup.string().required('This field is required')
            })}
            onSubmit={({name}) => onUpdateChar(name)}>
                <div className='find'>
                    <p>Or find a character by name:</p>
                    <Form className="find__form">
                        <Field name="name" type="text" placeholder='Enter name' />
                        <button className="button button__main">
                            <div className="inner">FIND</div>
                        </button>
                    </Form>
                    <FormikErrorMessage component="div" name="name" className='find__error'/>
                    {errorMessage}
                    {content}
                </div>
        </Formik>
    )
}

export default FindChar;