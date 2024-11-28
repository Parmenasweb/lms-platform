import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AuthorInfoProps {
  name: string;
  bio: string;
  avatar: string;
}

export function AuthorInfo({ name, bio, avatar }: AuthorInfoProps) {
  return (
    <Card className="mt-8">
      <CardHeader className="flex flex-row items-center gap-4">
        <Image
          src={avatar}
          alt={name}
          width={64}
          height={64}
          className="rounded-full"
        />
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{bio}</p>
      </CardContent>
    </Card>
  );
}
