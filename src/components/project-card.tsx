import { Card, CardHeader, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLinkIcon } from "lucide-react";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
}

export function ProjectCard({ title, description, tags, link }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border-border/30 bg-card/30 hover:bg-card/50 hover-lift transition-all group">
      <CardHeader className="pb-2">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold">
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
                >
                  {title}
                  <ExternalLinkIcon className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ) : (
                title
              )}
            </h3>
            {link && (
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            )}
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </CardHeader>
      <CardContent className="mt-auto pt-0">
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1.5 py-0 text-[10px] font-mono bg-secondary/30 hover:bg-secondary/50"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
