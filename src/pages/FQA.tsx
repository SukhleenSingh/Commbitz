import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PartnerSlider from "@/components/Partnerslider";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
    {
        question: "What is an eSIM?",
        answer:
            "Commbitz eSIM is a digital SIM card that allows users to connect to cellular networks without needing a physical SIM card. It enables travelers and users to easily access mobile data services in various countries without the hassle of swapping out physical SIM cards. The eSIM can be activated over the air by scanning a QR code, making it convenient for users to switch between different data plans or carriers.",
    },
    {
        question: "How Can Individuals Change the APN Settings?",
        answer: (<div className="text-white">
        <p>Updating your APN (Access Point Name) settings is essential for ensuring your device’s cellular connection functions correctly with Commbitz eSIM. Here’s a step-by-step guide to update APN settings across various devices.</p>
        
        <p className="font-semibold mt-2">iOS Devices</p>
        <ul className="list-disc ml-5">
          <li>Open <strong>Settings</strong>.</li>
          <li>Go to <strong>Cellular</strong> or <strong>Mobile Data</strong>.</li>
          <li>Tap on your <strong>Commbitz eSIM</strong> line.</li>
          <li>Tap on <strong>Cellular/Mobile Data Network</strong>.</li>
          <li>Under <strong>APN</strong>, enter the APN provided by Commbitz. Leave other fields blank.</li>
        </ul>
        
        <p className="font-semibold mt-4">Samsung Devices</p>
        <ul className="list-disc ml-5">
          <li>Open <strong>Settings</strong>.</li>
          <li>Select <strong>Connections</strong>.</li>
          <li>Tap on <strong>Mobile networks</strong>.</li>
          <li>Select <strong>Access Point Names</strong>.</li>
          <li>Enter the APN provided by Commbitz. Leave other fields blank.</li>
        </ul>
        
        <p className="font-semibold mt-4">Google Pixel Devices</p>
        <ul className="list-disc ml-5">
          <li>Go into <strong>Settings</strong>.</li>
          <li>Tap on <strong>Network & Internet</strong>.</li>
          <li>Go into <strong>Mobile Networks</strong>.</li>
          <li>Select the <strong>eSIM</strong> you want to modify.</li>
          <li>Scroll down and click on <strong>Advanced</strong> &gt; <strong>Access Point Names</strong>.</li>
          <li>Enter the APN provided by Commbitz. Leave other fields blank.</li>
        </ul>

        <p className="font-semibold mt-4">Other Devices</p>
        <p>For Huawei, Oppo, Motorola Razr, Sony, Xiaomi, and Windows devices, follow similar steps: Navigate to <strong>Settings</strong>, select <strong>Mobile Network</strong>, go to <strong>Access Point Names</strong>, and enter the APN provided by Commbitz.</p>
        
        <p className="mt-4">By following these steps, you can quickly configure your device’s APN settings to ensure a smooth connection with your Commbitz eSIM. If you encounter any issues, feel free to reach out to Commbitz Support for further assistance.</p>
      </div>
    ),
    },
    {
        question: "When Can Individuals Install the eSIM?",
        answer: (
            <div className="text-white">
              <p>
                We highly recommend <strong>installing your eSIM 24 hours before</strong> you plan to use your travel data. This gives you time to complete installation and resolve any issues before your trip.
              </p>
              <p><strong>Why Should You Install It 24 Hours in Advance?</strong></p>
              <ul className="list-disc pl-5">
                <li><strong>Avoid Last-Minute Issues:</strong> Resolve any technical difficulties before you need data.</li>
                <li><strong>Test Connectivity:</strong> Ensure the eSIM is properly installed.</li>
                <li><strong>Seamless Activation:</strong> Activate data as soon as you arrive at your destination.</li>
              </ul>
              <p><strong>What happens if I install my eSIM Within 24 hours of my travel date?</strong></p>
              <p>If installed earlier than 24 hours before travel, the activation timing can affect your plan’s validity.</p>
              <p><strong>Early Installation: What to Expect</strong></p>
              <ul className="list-disc pl-5">
                <li><strong>Immediate Activation:</strong> Some eSIMs activate as soon as they’re installed.</li>
                <li><strong>Validity Period Begins:</strong> The plan countdown may start from installation, not first use.</li>
              </ul>
              <p><strong>Important: Check Your eSIM’s Activation Policy</strong></p>
              <p>Before purchasing, verify your eSIM’s activation policy:</p>
              <ul className="list-disc pl-5">
                <li><strong>Search for Your Destination:</strong> Choose an eSIM suited for your location.</li>
                <li><strong>Select Your Plan:</strong> Ensure it meets your data and duration needs.</li>
                <li><strong>Review Activation Details:</strong> Understand when validity begins.</li>
              </ul>
              <p>If your eSIM activates earlier than expected, reach out to customer support.</p>
            </div>
          ),
    },
    {
        question: "What devices support eSIM?",
        answer: (<div className="text-white"><p>To use an eSIM, your device must be carrier-unlocked and eSIM-compatible. Please refer to the list below to see if your device supports eSIM technology. Note that country and carrier-specific restrictions may apply.</p>
            <p><strong>Important Notes:</strong></p>
            <p>This list will be updated regularly as more eSIM-compatible devices are released.
            While we strive for completeness, this list is not exhaustive. Your device may still be eSIM-compatible even if it is not listed.</p>
            <p><strong>APPLE</strong></p>
            <p><strong>iPhone Models:</strong></p>
            <p>iPhone 16, 16 Plus, 16 Pro, 16 Pro Max</p>
            <p>iPhone 15, 15 Plus, 15 Pro, 15 Pro Max</p>
            <p>iPhone 14, 14 Plus, 14 Pro, 14 Pro Max</p>
            <p>iPhone 13, 13 Mini, 13 Pro, 13 Pro Max</p>
            <p>iPhone 12, 12 Mini, 12 Pro, 12 Pro Max</p>
            <p>iPhone 11, 11 Pro, 11 Pro Max</p>
            <p>iPhone XS, XS Max</p>
            <p>iPhone XR</p>
            <p>iPhone SE (2020 and 2022)</p>
            <p><strong>iPad Models:</strong></p>
            <p>iPad (from 7th generation)</p>
            <p>iPad Air (from 3rd generation)</p>
            <p>iPad Pro, 11-inch (from 1st generation)</p>
            <p>iPad Pro 12.9-inch (from 3rd generation)</p>
            <p>iPad Mini (from 5th generation)</p>
            <p><strong>Devices without eSIM capability:</strong></p>
            <p>iPhone models from Mainland China.</p>
            <p>iPhone models from Hong Kong and Macao (with exceptions for iPhone 13 Mini, iPhone 12 Mini, iPhone SE 2020, and iPhone XS).</p>
            <p><strong>For devices purchased in Turkey:</strong></p>
            <p>If set up after June 23, 2020, your eSIM will activate upon installation. Contact your carrier if not enabled.</p>
            <p>For setups before June 23, 2020, follow the activation steps linked&nbsp;here. This may require erasing your device’s data—ensure you back up beforehand.</p>
            <p><strong>Note: Only iPads with Wi-Fi + Cellular features support eSIM.</strong></p>
            <p><strong>SAMSUNG</strong></p>
            <p>Galaxy Models:</p>
            <p>Galaxy A55 5G</p>
            <p>Galaxy A54 5G</p>
            <p>Galaxy A35 5G</p>
            <p>Galaxy S24, S24+, S24 Ultra</p>
            <p>Galaxy S23, S23 FE, S23+, S23 Ultra</p>
            <p>Galaxy S22 5G, S22+ 5G, S22 Ultra 5G</p>
            <p>Galaxy S21 5G, S21+ 5G, S21 Ultra 5G</p>
            <p>Galaxy S20, S20+, S20 5G, S20 Ultra 5G</p>
            <p>Galaxy Z Flip series</p>
            <p>Galaxy Z Fold series</p>
            <p>Galaxy Note 20 series</p>
            <p>**Devices without eSIM **</p>
            <p>All Galaxy devices from China, Hong Kong, and Taiwan.</p>
            <p>All Galaxy FE models, except Galaxy S23 FE.</p>
            <p>USA models of Galaxy S20, S21, and Note 20 Ultra.</p>
            <p>Most Samsung Galaxy devices from South Korea do not support eSIMs, with some exceptions.</p>
            <p><strong>GOOGLE PIXEL</strong></p>
            <p>Pixel 9 series</p>
            <p>Pixel 8 series</p>
            <p>Pixel 7 series</p>
            <p>Pixel 6 series</p>
            <p>Pixel 5, 5a</p>
            <p>Pixel 4 series</p>
            <p>Pixel 3 series</p>
            <p>Pixel Fold</p>
            <p><strong>Devices without eSIM capability:</strong></p>
            <p>Pixel 3 models from Australia, Taiwan, and Japan, or purchased with service from US or Canadian carriers other than Sprint and Google Fi.
            Pixel 3a models purchased in Southeast Asia and with Verizon service.</p>
            <p><strong>OTHER BRANDS</strong></p>
            <p><strong>Hammer:</strong>&nbsp;Explorer PRO, Blade 3, Blade 5G, and others.</p>
            <p><strong>Honor:</strong>&nbsp;Magic series and others.</p>
            <p><strong>Huawei:</strong>&nbsp;P40 series (excluding P40 Pro+ and devices purchased in China).</p>
            <p><strong>Motorola:</strong>&nbsp;Various Edge and Razr models.</p>
            <p><strong>Nokia:</strong>&nbsp;G60, XR21, X30.</p>
            <p><strong>OnePlus:</strong>&nbsp;OnePlus 12, OnePlus 11.</p>
            <p><strong>Oppo:</strong>&nbsp;Reno series and others.</p>
            <p><strong>Rakuten:</strong>&nbsp;Big, Mini, and Hand.</p>
            <p><strong>Sharp:</strong>&nbsp;AQUOS series.</p>
            <p><strong>Sony:</strong>&nbsp;Xperia 1 V, Xperia 10 IV (availability varies).</p>
            <p><strong>Vivo:</strong>&nbsp;X100 Pro and others.</p>
            <p><strong>Xiaomi:</strong>&nbsp;14 Pro, 13 series, and others.</p>
            <p><strong>For&nbsp;Windows 10/11 laptops:</strong></p>
            <p>Your PC needs to have Windows 10 version 1703 or later and must be LTE-ready.</p>
            <p>Contacting Your Carrier or Manufacturer</p>
            <p>eSIM support may vary depending on your device’s region and carrier. We recommend contacting your carrier or device manufacturer to confirm whether your specific device is eSIM-capable.</p>
            <p>For more information or assistance, feel free to reach out to our support team.</p>
            </div>),
    },
    {
        question: "How do Individuals Set a Data Limit on their Android device?",
        answer: (<div className="text-white"><p>Setting a mobile data limit on your Android device can help you manage your data usage effectively. You can set a billing cycle, add a data limit, and receive a warning before reaching the limit. Follow these instructions to set up a mobile data limit on your Android device.</p>
            <p><strong>For Samsung Galaxy Devices:</strong></p>
            <p>Open the <strong>Settings</strong> app: Locate and open the&nbsp;Settings&nbsp;app on your device.</p>
            <p><strong>Tap Connections</strong>: Scroll down and select&nbsp;Connections.</p>
            <p>Tap <strong>Data Usage</strong>: Choose&nbsp;Data Usage&nbsp;from the list.</p>
            <p>Ensure <strong>Mobile Data is ON</strong>: Verify that the&nbsp;Mobile Data&nbsp;switch is turned ON.</p>
            <p>Tap <strong>Billing Cycle and Data Warning</strong>: Select&nbsp;Billing cycle and data warning&nbsp;to access more settings.</p>
            <p><strong>Set the Billing Cycle</strong>: Tap&nbsp;Start billing cycle&nbsp;and set the date. This should align with your data plan’s billing cycle or your arrival date in a new destination if you’re using an eSIM for travel.</p>
            <p><strong>Enable Data Warning:</strong></p>
            <p>Toggle on&nbsp;Set data warning.
            Specify a data warning threshold. For example, if your eSIM package includes 5 GB of data, you can set a warning at 3 GB to remind you as you approach the limit.</p>
            <p><strong>Enable Data Limit:</strong></p>
            <p>Toggle on&nbsp;Set data limit.
            Enter your desired data limit. Once this limit is reached, your mobile data will automatically turn off, preventing further usage. For instance, if you want to limit your usage to 5 GB, enter&nbsp;5 GB&nbsp;as the limit.</p>
            <p><strong>For Google Pixel Devices:</strong></p>
            <p>Open the <strong>Settings</strong> app: Find and open the&nbsp;Settings&nbsp;app on your device.</p>
            <p>Tap <strong>Network &amp; Internet</strong>: Scroll down and select&nbsp;Network &amp; Internet.</p>
            <p>Tap <strong>SIMs</strong>: Choose&nbsp;SIMs&nbsp;to access your mobile data settings.</p>
            <p>Ensure <strong>Mobile Data is ON</strong>: Verify that the&nbsp;Mobile Data&nbsp;switch is turned ON.</p>
            <p><strong>Tap Data Warning &amp; Limit</strong>: Select&nbsp;Data warning &amp; limit&nbsp;to configure data usage alerts.</p>
            <p>Set the Mobile Data Usage Cycle: Tap&nbsp;Mobile data usage cycle&nbsp;and set the start date for your billing cycle. If you’re traveling, set the date according to your arrival in the destination country.</p>
            <p>Enable Data Warning:</p>
            <p>Toggle on&nbsp;Set data warning.
            Specify the data warning threshold. For instance, if your eSIM package includes 5 GB of data, you might set a warning at 3 GB to get a notification when you’re nearing the limit.</p>
            <p>Enable Data Limit:</p>
            <p>Toggle on&nbsp;Set data limit.
            Enter your desired data limit. This feature will turn off mobile data automatically once you reach the specified limit. For example, set it to&nbsp;5 GB&nbsp;if you want to restrict usage to that amount.</p>
            <p>By setting a data limit, you can avoid overusing your data and stay within the limits of your plan.</p>
            </div>),
    },
    {
        question: "How do Individuals Change their eSIM label?",
        answer: (
            <div className="text-white">
              <p>When you install your new eSIM, your device will automatically assign a default label to it. To make it easier to identify and manage multiple eSIMs, you can rename the eSIM in your device settings after installation. Customizing the label allows you to quickly distinguish between different eSIMs, whether for various regions or purposes.</p>
              
              <p className="font-semibold mt-2">Recommended Naming Conventions</p>
              <ul className="list-disc ml-5">
                <li>“USA eSIM”</li>
                <li>“Travel eSIM”</li>
                <li>“Commbitz eSIM”</li>
              </ul>
    
              <p className="font-semibold mt-4">iOS Device</p>
              <ul className="list-disc ml-5">
                <li><strong>Open Settings:</strong> Tap on the <strong>Settings</strong> app on your home screen.</li>
                <li><strong>Select Cellular or Mobile:</strong> Scroll down and tap on <strong>Cellular</strong> (or <strong>Mobile</strong> on some devices).</li>
                <li><strong>Choose the eSIM:</strong> Under the <strong>SIMs</strong> section, select the eSIM you wish to rename.</li>
                <li><strong>Tap Cellular Plan Label:</strong> Find and tap on <strong>Cellular Plan Label.</strong></li>
                <li><strong>Enter Your Preferred Name:</strong> Tap on the current label and enter your desired name in the <strong>Custom Label</strong> field.</li>
              </ul>
    
              <p className="font-semibold mt-4">Samsung Galaxy Device</p>
              <ul className="list-disc ml-5">
                <li><strong>Go to Settings:</strong> Open the <strong>Settings</strong> app on your Samsung Galaxy device.</li>
                <li><strong>Tap on Connections:</strong> Select the <strong>Connections</strong> option from the list.</li>
                <li><strong>Tap on SIM Manager:</strong> Find and tap on <strong>SIM Manager.</strong></li>
                <li><strong>Select the eSIM Profile:</strong> Choose the eSIM profile that you wish to edit.</li>
                <li><strong>Rename the eSIM:</strong> Enter your preferred name for the eSIM label.</li>
                <li><strong>Tap Done:</strong> Once you’ve entered the new name, tap <strong>Done</strong> to save the changes.</li>
              </ul>
    
              <p className="font-semibold mt-4">Google Pixel Device</p>
              <ul className="list-disc ml-5">
                <li><strong>Go to Settings.</strong> Open your device’s main Settings menu.</li>
                <li><strong>Tap on Network & Internet.</strong> This section manages all network-related settings.</li>
                <li><strong>Tap on SIMs.</strong> A list of available SIMs (both physical and eSIM) will appear.</li>
                <li><strong>Select the preferred eSIM you wish to edit.</strong></li>
                <li><strong>Tap the Pencil Icon.</strong> This icon allows you to make changes to your eSIM details.</li>
                <li><strong>Rename the eSIM.</strong> Type in the new name for your eSIM.</li>
                <li>Optionally, you can also change the label’s color to further differentiate it.</li>
                <li><strong>Tap Save.</strong> Once you’re satisfied with the new name, tap <strong>Save</strong> to apply your changes.</li>
              </ul>
    
              <p className="mt-4">By customizing the label of your eSIM, you can:</p>
              <ul className="list-disc ml-5">
                <li>Easily distinguish between multiple eSIMs for different regions or purposes.</li>
                <li>Enhance the organization of your device settings.</li>
                <li>Quickly identify the eSIM you wish to use without confusion.</li>
              </ul>
            </div>
          ),
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-[#1c2b35] text-white">
            <Navbar />
            {/* Header Section */}
            <div className="bg-[#000000] py-8 justify-center items-center ">
                <div className="bg-[#03fe9d] text-black text-left py-6 px-8 mx-28 rounded-2xl ">
                    <div className="flex justify-center items-center">
                        <h1 className="text-5xl text-left mr-24 font-bold">Do you have more questions?</h1>
                        <p className="text-2xl mt-2 text-left">
                            You can email us your question, we are <br /> available 24/7 to answer all your questions.
                        </p>
                    </div>
                    <button className="mt-4 bg-black text-[#03fe9d] px-4 py-2 rounded-full shadow-lg">
                        Direct Chat
                    </button>
                </div>
            </div>
            {/* FAQ Section */}
            <div className="mx-28 my-12 rounded-lg overflow-hidden border border-black">
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className={`border-b border-[#28da8d] last:border-b-0`}
                    >
                        <button
                            className="w-full bg-[#03fe9d] text-black text-left py-3 px-4 flex justify-between items-center"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="font-normal text-lg py-4 px-2">{faq.question}</span>
                            {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                        </button>
                        {openIndex === index && (
                            <div className="bg-black text-white p-4">{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>

            <PartnerSlider/>
                
            <Footer />
        </div>
    );
};

export default FAQ;
