import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo({items}: any) {
  return (
    <div className="max-w-5xl my-4 mx-6 lg:mx-auto px-8 border-cyan-600">
      <HoverEffect items={items} />
    </div>
  );
}

