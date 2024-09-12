import { useState } from 'preact/hooks';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [isCustomerDropdownOpen, setIsCustomerDropdownOpen] = useState(false);
    const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
    const [isInvoiceDropdownOpen, setIsInvoiceDropdownOpen] = useState(false);

    const toggleCustomerDropdown = () => {
        setIsCustomerDropdownOpen(!isCustomerDropdownOpen);
        setIsInvoiceDropdownOpen(false)
        setIsProductDropdownOpen(false)
    };

    const toggleProductDropdown = () => {
        setIsProductDropdownOpen(!isProductDropdownOpen);
        setIsInvoiceDropdownOpen(false)
        setIsCustomerDropdownOpen(false)
    };

    const toggleInvoiceDropdown = () => {
        setIsInvoiceDropdownOpen(!isInvoiceDropdownOpen);
        setIsProductDropdownOpen(false)
        setIsCustomerDropdownOpen(false)
    };

    return (
        <div className="w-64 h-scree bg-gray-300 text-black  shadow-lg text-2xl flex flex-col pl-8 gap-2">
 

            <div  className="p-4 cursor-pointer " >
             <img className='w-28 h-32 ' src="https://salescrm.aarohiweblogger.com/assets/img/brand/logo.png" 
             alt="Aarohi sales" 
             />
            </div>
           
            <div className="p-4 cursor-pointer  hover:bg-blue-700  font-semibold" onClick={toggleCustomerDropdown}>
                Customer
            </div>
            {isCustomerDropdownOpen && (
                <div className="pl-3">
                    <Link to="customers">
                        <div className="p-2 hover:bg-blue-600">
                            Customers Details
                        </div>
                    </Link>
                    <Link to="new-customer">
                        <div className="p-2 hover:bg-blue-600">
                            New Customers
                        </div>
                    </Link>
                </div>
            )}

          
            <div className="p-4 cursor-pointer hover:bg-blue-700  font-semibold" onClick={toggleProductDropdown}>
                Products
            </div>
            {isProductDropdownOpen && (
                <div className="pl-3">
                    <Link to="products">
                        <div className="p-2 hover:bg-blue-600">
                            Products Details
                        </div>
                    </Link>
                    <Link to="add-product">
                        <div className="p-2 hover:bg-blue-600">
                            Add Product
                        </div>
                    </Link>
                </div>
            )}

        
            <div className="p-4 cursor-pointer hover:bg-blue-700  font-semibold" onClick={toggleInvoiceDropdown}>
                Invoice
            </div>
            {isInvoiceDropdownOpen && (
                <div className="pl-3">
                    <Link to="invoices">
                        <div className="p-2 hover:bg-blue-600">
                            Invoices History
                        </div>
                    </Link>
                    <Link to="add-invoice">
                        <div className="p-2 hover:bg-blue-600">
                            Add Invoice
                        </div>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Sidebar;
