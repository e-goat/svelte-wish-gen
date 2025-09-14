import { put } from '@vercel/blob'
import type { PutBlobResult } from '@vercel/blob'
import { BLOB_READ_WRITE_TOKEN } from '$lib/server/secrets'

class VercelStorage {
    async store({
        file,
        mimeType,
        uuid,
    }: {
        file: File
        mimeType: string
        uuid: string
    }): Promise<PutBlobResult> {
        try {
            if (!file) {
                throw new Error('Missing file')
            }

            if (!mimeType) {
                throw new Error('Missing mime type')
            }

            if (!uuid) {
                throw new Error('Missing filename')
            }

            if (!BLOB_READ_WRITE_TOKEN) {
                throw new Error('Missing vercel storage token')
            }

            const result = await put(`${uuid}.${mimeType}`, file, {
                access: 'public',
            })

            console.log('Recording stored successfully', result)

            return result
        } catch (error) {
            console.error('Recording storage failed', error)
            throw error
        }
    }
}

export const VercelStorageController = new VercelStorage()
