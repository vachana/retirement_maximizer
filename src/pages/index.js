import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import ContactForm from '../components/ContactForm'

const Index = () => (

  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <b class = "sz">WEALTH, PROSPERITY & WINE SERIES</b>
          <p class = "szone"><b>PREPARING FOR RETIREMENT SEMINAR</b></p>
           
          <br/><br/><br/>
          <div class="circle">July 28</div>
          {/* <p className="text-xl lg:text-2xl mt-6 font-light">
            <p><br/><br/><br/><b>NO CHARGE TO ATTEND</b></p>
          </p> */}
          <br/><br/><br/><br/><br/>
          <a href= "#contactUs" class="button"><b>REGISTER NOW!</b></a>
          <br/><br/><br/>
        <div class="rct">NO CHARGE TO ATTEND!</div>

          {/* <p className="mt-8 md:mt-12">
            <Button size="lg">Get Started</Button>
          </p> */}
          <br/><br/><br/><br/><br/>
          {/* <p className="mt-4 text-gray-600">Seating is limited, so sign up today!</p> */}
        </div>
        <div className="lg:w-1/2">
        <img class ="img" src="https://ibb.co/QbQT14f" alt="Retirement"/>
        <p class = "sz"><b>University Golf Club <br/>Salons I and II<br/></b></p>
        5185 University Blvd,Vancouver,BC,V6T 1X5<br/>
        <b>Seating is limited, so sign up today!</b>
        </div>
      </div>
    </section>
    <section id="aboutus" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        {/* <LabelText className="text-black-800 col"><b></b></LabelText> */}
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/2 quest">
            <p ><b>COVID-19 Precautions: The health and safety of our attendees,hosts, and general public is our number one priority.All of our live events will adhere to all local and venue-specific precautions and guidelines including,but not limited to social distancing,sanitation,and capacity limitations.</b></p>
            <p>
              <br/>
              <b class = "sz">Course Description : </b>
              <br/>
              <p class= "quest">You'll leave this workshop having learned the differences, benefits and nuances of corporate, private and public retirement savings plans. You'll also learn about "3 D's" of tax planning and how to make it work precisely for you and your family.We'll discuss withdrawing your income and preserving your hard-earned assets.</p>
              <br/><p class="quest">The taxman is always going to get paid, but there are things you can do to minimize the amount he gets and to make the most of your hard-earned retirement income.</p>
            </p>
            </div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
            
          <div className="w-full sm:w-1/2  box" >
            <h2 class="cent"><u>TOPICS TO BE COVERED:</u></h2>
            <ul >
              <li>&nbsp;&nbsp;&#xbb;&nbsp;Learn the ins and outs of government,corporate and personal retirement investments and plans.</li>
              <li>&nbsp;&nbsp;&#xbb;&nbsp;Find out about tax planning basics and strategies that could allow you to keep more of your retirement income.</li>
              <li>&nbsp;&nbsp;&#xbb;&nbsp;Withdrawal 101: What you need to know about how to get your money(hint:one size does NOT fit all!).</li>
              <li>&nbsp;&nbsp;&#xbb;&nbsp;You CAN protect more of your assets with careful with careful planning and a working knowledge of the tax system.</li>
              <li>&nbsp;&nbsp;&#xbb;&nbsp;By keeping your net income low,you can reap benefits like preserving tax credits,government benefits and being in a lower tax bracket.</li>
              <li>&nbsp;&nbsp;&#xbb;&nbsp;There is no right way to planfor retiremet - but the wrong way could cost you.</li>
              <li>&nbsp;&nbsp;&#xbb;&nbsp;By knowing how and why the system works as it does, you can plan for a stree-free and relaxing retirement.</li>
              <li>&nbsp;&nbsp;&#xbb;&nbsp;You can arm yourself with the knowledge that will point you on the path to retirement now.</li>
            </ul> 
          </div>
         
        </div>
        <div>
            <p>
              <br/><br/>
              <b class = "sz">Attend this seminar and learn about : </b>
              <br/><br/>
              <p class= "quest">Private retirement plans - You can set yourself up to manage and protect your assets and enjoy your golden years.</p>
              <br/><p class="quest">Don't miss out on a chance to learn from tax and retirement experts,get your questions answered and walk away with information that will potentially save you not only money but worry and stress.</p>
              <br/><p class="quest">You've worked hard for decades. On the verge of retirement, you may have questions about your savings and how to best protect them.You might also want to learn more about which government benefits you're entitled to - and when you can start receiving them.</p>
              <br/><p class="quest">Join us at the <b>University Golf Club on Wednesday, July 28th from 7:00 PM - 8:30 PM</b> for this educational workshop.There is no charge to attend.This event is more suitable for those with $500,000 of investable assets or more.</p>
              <br/><p class="quest">Our goal is to teach you how to plan, what you need to know about the tax system and how to set yourself up for success so you can optimize your retirement income.</p>
            </p>
          </div>
      </div>
    </section>
    {/* <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service One</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service Two</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service Three</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section> */}
    {/* <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Market Analysis</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Our team of enthusiastic marketers will analyse and evaluate how your company stacks
            against the closest competitors
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Design And Plan Your Business Growth Steps
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Once the market analysis process is completed our staff will search for opportunities
            that are in reach
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Search For Performance Optimization
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            With all the information in place you will be presented with an action plan that your
            company needs to follow
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
      <p className="mt-8 text-xl font-light">
        Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section> */}
    <section id="cpp" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-black-800 col"><b>Canadian Pension Plan</b></LabelText>
        <div >
          <p class="quest">The Canadian Pension Plan (CPP) provides contributors a replacement of earnings in retirement and in cases of death or disability.It applies to almost all individuals who work in Canada outside Quebec.</p>
          <br/>
          <p class="quest">The CPP provides a monthly benefit to eligible applicants.You must apply for CPP,it does not start automatically.The CPP is based on how much you have contributed and how long you have been making contributions to the CPP at the time you become eligible.</p>         
        </div>
      </div>
    </section>
    <section id="oas" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-black-800 col"><b>Old Age Security</b></LabelText>
        <div >
          <p class="quest">The Old Age Security(OAS). program is one of the cornerstones of Canada's public retirement income system. The objective of the OAS program is to provide a base upon which individuals can complement other income from other sources,such as the Canada Pension or Quebec Pension Plan,employer-sponsored pension plans and personal registered retirement savings plan,as well as investments and personal savings,to address their financial circumstances.</p>
          <br/>
          <p class="quest"> Paymount amounts for the Old Age Security benefits are based on your marital status and level of income. They are not considered taxable income.</p>         
        </div>
      </div>
    </section>
    <section id="faq" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-black-800 col"><b>FAQ</b></LabelText>
        <div >
          <p class="quest"><b>Who is Retirement Maximizer?</b>.</p>
          <p class="quest">Retirement Maximizer is an educational resource for those nearing retirement.Retirement Maximizer provides educational seminars open to the public across Canada. </p>        
          <br/>
          <p class="quest"><b>How much does the seminar cost?</b></p> 
          <p class="quest">There is no charge to attend our educational seminar.</p>
          <br/>
          <p class="quest"><b>Is Retirement Maximizer affiliated with any government agency?</b></p> 
          <p class="quest">No, we are not affiliated with any government entities.</p>
          <br/>
          <p class="quest"><b>Who are the presenters at the seminars?</b></p> 
          <p class="quest">The majority of our presenters are local professionals who come from a financial background(CPAs,financial advisors, attorneys and other knowledgeable professionals). CPP & OAS play an important role in your retirement income plan, along with your overall financial  strategy. With OAS & CPP playing a major part in your retirement income,it only makes sense to learn from someone coming from a financial background.</p>
          <br/>
          <p class="quest"><b>What does the presenter get out of this?</b></p> 
          <p class="quest">Our seminars are focused around community education. While the presenter is given a chance to educate their community, often they find there are locals who are nearing retirement who may need help with their retirement planning in one way or another. If you are interested in working directly with the professional, they may charge a fee or commission. Your attendance to any of our seminars in no way obligates you to engage the presenter in any service. This allows the presenter to potentially grow their practice,all while  educating the community.</p>
          <br/>
          <p class="quest"><b>Is there a "sales" pitch?</b></p> 
          <p class="quest">No, our seminars are strictly educational. One of the most frequent comments we hear from past attendees is how nice it is to go to a class and receive valuable information without being 'sold' something. While the presenter may hand out their business cards or brochures for services they offer,there is no obligation to engage with any Retirement Planning speaker regarding their services during or after the seminar.</p>
          <br/>
          <p class="quest"><b>What will i learn at this seminar</b></p> 
          <p class="quest">
          At our seminars, we will discuss : 
          <ul>
              <li>&#xbb;&nbsp;Wat government pensions are you eligible for?</li>
              <li>&#xbb;&nbsp;How much will you receive and when?</li>
              <li>&#xbb;&nbsp;How registered, non-registered, and TFSA income effects government benefits.</li>
              <li>&#xbb;&nbsp;Basics of the Income Tax Act and tax levels.</li>
              <li>&#xbb;&nbsp;Preparing for retirement to maximize benefit income.</li>
            </ul> 
          </p>
        </div>
      </div>
    </section>
    <section id="contactUs" className="container mx-auto my-20 py-24 bg-gray-500 rounded-lg text-center">
    <header className="major">
        <b class = "col">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;REGISTER NOW</b>
        <ContactForm></ContactForm>
    </header>
</section>
  </Layout>
);

export default Index;
