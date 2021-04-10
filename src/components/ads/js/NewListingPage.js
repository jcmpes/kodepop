import NewListingForm from './NewListingForm';
import Layout from '../../layout';

import newListingPageStyle from '../css/NewListingPage.module.css';


const NewListingPage = ({ routerProps, ...props }) => {



    return (
        <Layout title={'New Listing'} routerProps={routerProps} {...props}>
            <NewListingForm routerProps={routerProps}></NewListingForm>
        </Layout>
    )
}

export default NewListingPage;