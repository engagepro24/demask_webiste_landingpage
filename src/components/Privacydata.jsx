import React from "react";

function Privacydata() {
    return (
        <div className="w-full min-h-screen bg-[#0A0D14] text-white px-6 md:px-16 py-10">
            <div className="max-w-4xl mx-auto">

                {/* TITLE */}
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                    Privacy Policy — De-mask (Decentralized Meeting Application)
                </h1>

                <p className="text-gray-300 mb-6 leading-7">
                    De-mask (“we”, “our”, or “the application”) is a decentralized mobile
                    meeting platform designed to provide secure and reliable communication
                    tools. This Privacy Policy explains how we collect, use, and protect
                    your information when you use our mobile application.
                </p>

                {/* SECTION 1 */}
                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>

                <h3 className="text-xl font-medium mb-2">a. User-Provided Information</h3>
                <ul className="list-disc ml-6 text-gray-300 mb-4 space-y-1">
                    <li>Name or display name</li>
                    <li>Email address or mobile number (if required for login)</li>
                    <li>Profile details you choose to upload</li>
                </ul>

                <h3 className="text-xl font-medium mb-2">b. Automatically Collected Information</h3>
                <ul className="list-disc ml-6 text-gray-300 mb-4 space-y-1">
                    <li>Device type and operating system</li>
                    <li>App usage data (features used, time spent)</li>
                    <li>Non-identifiable system logs</li>
                </ul>

                <h3 className="text-xl font-medium mb-2">c. Meeting Data</h3>
                <ul className="list-disc ml-6 text-gray-300 mb-4 space-y-1">
                    <li>Meeting titles, schedules, and metadata</li>
                    <li>Chat messages, if enabled</li>
                    <li>Audio/video content is not stored unless recording is enabled</li>
                </ul>

                <h3 className="text-xl font-medium mb-2">d. Decentralized Network Data</h3>
                <p className="text-gray-300 mb-4 ml-2">
                    Since De-mask uses decentralized infrastructure:
                </p>
                <ul className="list-disc ml-6 text-gray-300 mb-6 space-y-1">
                    <li>Data may be temporarily routed across distributed nodes</li>
                    <li>No single central server permanently stores your communication</li>
                </ul>

                {/* SECTION 2 */}
                <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
                <ul className="list-disc ml-6 text-gray-300 mb-6 space-y-1">
                    <li>Provide and maintain meeting features</li>
                    <li>Improve app performance and user experience</li>
                    <li>Enable communication between participants</li>
                    <li>Send important notifications</li>
                    <li>Enhance security and prevent unauthorized access</li>
                </ul>

                {/* SECTION 3 */}
                <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Storage & Security</h2>
                <ul className="list-disc ml-6 text-gray-300 mb-6 space-y-1">
                    <li>All communications are encrypted</li>
                    <li>Decentralized routing reduces vulnerabilities</li>
                    <li>Only essential user data is stored</li>
                    <li>No sensitive data is sold or shared</li>
                </ul>

                {/* SECTION 4 */}
                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Sharing of Information</h2>
                <p className="text-gray-300 mb-2">We do not share your information with advertisers or external organizations.</p>
                <p className="text-gray-300 mb-4">Information may be shared only when:</p>
                <ul className="list-disc ml-6 text-gray-300 mb-6 space-y-1">
                    <li>Required by law</li>
                    <li>Necessary to prevent misuse or security breaches</li>
                    <li>You enable features like sharing meeting links</li>
                </ul>

                {/* SECTION 5 */}
                <h2 className="text-2xl font-semibold mt-8 mb-4">5. User Rights</h2>
                <ul className="list-disc ml-6 text-gray-300 mb-6 space-y-1">
                    <li>Access your data</li>
                    <li>Update your information</li>
                    <li>Delete your account</li>
                    <li>Opt out of notifications</li>
                </ul>

                {/* SECTION 6 */}
                <h2 className="text-2xl font-semibold mt-8 mb-4">6. Children’s Privacy</h2>
                <ul className="list-disc ml-6 text-gray-300 mb-6 space-y-1">
                    <li>De-mask is not intended for users under 13</li>
                    <li>We do not knowingly collect data from minors</li>
                </ul>

                {/* SECTION 7 */}
                <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to This Policy</h2>
                <p className="text-gray-300 mb-6">
                    We may update this Privacy Policy. Users will be notified in-app when major changes occur.
                </p>

                {/* CONTACT */}
                <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
                <p className="text-gray-300 mb-1">Email: demask747@gmail.com</p>
                <p className="text-gray-300 mb-6">Support: Available in-app</p>

                {/* TERMS AND CONDITIONS */}

            </div>
        </div>
    );
}

export default Privacydata;
