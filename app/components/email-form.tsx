import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function EmailForm() {
  return (
    <Card className="w-full max-w-sm m-auto">
      <CardHeader>
        <CardTitle>이메일 보내기</CardTitle>
        <CardDescription>
          이메일로 오늘의 날씨를 보내드려요. 1번만 받을 수 있어요.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <Input placeholder="email@email.com" />
          <div className="mt-4 flex justify-end">
            <Button className="bg-green-700 hover:bg-green-600">보내기</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
