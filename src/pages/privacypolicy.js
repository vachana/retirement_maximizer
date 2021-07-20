import React from 'react';
import Layout from '../components/layout/Layout';
import LabelText from '../components/LabelText';
import { Link } from "gatsby"

const Index = () => (

   
        <section id="cpp" className="py-20 lg:pt-32">
          <div>
      <Link class="buttonPrv" to="/">HOME</Link>
    </div>
      <div className="container mx-auto text-center">
      {/* <AnchorLink className="px-4" href="#contactUs">
          About Us
        </AnchorLink> */}<br/><br/><br/>
        <LabelText className="text-black-800 colnew"><b>Retirement Maximizer</b></LabelText>
        <br/><br/>
        <div className="container mx-auto text-center">
        <LabelText className="text-black-800 policy"><b>Privacy Policy</b></LabelText>
          <p class="quest">Thank you for visiting our web site. This privacy policy tells you how we use personal information collected at this site. Please read this privacy policy before using the site or submitting any personal information. By using the site, you are accepting the practices described in this privacy policy. These practices may be changed, but any changes will be posted and changes will only apply to activities and information on a going forward, not retroactive basis. You are encouraged to review the privacy policy whenever you visit the site to make sure that you understand how any personal information you provide will be used.</p>
          <br/>
          <p class="quest">Note: the privacy practices set forth in this privacy policy are for this web site only. If you link to other web sites, please review the privacy policies posted at those sites.</p>         
        </div>
        <br/>
        <div className="container mx-auto text-center">
        <LabelText className="text-black-800 policy"><b>Collection of Information</b></LabelText>
          <p class="quest">We collect personally identifiable information, like names, postal addresses, email addresses, etc., when voluntarily submitted by our visitors. The information you provide is used to fulfill your specific request. This information is only used to fulfill your specific request, unless you give us permission to use it in another manner, for example to add you to one of our mailing lists.</p>
        </div>
        <br/>
        <div className="container mx-auto text-center">
        <LabelText className="text-black-800 policy"><b>Cookie Tracking Technology</b></LabelText>
          <p class="quest">The Site may use cookie and tracking technology depending on the features offered. Cookie and tracking technology are useful for gathering information such as browser type and operating system, tracking the number of visitors to the Site, and understanding how visitors use the Site. Cookies can also help customize the Site for visitors. Personal information cannot be collected via cookies and other tracking technology, however, if you previously provided personally identifiable information, cookies may be tied to such information. Aggregate cookie and tracking information may be shared with third parties.</p>
        </div>
        <br/>
        <div className="container mx-auto text-center">
        <LabelText className="text-black-800 policy"><b>Distribution of Information</b></LabelText>
          <p class="quest">We may share information with governmental agencies or other companies assisting us in fraud prevention or investigation. We may do so when: (1) permitted or required by law; or, (2) trying to protect against or prevent actual or potential fraud or unauthorized transactions; or, (3) investigating fraud which has already taken place. The information is not provided to these companies for marketing purposes.</p>
        </div>
        <br/>
        <div className="container mx-auto text-center">
        <LabelText className="text-black-800 policy"><b>Commitment to Data Security</b></LabelText>
          <p class="quest">Your personally identifiable information is kept secure. Only authorized employees, agents and contractors (who have agreed to keep information secure and confidential) have access to this information.</p>
        </div>
        <br/>
        <div className="container mx-auto text-center">
        <LabelText className="text-black-800 policy"><b>Privacy Contact Information</b></LabelText>
          <p class="quest">If you have any questions, concerns, or comments about our privacy policy you may contact us using the information below:</p>
          <p class="quest"><b>By E-mail : retirementmaximizer@gmail.com</b>
          </p>
          <br/>
          <p class="quest">We reserve the right to make changes to this policy. Any changes to this policy will be posted.</p>

        </div>
        <br/>
      </div>
    </section>
);

export default Index;