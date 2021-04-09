import { SelectField } from "../../shared";


const SaleSelect = ({ searchParams, setSearchParams }) => {

    
    

    const saleOptions = [
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
            sale: e.target.value
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