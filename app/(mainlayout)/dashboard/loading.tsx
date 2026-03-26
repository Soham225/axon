import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Ticket Section */}
      <div className="col-span-1 md:col-span-2 flex flex-wrap gap-6">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="max-w-md w-full">
            <CardHeader className="space-y-3">
              <Skeleton className="h-5 w-[70%]" />
              <Skeleton className="h-4 w-[90%]" />
              <Skeleton className="h-4 w-[60%]" />
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-[90px]" />
                <Skeleton className="h-4 w-[120px]" />
              </div>

              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-[70px]" />
                <Skeleton className="h-4 w-[160px]" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Advertise Section */}
      <div>
        <Card>
          <CardContent className="space-y-6 py-6">
            {/* logos */}
            <div className="grid grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <Skeleton key={i} className="h-[60px] w-full rounded-md" />
              ))}
            </div>

            {/* title */}
            <Skeleton className="h-8 w-[80%] mx-auto" />

            {/* testimonials */}
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-[80%]" />
                  <Skeleton className="h-3 w-[40%] ml-auto" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
