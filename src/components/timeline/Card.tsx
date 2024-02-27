import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo({items}: any) {
  return (
    <div className="w-full my-4 mx-auto px-8 border-cyan-600 relative">
      <HoverEffect items={items} />
    </div>
  );
}

