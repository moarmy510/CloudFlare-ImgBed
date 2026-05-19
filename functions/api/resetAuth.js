// functions/api/resetAuth.js
export function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  
  if (url.searchParams.get('key') === env.RESET_KEY) {
    // 执行重置逻辑
    return new Response('认证信息已清除', { status: 200 });
  }
  
  return new Response('无效的密钥', { status: 403 });
}
