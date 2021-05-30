import { SelectField } from "../../shared";


const SaleSelect = ({ searchParams, setSearchParams }) => {    

    const handleSaleChange = (e) => {
        setSearchParams(oldValues => {
          console.log(e.target.value)
          return {
            ...oldValues,
            sale: e.target.value === 'true' ? true : 
                e.target.value === 'false' ? false :
                null
          }
        })
    }

    return (
        <SelectField 
            options={[null, true, false]}
            value={searchParams.sale}
            onChange={handleSaleChange}
        />
    )
}

export default SaleSelect;