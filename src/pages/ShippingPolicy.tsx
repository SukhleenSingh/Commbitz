import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

function ShippingPolicy() {
    return (
        <div> 
            <Navbar />
            <div className="container mx-auto bg-[#111111] text-white px-28 py-20 ">
                <h1 className="text-5xl font-semibold mb-4 text-center">Shipping Policy</h1>
                <p className="mb-4 text-[17px]">
                    Commbitz’s eSIMs and services reach customers in over 200 countries. As it is an eSIM solution, shipping is not required. We will send QR codes through different modes of communication so that customers can scan and activate the cards. However, if we use physical shipping, please see the details below for a brief overview.
                </p>
                <h2 className="text-[17px]  mb-4">Shipping Methods</h2>
                <p className="mb-4 text-[17px]">
                    We offer the following shipping methods to cater to your needs:
                </p>
                <p className="mb-4 text-[17px]">
                Standard Shipping: Reliable and economical. Express Shipping: Fast and efficient for urgent requirements. International Shipping: Comprehensive coverage for global destinations.
                </p>
                <h2 className="text-[17px] mb-4">Delivery Time</h2>
                <p className="mb-4 text-[17px]">
                Standard Shipping: Estimated delivery time is 5-7 business days. Express Shipping: Estimated delivery time is 2-3 business days. International Shipping: Estimated delivery time varies by destination, typically between 7-14 business days.
                </p>
                <h2 className="text-[17px] mb-4">Order Processing Time</h2>
                <p className="mb-4 text-[17px]">
                    All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or holidays.
                </p>
                <h2 className="text-[17px]  mb-4">Tracking</h2>
                <p className="mb-4 text-[17px]">
                    Once your order is shipped, you will receive a shipping confirmation email with a tracking number. You can use this number to track the status of your shipment through our carrier’s website.
                </p>
                <h2 className="text-[17px] mb-4">Lost or Damaged Items</h2>
                <p className="mb-4 text-[17px]">
                    If your order is lost or arrives damaged, please get in touch with our customer service team at <a href="mailto:support@commbitz.com" className="text-blue-600">support@commbitz.com</a> within 7 days of receiving your order. We will assist you in filing a claim with the shipping carrier and arrange for a replacement or refund as necessary.
                </p>
                <h2 className="text-[17px] mb-4">Returns</h2>
                <p className="mb-4 text-[17px]">
                    If you encounter any issues related to shipping, such as incorrect items received, please contact our customer service team at <a href="mailto:support@commbitz.com" className="text-blue-600">support@commbitz.com</a> within 14 days of receiving your order. We will provide instructions for returning the items and arrange for a replacement or refund as appropriate.
                </p>
                <h2 className="text-[17px] mb-4">Additional Information</h2>
                <p className="mb-4 text-[17px]">
                    For any additional information regarding our shipping policy, please feel free to reach out to our customer service team at <a href="mailto:support@commbitz.com" className="text-blue-600">support@commbitz.com</a>. We are here to help and ensure your satisfaction with Commbitz.
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default ShippingPolicy;
