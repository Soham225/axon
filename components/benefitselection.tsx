import { company_skills } from "@/utils/skills";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import { ControllerRenderProps } from "react-hook-form";
import z from "zod";
import { UserInformationSchema } from "@/utils/zodschema";

type formValues = z.infer<typeof UserInformationSchema>;

interface iAppProps {
  field: ControllerRenderProps<formValues, "skills">;
}

export function BenefitSelector({ field }: iAppProps) {
  function onSelect(benefitId: string) {
    const currentSkills = field.value || [];
    const newSkills = currentSkills.includes(benefitId)
      ? currentSkills.filter((id: string) => id !== benefitId)
      : [...currentSkills, benefitId];

    field.onChange(newSkills);
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center flex-wrap gap-4 mt-2">
        {company_skills.map((skill) => {
          const isSkill = (field.value || []).includes(skill.id);
          return (
            <Badge
              className={cn(
                "flex items-center p-3 text-sm border  border-border cursor-pointer transition-all hover:scale-105 active:scale-95 text-black dark:text-white ",
                isSkill ? "bg-primary text-white" : "bg-primary/10",
              )}
              key={skill.id}
              onClick={() => onSelect(skill.id)}
            >
              <span>{skill.icon}</span>
              <span>{skill.label}</span>
            </Badge>
          );
        })}
      </div>
      <div>
        <p className="text-muted-foreground text-sm">
          Selected Skills :{" "}
          <span className="text-primary">
            {(field.value || []).length}
          </span>{" "}
        </p>
      </div>
    </div>
  );
}
