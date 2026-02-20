// Basic認証のユーザー名とパスワードは環境変数から取得
// Cloudflare Pages の設定画面で以下の環境変数を設定してください:
//   BASIC_AUTH_USER: ユーザー名
//   BASIC_AUTH_PASS: パスワード

interface Env {
  BASIC_AUTH_USER: string;
  BASIC_AUTH_PASS: string;
}

type PagesFunction = (context: {
  request: Request;
  next: () => Promise<Response>;
  env: Env;
}) => Promise<Response>;

const REALM = "Restricted Area";

export const onRequest: PagesFunction = async ({ request, next, env }) => {
  const authUser = env.BASIC_AUTH_USER;
  const authPass = env.BASIC_AUTH_PASS;

  // 環境変数が未設定の場合は認証をスキップ（開発時の利便性のため）
  if (!authUser || !authPass) {
    return await next();
  }

  const authorization = request.headers.get("Authorization");

  if (!authorization) {
    return unauthorizedResponse();
  }

  const [scheme, encoded] = authorization.split(" ");

  if (!encoded || scheme !== "Basic") {
    return unauthorizedResponse();
  }

  const decoded = atob(encoded);
  const [user, pass] = decoded.split(":");

  if (user !== authUser || pass !== authPass) {
    return unauthorizedResponse();
  }

  return await next();
};

function unauthorizedResponse(): Response {
  return new Response("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": `Basic realm="${REALM}", charset="UTF-8"`,
    },
  });
}
