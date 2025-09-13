import { Storage } from '@google-cloud/storage'
import { GOOGLE_CLOUD_STORAGE_JSON } from '$lib/server/secrets'

export async function POST({ request }) {
    try {
        const formData = await request.formData()
        const record = formData.get('record') as File
        const cardUuid = formData.get('cardUuid') as string

        if (!record) {
            throw new Error('Missing file')
        }

        if (!cardUuid) {
            throw new Error('Missing filename')
        }

        const storage = new Storage({ credentials: GOOGLE_CLOUD_STORAGE_JSON })
        const buffer = await record.arrayBuffer()
        const uint8Array = new Uint8Array(buffer)

        await storage
            .bucket('kartichkaqr_bucket_1')
            .file(cardUuid + '.webm')
            .save(uint8Array)

        console.log('Recording stored successfully')

        return new Response(
            JSON.stringify({
                statusText: 'Success',
                url: `https://storage.cloud.google.com/kartichkaqr_bucket_1/${cardUuid}.webm?authuser=1`,
            })
        )
    } catch (error) {
        console.error('Recording storage failed', error)

        return new Response(
            JSON.stringify({
                error: 'Recording storage failed',
                details: error,
            }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        )
    }
}
