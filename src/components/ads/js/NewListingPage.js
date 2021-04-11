import NewListingForm from './NewListingForm';
import Layout from '../../layout';

const NewListingPage = ({ routerProps, ...props }) => {



    return (
        <Layout title={'New Listing'} routerProps={routerProps} {...props}>
            <NewListingForm routerProps={routerProps}></NewListingForm>
        </Layout>
    )
}

export default NewListingPage;