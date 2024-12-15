import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarDemo({ img }: { img: string }) {
  return (
    <Avatar>
      <AvatarImage src={img} alt="@shadcn" />
      <AvatarFallback>Image</AvatarFallback>
    </Avatar>
  );
}
