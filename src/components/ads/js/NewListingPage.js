import NewListingForm from './NewListingForm';
import Layout from '../../layout'


const NewListingPage = ({ routerProps, ...props }) => {



    return (
        <Layout title={'New Listing'} {...props}>
            <NewListingForm style={{ marginLeft: 'auto' }} routerProps={routerProps}></NewListingForm>
        </Layout>
    )
}

export default NewListingPage;