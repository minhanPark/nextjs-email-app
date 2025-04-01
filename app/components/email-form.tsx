"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const schema = z.object({
  email: z.string().email({ message: "올바른 이메일이 아닙니다." }),
});

type Schema = z.infer<typeof schema>;

export function EmailForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const onValid: SubmitHandler<Schema> = (data) => {
    console.log("성공", data);
  };

  const errorMessage = errors.email?.message;
  return (
    <Card className="w-full max-w-sm m-auto">
      <CardHeader>
        <CardTitle>이메일 보내기</CardTitle>
        <CardDescription>
          이메일로 오늘의 날씨를 보내드려요. 1번만 받을 수 있어요.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onValid)}>
          <Input placeholder="email@email.com" {...register("email")} />
          <p className="text-sm text-red-500">{errorMessage}</p>
          <div className="mt-4 flex justify-end">
            <Button className="bg-green-700 hover:bg-green-600">보내기</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
