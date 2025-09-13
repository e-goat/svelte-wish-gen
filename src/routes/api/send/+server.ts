import { Resend } from 'resend'
import { RESEND_API_KEY } from '$lib/server/secrets'
import { render } from 'svelte/server'
import EmailTemplate from '$lib/components/EmailTemplate.svelte'

const resend = new Resend(RESEND_API_KEY)

export async function POST({ request }) {
    const { receiver, title, sender } = await request.json()
    try {
        const { body } = render(EmailTemplate, {
            props: {
                recipientName: receiver,
                senderName: sender,
                wishMessage: title,
                cardImageUrl: '',
            },
        })

        const { data, error } = await resend.emails.send({
            from: sender,
            to: [receiver],
            subject: title,
            html: body,
        })

        if (error) {
            console.error({
                error: error,
                status: 500,
            })
        }

        return Response.json({ data })
    } catch (error) {
        console.error({
            error: error,
            status: 500,
        })
    }
}
