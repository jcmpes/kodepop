import NewListingForm from './NewListingForm';
import Layout from '../../layout';
import React from 'react';
import { tagsLoadAction } from '../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getTags, getUiError } from '../../../store/selectors';

const NewListingPage = ({ routerProps, ...props }) => {
  const allTags = useSelector(getTags);
  const dispatch = useDispatch();
  const error = useSelector(getUiError);

  React.useEffect(() => {
    dispatch(tagsLoadAction())
  }, [])


    return (
        <Layout title={'New Listing'} routerProps={routerProps} {...props}>
          {error && <div className="delete-error" style={{ backgroundColor: 'coral', padding: '1rem' }}>{error.message}</div>}
          <NewListingForm routerProps={routerProps} allTags={allTags}></NewListingForm>
        </Layout>
    )
}

export default NewListingPage;