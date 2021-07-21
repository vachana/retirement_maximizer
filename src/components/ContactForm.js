import React from 'react'

class ContactForm extends React.Component {

  render() {
    const formStyle = {
      textAlign: 'left'
    }
    const buttonsStyle = {
      margin: '1rem',
      textAlign: 'center',
      color: '#7b38d8',
      padding: '20px'
      
    }
    return (
    //   <form style={formStyle} className="form" action={this.props.action} method="post">
    //     <div>
    //       <label>Full name</label>
    //       <input type="text" name="fullname"/>
    //     </div>
    //     <div>
    //       <label>Email</label>
    //       <input type="email" name="email"/>
    //     </div>
    //     <div>
    //       <label>Message</label>
    //       <textarea name="message" rows="5"></textarea>
    //     </div>
    //     <ul className="actions" style={buttonsStyle}>
    //         <li>
    //           <button type="submit"  className="button special">Send</button>
    //         </li>
    //     </ul>
    //   </form>
    <form  class = "cent" method="post"
      action="https://www.flexyform.com/f/e568eb7087d3995bf3896bedca8b0aac7eedbc22">
          <br/>
    <p class="cent">
        <label class = "ast cent"><b>First Name</b></label>
        <input type="text" name="firstname" placeholder="Your name.." size="35" required/>
    </p>
    <br/>
    <p class="cent">
        <label class = "ast cent"><b>Last Name</b></label>
        <input type="text" name="lastname" placeholder="Your last name.." size="35" required/>
    </p>
    <br/>
    <p class="cent">
    
        <label class = "ast cent"><b>Email</b></label>
        <input type="text" name="email" size="35" placeholder="Your email id"required/>
    </p>
    <br/>
    <p class="cent">
        <label class = "ast cent"><b>Phone</b></label>
        <input type="phone" name="phone" size="35" maxlength="10" placeholder="### ### ####"required/>
    </p>
    <br/>
    
    <p class="cent">
    <label class = "ast cent" for="guest"><b>Do you plan on bringing a spouse or guest?</b></label>
    
    
    <select  name="guest" id="guest">
      <option value="yes">Yes</option>
      <option value="no" selected="selected">No</option>
    </select>
    </p>
    <br/>

    <br/>
    
    {/* <label class = "ast" for="workshop">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please select which workshop would you like to attend : </label>
    <br/>
    <p class = "dd">
    <input type="checkbox" id="workshop" name="workshop" value="July_28_Yes" required/>
    <label for="workshop"> Wednesday, July 28th: 7:00 PM - 8:30 PM</label><br></br>

    </p>
    <br/>
    <br/> */}
    <p class="cent">
    <label class = "ast cent" for="TextMessage"><b>Would you like to receive a reminder text message?</b></label>
    <input type="checkbox" id="TextMessage" name="TextMessage" value="Yes" required/>
    <label for="TextMessage"> Yes</label>
    <input type="checkbox" id="TextMessage" name="TextMessage" value="No" required/>
    <label for="TextMessage"> No</label><br></br>
    </p>
    <br/>

  
    
    <p class="cent">
    <label for="consultation"><b>Are you interested in a quick conversation with a knowledgeable financial professional?</b></label>
    <input type="checkbox" id="consultation" name="consultation" value="Yes"/>
    <label for="consultation"> Yes</label>
    <input type="checkbox" id="consultation" name="consultation" value="No"/>
    <label for="consultation"> No</label><br></br>
    </p>
    <br/>

    <label for="checked_privacy">Your privacy is important to Retirement Maximizer. By registering you are agreeing to be bound by our Privacy Policy and consent to being contacted regarding the seminar registered for and any follow up communications from the seminar provider.</label>
    <br/>
    {/* <p class = "dd">
    <input type="checkbox" id="checked_privacy" name="checked_privacy" value="checked_privacy" required/>
    <label for="checked_privacy">&nbsp;Retirement Maximizer and it's affiliates may share my personal information with select<br/> 3rd parties who have information or services which we believe may be of interest to you</label><br></br>

    </p> */}

  
    <br/>

    <p className="buttonstyle">
    <button type="submit">Send</button>
    </p>
</form>
    );
  }
}

export default ContactForm