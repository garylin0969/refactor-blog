import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getCategoryStats } from '@/utils/post';

const BlogCategoriesCard = () => {
    const categories = getCategoryStats();

    return (
        <Card className="gap-2">
            <CardHeader>
                <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent>
                {categories?.map((category) => (
                    <Link key={category?.category} href={`/blog/${category?.category}/1`}>
                        <Badge variant="outline" className="hover:text-primary px-2 py-1">
                            {category?.category} {category?.count}
                        </Badge>
                    </Link>
                ))}
            </CardContent>
        </Card>
    );
};

export default BlogCategoriesCard;
