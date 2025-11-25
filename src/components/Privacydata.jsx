import React from "react";

function Privacypolicy() {
    return (
        <div className="w-full min-h-screen bg-[#0A0D14] text-white px-5 md:px-20 py-10 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

            <div className="space-y-6 leading-relaxed">

                <p>
                    This Privacy Policy explains how <strong>Decentralized Meetings & Shared Knowledge Network</strong> (“we”, “our”, “us”)
                    collects, uses, and protects your personal information when you use our website/app.
                </p>

                <h2 className="text-xl font-semibold">1. Information We Collect</h2>
                <p>We may collect the following types of information:</p>

                <ul className="list-disc ml-6">
                    <li><strong>Personal Information:</strong> Name, Email, Phone, Login details</li>
                    <li><strong>Usage Data:</strong> IP address, device info, browser type, visited pages</li>
                    <li><strong>Uploaded Data:</strong> Images, documents, form data (if applicable)</li>
                </ul>

                <h2 className="text-xl font-semibold mt-4">2. How We Use Your Information</h2>
                <ul className="list-disc ml-6">
                    <li>To provide and maintain our services</li>
                    <li>To improve user experience and platform performance</li>
                    <li>To communicate updates, notifications, or alerts</li>
                    <li>To process payments or transactions</li>
                    <li>To prevent fraud and ensure security</li>
                </ul>

                <h2 className="text-xl font-semibold mt-4">3. Cookies & Tracking</h2>
                <p>
                    We use cookies to enhance your experience, remember preferences, and analyze website traffic.
                    You can disable cookies from your browser settings.
                </p>

                <h2 className="text-xl font-semibold mt-4">4. Sharing of Information</h2>
                <p>
                    We do not sell your personal data.
                    Information may be shared only with service providers or legal authorities when required.
                </p>

                <h2 className="text-xl font-semibold mt-4">5. Data Security</h2>
                <p>
                    We use industry-standard measures to protect your data, but no system is fully secure.
                </p>

                <h2 className="text-xl font-semibold mt-4">6. Your Rights</h2>
                <ul className="list-disc ml-6">
                    <li>Access your personal data</li>
                    <li>Update or correct information</li>
                    <li>Request deletion of your data</li>
                    <li>Withdraw consent at any time</li>
                    <li>Request a copy of your saved data</li>
                </ul>

                <h2 className="text-xl font-semibold mt-4">7. Third-Party Links</h2>
                <p>
                    Our website may include links to other websites. We are not responsible for their privacy policies.
                </p>

                <h2 className="text-xl font-semibold mt-4">8. Children's Privacy</h2>
                <p>
                    We do not knowingly collect information from children under 13 years of age.
                </p>

                <h2 className="text-xl font-semibold mt-4">9. Updates to This Policy</h2>
                <p>
                    We may update this policy from time to time. Continued use of the service means you accept the changes.
                </p>

                <h2 className="text-xl font-semibold mt-4">10. Contact Us</h2>
                <p>
                    If you have questions about this Privacy Policy, contact us at:
                    <br />
                    <strong>Email:</strong> your-email@example.com
                </p>

            </div>
        </div>
    );
}

export default Privacypolicy;
