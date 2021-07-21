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
import { StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from 'gatsby'
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

  const width = 1200
  const height = 800
const Index = () =>{
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "bg_retmax.jpeg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF, JPG]
            )
          }
        }
      }
    `
  )
  const image = getImage(placeholderImage)
  console.log('image ', image);

  // Use like this:
  const bgImage = convertToBgImage(image)
  console.log('bg-image ', bgImage);

  // const imgdata = placeholderImage.childImageSharp.gatsbyImageData
  return (
  
    
    <Layout>
      <section className="pt-20 md:pt-20">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2 p-3">
            <b class = "szplus">PREPARING FOR RETIREMENT SEMINAR</b>
            <p class = "szone"><b>WEALTH, PROSPERITY & WINE SERIES</b></p>
             
            <br/><br/><br/><br/>
            <div class="circle"> <p class="topdate">&nbsp;&nbsp;&nbsp;July28<sup>th</sup></p>
            <p class="toptime">&nbsp;&nbsp;&nbsp;6:30pm to 8:30pm</p>
            </div>
            {/* <p className="text-xl lg:text-2xl mt-6 font-light">
              <p><br/><br/><br/><b>NO CHARGE TO ATTEND</b></p>
            </p> */}
            <br/><br/><br/><br/><br/>
            
            <br/>
            <a href= "#contactUs" class="button"><b>REGISTER NOW!</b></a>
  
            <div className="w-12 mr-3 rarr"><StaticImage src="../images/right_arr.png" alt="Retirement" /></div> 
            
            
             <div className="w-12 mr-3 rarr"><StaticImage src="../images/right_arr.png" alt="Retirement" /></div> 
             <br/>
            
          <div class="rct">NO CHARGE TO ATTEND!</div>
  
            {/* <p className="mt-8 md:mt-12">
              <Button size="lg">Get Started</Button>
            </p> */}
            <br/><br/><br/><br/><br/>
            {/* <p className="mt-4 text-gray-600">Seating is limited, so sign up today!</p> */}
          </div>
            {/* <div className="sm:w-1/2 quest desc"> */}
            <div className="lg:w-1/2 box p-8 ">
              
  
              <h2 class="cent colcadet"><u>TOPICS TO BE COVERED:</u></h2>
              <br/>
              <ul className="list-disc" >
                <li>40 years in retirement – are you ready?</li>
                <li>Learn about tax planning and strategies that could allow you to keep more of your retirement income.</li>
                <li>Find out about protecting your portfolio during turbulent times.</li>
                <li>What you need know about CPP, OAS and other government benefits.</li>
                <li>You CAN protect more of your assets with careful planning and a working knowledge of the tax system.</li>
                <li>By keeping your net income low, you can reap benefits like preserving tax credits, government benefits, being in a lower tax bracket.</li>
                <li>There is no right way to plan for retirement, but the wrong way could cost you.</li>
                <li>Estate Planning - transfer your assets to beneficiaries while minimizing tax.</li>
              </ul> 
            </div>
              {/* <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div> */}
              
           
           
          {/* <div className="lg:w-1/2">
          <StaticImage src="../images/HFlocation.png" alt="Retirement" />
          <p class = "sz"><b>University Golf Club <br/>Salons I and II<br/></b></p>
          5185 University Blvd,Vancouver,BC,V6T 1X5<br/>
          <b>Seating is limited, so sign up today!</b>
          </div> */}
        </div>
      </section>
  
      <section id="aboutus" className="py-20 lg:pt-20">
      <div className="container mx-auto px-8 lg:flex">
      <div className="lg:w-1/2 p-3">
      <p class = "szp cent"><b>University Golf Club <br/>Salons I and II </b><StaticImage  src="../images/logo_hf.png" alt="Retirement" /></p>
          
          <p><StaticImage src="../images/HFlocation.jpeg" alt="location" /></p>
          
          <p class="colcadetonly">6:30pm :  Wine tasting<br/>7:00pm : Seminar begins</p>
          <p>5185 University Blvd, Vancouver, BC, V6T 1X5</p><br/>
          <b>Seating is limited, so sign up today!</b>
          <br/><br/>
          <p ><b>COVID-19 Precautions: The health and safety of our attendees, hosts, and general public is our number one priority. All of our live events will adhere to all local and venue-specific precautions and guidelines including, but not limited to social distancing, sanitation, and capacity limitations.</b></p>
          </div>
          <div className="lg:w-1/2 p-3" >
          <p>
                <b class = "sz">Workshop Description:</b>
                <br/>
                <p class= "quest">This workshop will help you understand the differences, features and benefits of your private and government run retirement savings plans and pensions. You will learn key features of CPP and OAS and will help answer questions like: “Should I take CPP before age 65 or delay to be able to receive a larger monthly benefit?” You will learn about OAS clawback and strategies to avoid having to repay your OAS payments back to the CRA. You will learn about tax planning strategies like pension splitting, how to access tax free investment income and strategies to withdraw registered assets (RSPs, RIFs, LIFs, etc.) in the most tax efficient manner. You will also learn about the silent dangers of inflation and estate planning strategies so that your loved ones and not the CRA will be your estate’s biggest beneficiary. You will also learn about the benefits of owning alternative asset classes in your portfolio so that you can reduce market risks without sacrificing expected returns.</p>
                <br/><p class="quest">Learn how to do this and more at this free workshop.</p>
              </p>
            </div>
        </div>
        <div className="container mx-auto text-center p-3">
          {/* <LabelText className="text-black-800 col"><b></b></LabelText> */}
        
          <BackgroundImage Tag="section"
              // Spread bgImage into BackgroundImage:
              {...bgImage}
              preserveStackingContext>
          <div className = "p-3">
              <p>
                <br/><br/>
                <b class = "sz">Attend this seminar and learn about : </b>
                <br/><br/>
                <p class= "quest">Private retirement plans - You can set yourself up to manage and protect your assets and enjoy your golden years.</p>
                <br/><p class="quest">Don't miss out on a chance to learn from tax and retirement experts, get your questions answered and walk away with information that will potentially save you not only money but worry and stress.</p>
                <br/><p class="quest">You've worked hard for decades. On the verge of retirement, you may have questions about your savings and how to best protect them.You might also want to learn more about which government benefits you're entitled to - and when you can start receiving them.</p>
                <br/><p class="quest">Join us at the <b>University Golf Club on Wednesday, July 28th from 7:00 PM - 8:30 PM</b> for this educational workshop. There is no charge to attend. This event is most suitable for those with $500,000 of investible assets or more.</p>
                <br/><p class="quest">Our goal is to teach you how to plan what you need to know about the tax system, and how to set yourself up for success so you can optimize your retirement income.</p>
              </p>
            </div>
          </BackgroundImage>
        </div>
        
      </section>
      
      <section id="cpp" className="py-20 lg:pt-15 p-3">
        <div className="container mx-auto text-center">
          <LabelText className="text-black-800 col"><b>Canadian Pension Plan</b></LabelText>
          <div >
            <p class="quest">The Canadian Pension Plan (CPP) is a monthly, taxable benefit that replaces part of your income when you retire. If you qualify, you will receive the CPP retirement pension for the rest of your life. You can choose to start collecting CPP payments anytime after your 60th birthday. The normal age to start collecting CPP payments is age 65. If you decide to take CPP prior to age 65 your payments will be reduced by 7.2% for each year prior to age 65. If you decide to take CPP after the age 65, your payments will be increased by 8.4% for each year after age 65 up to age 70. After age 70 you will not receive any additional annual increase in your CPP payments. You must apply for CPP, it will not automatically start.</p>
            <br/>
            <p class="quest">Monthly CPP payments are based on your earnings and: <br/>
              <ul>
                <li>&nbsp;•	&nbsp;Your average earnings throughout your working life</li>
                <li>&nbsp;•&nbsp;	Your contributions to the CPP program</li>
                <li>&nbsp;•&nbsp;	The age you decide to start your CPP retirement pension.</li>
              
              </ul> </p>         
          </div>
        </div>
      </section>
      <section id="oas" className="py-20 lg:pt-15 p-3">
        <div className="container mx-auto text-center">
          <LabelText className="text-black-800 col"><b>Old Age Security</b></LabelText>
          <div >
            <p class="quest">The Old Age Security (OAS) are monthly benefit payments to most residents and citizens of Canada who have reached their 65th birthday. To qualify for a full OAS pension, you must have lived in Canada for at least 40 years after age 18.  You will receive a partial pension benefit if you have not resided in Canada for the full 40 years. The partial pension benefit is 1/40th of the full pension amount for each complete year you lived in Canada after age 18.</p>
            <br/>
            <p class="quest">Unlike the CPP, Old Age Security benefits are not tied to your employment history. If you decide to take OAS after the age 65, your payments will be increased by 7.2% for each year after age 65 up to age 70. After age 70 you will not receive any additional annual increase in your OAS payments. You will have to pay taxes on your Old Age Security pension payments.</p>         
            <br/>
            <p class="quest">If your income is above a certain threshold (for example $79,054 in 2020) you will have to repay all or part of your OAS payments depending on how high your income was in the year prior. Repayment of benefits is done by reducing the following year’s OAS payments, this is known as OAS clawback.</p>
          </div>
        </div>
      </section>
      <section id="faq" className="py-20 lg:pt-15 p-3">
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
      <section id="contactUs" className="container mx-auto my-20 py-24 bg-gray-500 rounded-lg text-center p-3">
      <header className="major cent">
          <b class = "col">REGISTER NOW</b>
          <ContactForm></ContactForm>
      </header>
  </section>
    </Layout>
  )

};

export default Index;
