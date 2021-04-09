import { SelectField } from "../../shared";


const SaleSelect = ({ searchParams, setSearchParams }) => {

    
    

    const saleOptions = [
        // {
        //     name: "Todo",
        //     value: null
        // },
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
            sale: e.target.value === 'true' ? true : false
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