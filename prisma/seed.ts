import { PrismaClient, Prisma } from '../src/lib/db'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())

const templateData: Prisma.TemplateCreateInput[] = [
    // Birthday Templates
    {
        title: 'Happy Birthday Celebration',
        description: 'A vibrant and festive birthday card perfect for celebrating another year of joy and memories.',
        type: 'BIRTHDAY',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        font: 'Poppins',
    },
    {
        title: 'Birthday Wishes',
        description: 'Colorful and playful design that brings smiles and warm birthday wishes to your loved ones.',
        type: 'BIRTHDAY',
        background: 'linear-gradient(45deg, #f093fb 0%, #f5576c 100%)',
        font: 'Comic Sans MS',
    },
    {
        title: 'Elegant Birthday',
        description: 'Sophisticated and classy birthday card with golden accents for milestone birthdays.',
        type: 'BIRTHDAY',
        background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        font: 'Playfair Display',
    },
    {
        title: 'Kids Birthday Party',
        description: 'Fun-filled design with balloons and confetti, perfect for children\'s birthday celebrations.',
        type: 'BIRTHDAY',
        background: 'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)',
        font: 'Comic Sans MS',
    },
    
    // Holiday Templates
    {
        title: 'Merry Christmas',
        description: 'Traditional Christmas card with warm colors and festive elements to spread holiday cheer.',
        type: 'HOLIDAY',
        background: 'linear-gradient(135deg, #2c5364 0%, #203a43 50%, #0f2027 100%)',
        font: 'Georgia',
    },
    {
        title: 'Happy New Year',
        description: 'Sparkling and energetic design to welcome the new year with hope and excitement.',
        type: 'HOLIDAY',
        background: 'linear-gradient(45deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
        font: 'Montserrat',
    },
    {
        title: 'Easter Greetings',
        description: 'Fresh spring colors and delicate patterns celebrating renewal and new beginnings.',
        type: 'HOLIDAY',
        background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        font: 'Times New Roman',
    },
    {
        title: 'Halloween Magic',
        description: 'Spooky yet fun design with mystical elements perfect for Halloween celebrations.',
        type: 'HOLIDAY',
        background: 'linear-gradient(45deg, #434343 0%, #000000 100%)',
        font: 'Creepster',
    },
    {
        title: 'Thanksgiving Gratitude',
        description: 'Warm autumn colors expressing gratitude and thankfulness for life\'s blessings.',
        type: 'HOLIDAY',
        background: 'linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)',
        font: 'Georgia',
    },
    
    // Wedding Templates
    {
        title: 'Romantic Wedding',
        description: 'Elegant and romantic design with soft florals perfect for wedding invitations.',
        type: 'WEDDING',
        background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        font: 'Dancing Script',
    },
    {
        title: 'Save the Date',
        description: 'Classic and timeless design to announce your special day with sophistication.',
        type: 'WEDDING',
        background: 'linear-gradient(45deg, #a8edea 0%, #fed6e3 100%)',
        font: 'Playfair Display',
    },
    {
        title: 'Wedding Congratulations',
        description: 'Celebratory design to congratulate the happy couple on their new journey together.',
        type: 'WEDDING',
        background: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
        font: 'Lora',
    },
    
    // Anniversary Templates
    {
        title: 'Happy Anniversary',
        description: 'Loving and heartfelt design to celebrate years of togetherness and shared memories.',
        type: 'ANNIVERSARY',
        background: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 100%)',
        font: 'Merriweather',
    },
    {
        title: 'Golden Anniversary',
        description: 'Luxurious golden theme perfect for celebrating 50 years of love and commitment.',
        type: 'ANNIVERSARY',
        background: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
        font: 'Playfair Display',
    },
    {
        title: 'Work Anniversary',
        description: 'Professional yet warm design to celebrate career milestones and achievements.',
        type: 'ANNIVERSARY',
        background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
        font: 'Source Sans Pro',
    },
    
    // Thank You Templates
    {
        title: 'Heartfelt Thanks',
        description: 'Sincere and warm design to express genuine gratitude and appreciation.',
        type: 'THANK_YOU',
        background: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
        font: 'Open Sans',
    },
    {
        title: 'Gratitude Bloom',
        description: 'Floral and delicate design that blooms with thankfulness and appreciation.',
        type: 'THANK_YOU',
        background: 'linear-gradient(45deg, #ffecd2 0%, #fcb69f 100%)',
        font: 'Lato',
    },
    {
        title: 'Simple Thanks',
        description: 'Clean and minimalist design that lets your gratitude speak volumes.',
        type: 'THANK_YOU',
        background: 'linear-gradient(135deg, #e3ffe7 0%, #d9e7ff 100%)',
        font: 'Roboto',
    },
    
    // Get Well Templates
    {
        title: 'Get Well Soon',
        description: 'Soothing and comforting design to send healing thoughts and positive energy.',
        type: 'GET_WELL',
        background: 'linear-gradient(45deg, #c3cfe2 0%, #c3cfe2 100%)',
        font: 'Nunito',
    },
    {
        title: 'Healing Wishes',
        description: 'Gentle and uplifting design filled with hope for a speedy recovery.',
        type: 'GET_WELL',
        background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        font: 'Comic Sans MS',
    },
    {
        title: 'Speedy Recovery',
        description: 'Bright and cheerful design to lift spirits and encourage healing.',
        type: 'GET_WELL',
        background: 'linear-gradient(45deg, #ffecd2 0%, #fcb69f 100%)',
        font: 'Quicksand',
    },
    
    // Graduation Templates
    {
        title: 'Graduation Pride',
        description: 'Celebratory design honoring academic achievement and the start of new adventures.',
        type: 'GRADUATION',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        font: 'Oswald',
    },
    {
        title: 'Academic Excellence',
        description: 'Prestigious design celebrating years of hard work and educational success.',
        type: 'GRADUATION',
        background: 'linear-gradient(45deg, #f093fb 0%, #f5576c 100%)',
        font: 'Times New Roman',
    },
    {
        title: 'Future Bright',
        description: 'Inspiring design looking forward to bright future possibilities and opportunities.',
        type: 'GRADUATION',
        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        font: 'Roboto Slab',
    },

    // Additional Creative Templates
    {
        title: 'Congratulations Star',
        description: 'Stellar design to congratulate someone on their outstanding achievements.',
        type: 'CONGRATULATIONS',
        background: 'linear-gradient(45deg, #ffd89b 0%, #19547b 100%)',
        font: 'Fredoka One',
    },
    {
        title: 'Bon Voyage',
        description: 'Adventure-themed design to wish someone well on their travels and journeys.',
        type: 'TRAVEL',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        font: 'Indie Flower',
    },
    {
        title: 'New Baby Joy',
        description: 'Adorable and sweet design celebrating the arrival of a precious new baby.',
        type: 'BABY',
        background: 'linear-gradient(45deg, #ffecd2 0%, #fcb69f 100%)',
        font: 'Pacifico',
    },
    {
        title: 'Retirement Celebration',
        description: 'Dignified design celebrating the end of a successful career and new beginnings.',
        type: 'RETIREMENT',
        background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        font: 'Libre Baskerville',
    },
    {
        title: 'Good Luck Charm',
        description: 'Encouraging design to wish someone the best of luck in their endeavors.',
        type: 'GOOD_LUCK',
        background: 'linear-gradient(45deg, #43e97b 0%, #38f9d7 100%)',
        font: 'Raleway',
    },
    {
        title: 'Thinking of You',
        description: 'Gentle and caring design to let someone know they are in your thoughts.',
        type: 'THINKING_OF_YOU',
        background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        font: 'Crimson Text',
    }
]

export async function main(data, table) {
    switch (table) {
        case 'card':
            break
        case 'template':
            for (const c of data) {
                await prisma.template.create({ data: c })
            }
            break
        default:
            throw new Error(`Unknown table: ${table}`)
    }
}

main(templateData, 'template')
