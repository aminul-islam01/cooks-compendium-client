import Button from 'react-bootstrap/Button';
import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorImage from '../../images/404.png'

const ErrorPage = () => {
    const { error, status } = useRouteError()
  return (
    <section className='d-flex align-items-center p-4 section'>
      <div className='px-2 mx-auto my-3'>
      {/* <FontAwesomeIcon icon={faFaceGrinStars} className='error-emoji' />  */}
        <div className='max-w-md text-center'>
          <img style={{width:'50vw', height:'70vh'}} src={errorImage} alt="" />
          <p className='fs-2 fw-bold md:text-3xl text-danger mb-4'>
            {error?.message}
          </p>
          <Link to='/'>
            <Button variant='primary'>Back to homepage</Button>
          </Link>
        </div>
      </div>
    </section>
  )
};

export default ErrorPage;