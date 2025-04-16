import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function TeamCard() {
  const testimonials = [
    {
      quote:
        "A veteran in the tech industry, Gerald has led and managed over 100+ engineers throughout his career. Formerly at the helm of a $100M ARR tech ecosystem, he played a pivotal role in scaling operations. In his early days, he successfully exited from an omnichannel e-commerce startup as its CTO.",
      name: "Gerald L.",
      email: "gerald@tess.gg",
      designation: "Seasoned Tech Lead, TESS",
      src: "/gerald.jpg",
    },
    {
      quote:
        "A specialist in mini-acquisitions, Nicholas built and bootstrapped a thriving conglomerate in his early 30s. With a track record of managing 20+ active startups, he continuously drives business success through strategic innovation and growth-focused execution.",
      name: "Nicholas T.",
      designation: "Barrister-at-Law cum Serial Entrepreneur, SION LABS",
      email: "nicholas@sion.gg",
      src: "/nicholas.jpg",
    },
    {
      quote:
        "A powerhouse in branding and marketing, Elaine has propelled renowned brands from Michelin to Unilever with sharp, high-impact creative strategies. Her expertise spans brand positioning, storytelling, and disruptive marketing techniques that drive engagement and business expansion.",
      name: "Elaine B.",
      designation: "Creative & Marketing Mogul, HURUF",
      email: "elaine@huruf.gg",
      src: "/elaine.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
