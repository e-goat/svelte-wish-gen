import slug from 'slug'

export function randomStringWithSpaces(length: number): string {
    const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 '
    let result = ''
    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
    }
    return result
}

export function randomBase64(length: number): string {
    const chars =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    let result = ''
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    while (result.length % 4 !== 0) {
        result += '='
    }
    return result
}

export function generateSlug(slugLength: number): string {
    const randomString = randomStringWithSpaces(slugLength)
    const slugified = slug(randomString, {
        lower: true,
        remove: /[*+~.()'"!:@]/g,
    })
    return slugified
}

export function generateCardUuid(): string {
    return randomStringWithSpaces(10).trim()
}
