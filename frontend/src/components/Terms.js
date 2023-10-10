import React from 'react'
import styled from 'styled-components'

function Terms() {
  return (
    <Container>
      <Cont>
      <h1>Terms and Conditions</h1>
      <p>
      1. These are the standard terms and conditions for matches conducted or promoted by or in association with SFL. Competition specific rules may apply in addition to these standard terms and conditions to supplement these standard terms and conditions. In the event of a conflict between these standard terms and conditions and any competition specific rules, the competition specific rules will apply.<br/>

2. Your entry into the competition and/or your acceptance of a prize (in the event that you win a prize) constitutes your binding acceptance of the terms and conditions on behalf of yourself and any person with whom you may share a prize (in the event that you win a prize which is for you and one or more additional persons.<br/>

3. The competition is not open to students or house-surgeons who are not presently attending Shadan Institute of Medical Sciences, Peerancharu.<br/>

4. It is your responsibility to ensure that your entry is received by us prior to the closure of the competition. Any entries which are not received by us prior to the closure of the competition will not be eligible to participate, regardless of the reason for the late entry. SFL is not responsible for any entries which are not received by us, whether timeously or at all, regardless of the cause thereof. Without limitation, we and our affiliates are not responsible for any problems or technical malfunction of any telephone network or lines, computer on-line systems, servers, or providers, computer hardware or software failure or malfunction, traffic congestion (whether physical, or on the Internet, telephone lines or at any service provider, web site or other device or medium), or any combination thereof, or any other technical or other problems.<br/>

5. It is your responsibility to ensure that any information which you provide to us is accurate, complete and up to date. Should any of the data provided by yourself in connection with this Competition prove to be invalid, inaccurate, false or misleading, your entry shall be disregarded and you shall be prohibited from entering any further matches.<br/>

6. SFL will not be responsible for any costs or expenses which you incur during and for purposes of your entry into the competition and your acceptance and/or use of a prize.<br/>

7. SFL will not be responsible for any harm, damage, loss or claim relating to the provision of any element of a prize or any changes to a prize that may be made at any time.<br/>

8. Prizes are not transferable and may not be deferred, changed or exchanged for cash or any other item.<br/>

9. The winners will be notified by means of the contact details provided to us. If we are, or a third party supplier is, unable to contact a winner within 30 days or if the winner is unable to collect the prize within 3 days, the winner will forfeit the prize and SFL reserves the right to re-draw a new winner under the same conditions.<br/>

10. We may invite you to be present when the prize winners are determined or announced, to participate in any of our marketing activities, to appear in person in the electronic media and/or the print media, and/or to endorse, promote or advertise any of our goods or services, for which no fee, royalty or other compensation will be payable. You may decline such an invitation.<br/>

11. We may require you to provide us with such additional information and documentation as we may reasonably require in order to process, confirm and facilitate your acceptance and/or use of a prize. If you refuse to provide us with the requested information or documentation, you will forfeit the prize.<br/>

12. SFL reserves the right to vary, postpone, suspend, or cancel the competition and any prizes, or any aspect thereof, without notice at any time, for any reason which we deem necessary. In the event of such variation, postponement, suspension or cancellation, you agree to waive any rights, interests and expectations that you may have in terms of this competition and acknowledge that you will have no recourse against us.<br/>

13. You agree that your participation in the competition, and your acceptance and/or use of a prize, or any aspect thereof, is at your own risk.<br/>

14. SFL and its affiliates will not be responsible, and disclaim all liability, for any loss, liability, injury, expense or damage (whether direct, indirect, incidental, punitive or consequential) of any nature, whether arising from negligence or any other cause, which is suffered by your participation in the competition or the acceptance and/or use by you, or your partner (if applicable), of any prize, or by any action taken in accordance with the terms and conditions.<br/>

15. If you fail to comply with any of the terms and conditions, then without prejudice to any other remedy which we may have, –
(i) You will be automatically disqualified and you will forfeit the prize/s (in the event that you have already won a prize);
(ii) You will pay us for any loss or damage incurred by us directly or indirectly as a result of your (or, if applicable, your partner's) non-compliance, including all of our legal costs (including attorney and own client costs) which we may incur in taking any steps pursuant to your (or your partner’s) non-compliance; and
(iii) You indemnify and hold us and our affiliates harmless against any claim by any person, (whether direct, indirect, incidental, punitive or consequential) of any nature, whether arising from negligence or any other cause, relating to any death, injury, loss and/or damage which may be suffered howsoever arising in relation to your failure (or that of your partner, if applicable) to comply therewith.<br/>

16. For purposes hereof, "affiliate" means our organizers, co promoters and their subsidiaries and representatives.<br/>

17. These terms and conditions will be construed, interpreted and enforced in accordance with the laws of contract and dispute resolution in the Republic of India<br/>

18. SFL and the judges' decision on any matter concerning the competition and/or arising out of these terms and conditions is final and binding on you, and no correspondence will be entered into.<br/>
      </p>
      </Cont>
    </Container>
  )
}

export default Terms

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    &:before{
        background: url("/images/home-background.png") center center / cover 
        no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`
const Cont = styled.div`
    margin-top: 100px;
    color: white;
    margin-bottom: 150px;
`