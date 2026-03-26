import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingAssignedTickets() {
  return (
    <div className="space-y-6 flex flex-wrap gap-4">
      {[...Array(4)].map((_, i) => (
        <Card key={i} className="max-w-md w-full">
          <CardHeader className="space-y-3">
            {/* Title */}
            <Skeleton className="h-5 w-[70%]" />

            {/* Description */}
            <Skeleton className="h-4 w-[90%]" />
            <Skeleton className="h-4 w-[60%]" />
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Helpful note */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-[120px]" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[80%]" />
            </div>

            {/* Creator */}
            <div className="flex justify-end">
              <Skeleton className="h-4 w-[120px]" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
