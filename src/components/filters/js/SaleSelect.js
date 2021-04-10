import { SelectField } from "../../shared";


const SaleSelect = ({ searchParams, setSearchParams }) => {    

    const saleOptions = [
        {
            name: "Compra o Venta",
            value: null
        },
        {
            name: "Venta",
            value: true
        },
        {
            name: "Compra",
            value: false
        }
    ]

    const handleSaleChange = (e) => {
        setSearchParams(oldValues => ({
            ...oldValues,
            sale: e.target.value === 'true' ? true : 
                e.target.value === 'false' ? false :
                null
        }))
    }

    return (
        <SelectField 
            options={saleOptions}
            value={searchParams.sale}
            onChange={handleSaleChange}
        />
    )
}

export default SaleSelect;