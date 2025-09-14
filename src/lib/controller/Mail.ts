import { Resend } from 'resend'
import { RESEND_API_KEY } from '$lib/server/secrets'
import { render } from 'svelte/server'
import EmailTemplate from '$lib/components/EmailTemplate.svelte'

class Mail {
    #resend: Resend

    constructor() {
        this.#resend = new Resend(RESEND_API_KEY)
    }

    async send({
        to,
        from,
        name,
        title,
        senderName,
    }: {
        to: string
        from: string
        name: string
        title: string
        senderName: string
    }) {
        try {
            const { body } = render(EmailTemplate, {
                props: {
                    recipientName: name,
                    senderName: senderName,
                    wishMessage: title,
                    cardImageUrl: '',
                },
            })

            const { data, error } = await this.#resend.emails.send({
                from: from,
                to: [to],
                subject: title,
                html: body,
            })

            if (error) {
                console.error({
                    error: error,
                    status: 500,
                })
            }

            return data
        } catch (error) {
            console.error({
                error: error,
                status: 500,
            })
            throw error
        }
    }
}

export const MailController = new Mail()
