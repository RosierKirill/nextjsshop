import { prisma } from '../../lib/prisma'; // Assure-toi que tu as configuré Prisma correctement

export async function GET() {
    try {
        const products = await prisma.product.findMany();
        return new Response(JSON.stringify(products), { status: 200 });
    } catch (error) {
        return new Response('Erreur lors de la récupération des produits', { status: 500 });
    }
}
