import img1 from "@/public/img1.png";
import img2 from "@/public/img2.png";
import img3 from "@/public/img3.png";
import img4 from "@/public/img4.png";
import img5 from "@/public/img5.png";
import img6 from "@/public/img6.png";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";

const companies = [
  { id: 0, name: "Nebula", logo: img1 },
  { id: 1, name: "SDComp", logo: img2 },
  { id: 2, name: "Dts Limited", logo: img3 },
  { id: 3, name: "Tesla", logo: img4 },
  { id: 4, name: "Temu", logo: img5 },
  { id: 5, name: "Slack", logo: img6 },
];

const testimonials = [
  {
    quote:
      "This platform transformed the way we manage problems. It's fast, efficient, and incredibly user-friendly.",
    author: "Jessica Lane",
    company: "TechNova Solutions",
  },
  {
    quote:
      "We've doubled our productivity after switching. The support team is amazing, the experience is seamless.",
    author: "Rahul Mehta",
    company: "CoreSync Systems",
  },
  {
    quote:
      "Absolutely love the design and functionality. It's a game-changer for any growing business.",
    author: "Ava Thompson",
    company: "BrightPath Marketing",
  },
];

export function Advertise() {
  return (
    <Card>
      <CardContent className="flex flex-col space-y-8">
        <div className="grid grid-cols-3 gap-4 mx-auto">
          {companies.map((cmp) => (
            <Image
              key={cmp.id}
              src={cmp.logo}
              alt="logos"
              width={120}
              height={80}
              className="rounded-lg opacity-75 transition-opacity hover:opacity-100"
            />
          ))}
        </div>
        <div className="text-center border p-2 rounded-2xl border-primary">
          <span className="font-bold text-2xl">
            Trusted by Industry Leaders
          </span>
        </div>
        <div className="space-y-4">
          {testimonials.map((test, index) => (
            <blockquote key={index} className="border-l-2 border-primary pl-4">
              <p className="text-sm text-muted-foreground ">{test.quote}</p>
              <footer className="mt-2 text-sm font-medium text-end">
                {" "}
                -{test.author} ,{test.company}
              </footer>
            </blockquote>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
