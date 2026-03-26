import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingTicketForm() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Card className="w-full max-w-xl">
        <CardHeader className="space-y-3">
          <Skeleton className="h-6 w-[40%]" />
          <Skeleton className="h-4 w-[70%]" />
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Title input */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-[80px]" />
            <Skeleton className="h-10 w-full rounded-md" />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-24 w-full rounded-md" />
          </div>

          {/* Assign select */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-[120px]" />
            <Skeleton className="h-10 w-full rounded-md" />
          </div>

          {/* Submit button */}
          <Skeleton className="h-10 w-full rounded-md" />
        </CardContent>
      </Card>
    </div>
  );
}
