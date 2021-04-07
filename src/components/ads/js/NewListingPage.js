import NewListingForm from './NewListingForm';
import Layout from '../../layout'


const NewListingPage = ({ routerProps }) => {



    return (
        <Layout title={'New Listing'}>
            <NewListingForm style={{ marginLeft: 'auto' }} routerProps={routerProps}></NewListingForm>
        </Layout>
    )
}

export default NewListingPage;