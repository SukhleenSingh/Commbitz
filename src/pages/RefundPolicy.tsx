import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

function RefundPolicy() {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto bg-[#111111] text-white px-28 py-20 ">
                <h1 className="text-5xl font-semibold mb-4 text-center">Refund Policy</h1>
                <p className="mb-4 text-[17px]">
                    At Commbitz, we are dedicated to delivering high-quality eSIM services and ensuring customer satisfaction. This Refund Policy outlines the conditions under which you may request a refund. You agree to comply with this policy by purchasing and using our services.
                </p>
                
                <h2 className="text-[17px] mb-4">Eligibility for Refunds</h2>
                <p className="mb-4 text-[17px]">1.1. Service Activation Issues: If you experience problems activating your eSIM service, be sure to get in touch with our customer support team immediately. We will make every effort to resolve the issue. If the problem cannot be resolved within a reasonable time frame, you may be eligible for a full refund of the purchase price.</p>
                <p className="mb-4 text-[17px]">1.2. Service Unavailability: If the eSIM service is unavailable due to technical issues beyond your control, you may be eligible for a full or partial refund, depending on the extent of the unavailability.</p>
                <p className="mb-4 text-[17px]">1.3. Accidental Purchases: If you accidentally purchase an eSIM plan or select the wrong plan, you must contact us within 24 hours of the purchase to request a refund. Refunds for accidental purchases are subject to review and approval.</p>
                
                <h2 className="text-[17px] mb-4">Non-Eligibility for Refunds</h2>
                <p className="mb-4 text-[17px]">2.1. Change of Mind: Refunds will not be granted if you change your mind or decide you no longer want to use the eSIM service after activation.</p>
                <p className="mb-4 text-[17px]">2.2. Device Incompatibility: It is your responsibility to ensure that your device is unlocked and compatible with eSIM technology. Refunds will not be granted for issues arising from device incompatibility.</p>
                <p className="mb-4 text-[17px]">2.3. Misuse or Violation: If you misuse the service or violate the terms and conditions of use, you will not be eligible for a refund. Misuse includes, but is not limited to, sharing the eSIM with unauthorized users or using the service unlawfully.</p>
                
                <h2 className="text-[17px] mb-4">Refund Process</h2>
                <p className="mb-4 text-[17px]">3.1. Submitting a Request: To request a refund, you must submit a written request to our customer support team at <a href="mailto:support@commbitz.com" className="text-blue-600">support@commbitz.com</a>. The request should include your order number, the reason for the refund, and any relevant details or evidence supporting your claim.</p>
                <p className="mb-4 text-[17px]">3.2. Review and Approval: Upon receiving your refund request, our team will review it and may contact you for additional information. The review process typically takes 5-7 business days. Approval of refund requests is at the sole discretion of Commbitz.</p>
                <p className="mb-4 text-[17px]">3.3. Refund Method: If your refund request is approved, the refund will be processed using the original payment method. Refunds may take 7-10 business days to reflect in your account, depending on your payment provider.</p>
                
                <h2 className="text-[17px] mb-4">Partial Refunds</h2>
                <p className="mb-4 text-[17px]">
                In certain circumstances, partial refunds may be issued. For example, if you have used a portion of your data plan but encounter a service issue, we may provide a partial refund based on the unused portion of the plan. Partial refunds will be calculated on a pro-rata basis.
                </p>
                
                <h2 className="text-[17px] mb-4">Exceptional Cases</h2>
                <p className="mb-4 text-[17px]">
                In exceptional cases where the standard refund policy does not apply, we will handle refund requests on a case-by-case basis. This includes scenarios such as natural disasters, severe network outages, or other unforeseen events that may significantly impact the service.
                </p>
                
            </div>
            <Footer />
        </div>
    );
}

export default RefundPolicy;
