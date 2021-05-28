import NewListingForm from './NewListingForm';
import Layout from '../../layout';
import React from 'react';
import { tagsLoadAction } from '../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getTags } from '../../../store/selectors';

const NewListingPage = ({ routerProps, ...props }) => {
  const allTags = useSelector(getTags)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(tagsLoadAction())
  }, [])


    return (
        <Layout title={'New Listing'} routerProps={routerProps} {...props}>
            <NewListingForm routerProps={routerProps} allTags={allTags}></NewListingForm>
        </Layout>
    )
}

export default NewListingPage;