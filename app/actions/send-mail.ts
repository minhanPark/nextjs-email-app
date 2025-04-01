"use server";

import { prisma } from "@/lib/db";

type Params = {
  email: string;
};

export async function sendMail(params: Params) {
  const { email } = params;

  let user = null;

  // 1 이메일을 가지고 유저를 찾는다.
  try {
    user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  } catch {
    return {
      isOk: false,
      error: "유저를 찾는데 실패했습니다. 다시 시도해주세요.",
    };
  }

  // 유저가 있다면 이미 메일을 보낸 유저니까 거기서 실행이 멈추도록 error를 리턴한다.
  if (user) {
    return {
      isOk: false,
      error: "이미 존재하는 이메일입니다.",
    };
  }

  // 유저가 없다면 생성(등록)한다.
  try {
    await prisma.user.create({
      data: {
        email: email,
      },
    });
  } catch {
    return {
      isOk: false,
      error: "유저 등록에 실패했습니다. 다시 시도해주세요.",
    };
  }

  // 이메일을 보낸다.
  // 성공했다는 의미로 isOk: true를 리턴한다.
  return {
    isOk: true,
  };
}
