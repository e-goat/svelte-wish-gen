<script>
  export let recipientName = 'Friend';
  export let senderName = 'Someone Special';
  export let wishMessage = 'Wishing you all the best!';
  export let cardImageUrl = '';
</script>

<!-- Email Template with Table Layout and Inline Styles -->
<table
  cellpadding="0"
  cellspacing="0"
  border="0"
  style="width: 100%; max-width: 600px; margin: 0 auto; font-family: 'Chiron Sung HK', Georgia, serif; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);"
>
  <tbody>
  <!-- Header Section with Gradient -->
  <tr>
    <td style="padding: 0;">
      <!-- Top accent line -->
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
        <tbody>
        <tr>
          <td style="height: 6px; background: linear-gradient(90deg, #caa74e 0%, #917319 50%, #caa74e 100%);"></td>
        </tr>
        </tbody>
      </table>
      
      <!-- Header content -->
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; background: linear-gradient(135deg, #93e0a2 0%, #92da9f 100%); padding: 40px 24px; text-align: center;">
        <tbody>
        <tr>
          <td>
            <!-- Decorative stars -->
            <div style="font-size: 32px; margin-bottom: 16px; color: rgba(255, 255, 255, 0.8);">✨ 🎉 ✨</div>
            
            <h1 style="margin: 0 0 12px 0; font-size: 32px; font-weight: 700; color: #ffffff; text-shadow: 0 3px 6px rgba(0, 0, 0, 0.15); line-height: 1.2;">
              You've Received a Special Wish!
            </h1>
            
            <div style="font-size: 18px; color: rgba(255, 255, 255, 0.95); font-weight: 400; font-style: italic;">
              A heartfelt message crafted just for you
            </div>
            
            <!-- Decorative bottom element -->
            <div style="margin-top: 20px; height: 3px; width: 80px; background: linear-gradient(90deg, #caa74e, #917319); margin-left: auto; margin-right: auto; border-radius: 2px;"></div>
          </td>
        </tr>
        </tbody>
      </table>
    </td>
  </tr>

  <!-- Main Content Area -->
  <tr>
    <td style="padding: 40px 24px; background-color: #ffffff;">
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
        <tbody>
        
        <!-- Greeting Section -->
        <tr>
          <td style="padding-bottom: 30px;">
            <h2 style="margin: 0; font-size: 28px; color: #917319; font-weight: 600; text-shadow: 0 1px 2px rgba(145, 115, 25, 0.1);">
              Dear <span style="color: #caa74e; text-decoration: underline; text-decoration-color: #ffde82;">{recipientName}</span>,
            </h2>
          </td>
        </tr>

        <!-- Card Image Section -->
        {#if cardImageUrl}
        <tr>
          <td style="padding-bottom: 30px; text-align: center;">
            <div style="background: linear-gradient(45deg, #ffede4, #ffffff); padding: 20px; border-radius: 16px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08); border: 2px solid #ffde82;">
              <img 
                src={cardImageUrl} 
                alt="Your Special Wish Card" 
                style="max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15); border: 3px solid #ffffff;"
              />
            </div>
          </td>
        </tr>
        {/if}

        <!-- Message Container with Enhanced Styling -->
        <tr>
          <td style="padding-bottom: 30px;">
            <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; background: linear-gradient(135deg, #ffede4 0%, #fff8f0 100%); border-radius: 16px; box-shadow: 0 6px 20px rgba(202, 167, 78, 0.15); border-left: 6px solid #caa74e; border-right: 2px solid #ffde82;">
              <tbody>
              <tr>
                <td style="padding: 32px 28px;">
                  <!-- Quote icon -->
                  <div style="font-size: 48px; color: #caa74e; margin-bottom: 16px; opacity: 0.7; line-height: 1;">"</div>
                  
                  <p style="margin: 0; font-size: 20px; line-height: 1.7; color: #4a4a4a; font-style: italic; text-align: center; position: relative;">
                    {wishMessage}
                  </p>
                  
                  <!-- Decorative flourish -->
                  <div style="text-align: center; margin-top: 20px; font-size: 24px; color: #caa74e;">❀</div>
                </td>
              </tr>
              </tbody>
            </table>
          </td>
        </tr>

        <!-- Sender Section with Enhanced Design -->
        <tr>
          <td style="text-align: right; padding-bottom: 20px;">
            <div style="background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); padding: 24px; border-radius: 12px; border: 1px solid #e9ecef; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);">
              <p style="margin: 0 0 8px 0; font-size: 16px; color: #666666; font-style: italic;">
                With warm regards,
              </p>
              <p style="margin: 0; font-size: 24px; font-weight: 600; color: #917319; text-shadow: 0 1px 2px rgba(145, 115, 25, 0.1);">
                <span style="color: #caa74e;">♥</span> {senderName} <span style="color: #caa74e;">♥</span>
              </p>
            </div>
          </td>
        </tr>

        <!-- Decorative Separator -->
        <tr>
          <td style="padding: 20px 0; text-align: center;">
            <div style="height: 2px; background: linear-gradient(90deg, transparent 0%, #caa74e 20%, #93e0a2 50%, #caa74e 80%, transparent 100%); border-radius: 1px;"></div>
            <div style="margin: 16px 0; font-size: 20px; color: #caa74e;">✦ ✦ ✦</div>
          </td>
        </tr>

        </tbody>
      </table>
    </td>
  </tr>

  <!-- Footer Section -->
  <tr>
    <td style="padding: 0;">
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); border-top: 2px solid #e9ecef;">
        <tbody>
        <tr>
          <td style="padding: 32px 24px; text-align: center;">
            
            <!-- Logo/Brand section -->
            <div style="margin-bottom: 20px;">
              <div style="display: inline-block; background: linear-gradient(135deg, #93e0a2, #92da9f); padding: 12px 24px; border-radius: 25px; box-shadow: 0 4px 12px rgba(147, 224, 162, 0.3);">
                <span style="color: #ffffff; font-weight: 600; font-size: 16px; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);">✨ Wish Generator ✨</span>
              </div>
            </div>
            
            <p style="margin: 0 0 16px 0; font-size: 15px; color: #666666; line-height: 1.5;">
              This magical wish was created with love and delivered with care
            </p>
            
            <div style="font-size: 14px; color: #999999;">
              <span style="color: #caa74e;">•</span> 
              Spreading joy, one wish at a time 
              <span style="color: #caa74e;">•</span>
            </div>
            
            <!-- Bottom accent -->
            <div style="margin-top: 24px; height: 4px; background: linear-gradient(90deg, #93e0a2 0%, #caa74e 50%, #93e0a2 100%); border-radius: 2px;"></div>
          </td>
        </tr>
        </tbody>
      </table>
    </td>
  </tr>
  </tbody>
</table>
