import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

export default function LoadingEditProfile() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="space-y-2">
        <Skeleton className="h-10 w-[300px]" />
        <Skeleton className="h-4 w-[250px]" />
      </div>

      <Separator />

      {/* Username + Role */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-[80px]" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
      </div>

      {/* About */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-[120px]" />
        <Skeleton className="h-28 w-full rounded-md" />
      </div>

      {/* Skills selector */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-[160px]" />
        <div className="flex flex-wrap gap-2">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-8 w-[80px] rounded-full" />
          ))}
        </div>
      </div>

      {/* Button */}
      <Skeleton className="h-11 w-full rounded-md" />
    </div>
  );
}
