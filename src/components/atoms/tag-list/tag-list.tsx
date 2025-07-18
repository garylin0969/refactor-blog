import { Badge } from '@/components/ui/badge';

interface TagListProps {
    tags: string[];
    maxVisible?: number;
}

export const TagList = ({ tags, maxVisible = 3 }: TagListProps) => {
    if (!tags || tags.length === 0) {
        return null;
    }

    const visibleTags = tags.slice(0, maxVisible);
    const remainingCount = tags.length - maxVisible;

    return (
        <div className="flex flex-wrap items-center gap-2">
            {visibleTags.map((tag) => (
                <Badge key={tag} className="px-2 py-1 text-xs">
                    {tag}
                </Badge>
            ))}
            {remainingCount > 0 && <span className="text-muted-foreground text-xs">+{remainingCount} more</span>}
        </div>
    );
};
