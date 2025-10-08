<script>
    export let recipientName = "Friend";
    export let senderName = "Someone Special";
    export let wishMessage = "Wishing you all the best!";
    export let cardImageUrl = "";
</script>

<!-- Corporate Email Template -->
<table
    cellpadding="0"
    cellspacing="0"
    border="0"
    style="width: 100%; max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; background-color: #ffffff; border: 1px solid #e5e5e5;"
>
    <tbody>
        <!-- Header Section -->
        <tr>
            <td
                style="padding: 30px 24px; background-color: #f8f9fa; border-bottom: 2px solid #e5e5e5; text-align: center;"
            >
                <h1
                    style="margin: 0; font-size: 24px; font-weight: 600; color: #333333; line-height: 1.3;"
                >
                    Greeting Card Notification
                </h1>
                <p style="margin: 8px 0 0 0; font-size: 16px; color: #666666;">
                    You have received a greeting card request
                </p>
            </td>
        </tr>

        <!-- Main Content Area -->
        <tr>
            <td style="padding: 30px 24px; background-color: #ffffff;">
                <!-- Greeting Section -->
                <p
                    style="margin: 0 0 20px 0; font-size: 16px; color: #333333; line-height: 1.5;"
                >
                    Dear <strong>{recipientName}</strong>,
                </p>

                <!-- Card Image Section -->
                {#if cardImageUrl}
                    <div style="margin-bottom: 25px; text-align: center;">
                        <img
                            src={cardImageUrl}
                            alt="Greeting Card"
                            style="max-width: 100%; height: auto; border: 1px solid #e5e5e5;"
                        />
                    </div>
                {/if}

                <!-- Message Section -->
                <div
                    style="margin-bottom: 25px; padding: 20px; background-color: #f8f9fa; border-left: 4px solid #007bff;"
                >
                    <p
                        style="margin: 0; font-size: 16px; color: #333333; line-height: 1.6;"
                    >
                        {wishMessage}
                    </p>
                </div>

                <!-- Sender Section -->
                <div style="margin-bottom: 20px;">
                    <p
                        style="margin: 0 0 5px 0; font-size: 14px; color: #666666;"
                    >
                        From:
                    </p>
                    <p
                        style="margin: 0; font-size: 16px; font-weight: 600; color: #333333;"
                    >
                        {senderName}
                    </p>
                </div>

                <!-- Separator -->
                <hr
                    style="border: none; border-top: 1px solid #e5e5e5; margin: 25px 0;"
                />
            </td>
        </tr>

        <!-- Footer Section -->
        <tr>
            <td
                style="padding: 20px 24px; background-color: #f8f9fa; border-top: 1px solid #e5e5e5; text-align: center;"
            >
                <p style="margin: 0 0 10px 0; font-size: 14px; color: #666666;">
                    <strong>KartichkaQR</strong>
                </p>
                <p style="margin: 0 0 10px 0; font-size: 13px; color: #999999;">
                    This greeting card was generated through our application
                </p>
                <p style="margin: 0; font-size: 12px; color: #999999;">
                    Contact: <a
                        href="mailto:example@yahoo.com"
                        style="color: #007bff; text-decoration: none;"
                        >example@yahoo.com</a
                    >
                </p>
            </td>
        </tr>
    </tbody>
</table>
