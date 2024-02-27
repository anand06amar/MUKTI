import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo({items}: any) {
  return (
    <div className="lg:max-w-5xl max-w-2xl my-4 mx-auto px-8 border-cyan-600">
      <HoverEffect items={items} />
    </div>
  );
}

