export const onRequest = async (context: { request: Request; next: () => Promise<Response> }) => {
  const url = new URL(context.request.url);
  const path = url.pathname;

  // 1. Clean friendly redirects
  if (path === "/tutor") {
    return Response.redirect(new URL("/app/tutor/", url.origin).toString(), 302);
  }
  if (path.startsWith("/tutor/")) {
    const dest = path.replace(/^\/tutor/, "/app/tutor");
    return Response.redirect(new URL(dest, url.origin).toString(), 302);
  }

  if (path === "/parent" || path === "/parents" || path === "/portal") {
    return Response.redirect(new URL("/app/parent/", url.origin).toString(), 302);
  }
  if (path.startsWith("/parent/") || path.startsWith("/parents/") || path.startsWith("/portal/")) {
    const dest = path.replace(/^\/(parent|parents|portal)/, "/app/parent");
    return Response.redirect(new URL(dest, url.origin).toString(), 302);
  }

  if (path === "/teacher") {
    return Response.redirect(new URL("/app/teacher/", url.origin).toString(), 302);
  }
  if (path.startsWith("/teacher/")) {
    const dest = path.replace(/^\/teacher/, "/app/teacher");
    return Response.redirect(new URL(dest, url.origin).toString(), 302);
  }

  if (path === "/admin") {
    return Response.redirect(new URL("/app/admin/", url.origin).toString(), 302);
  }
  if (path.startsWith("/admin/")) {
    const dest = path.replace(/^\/admin/, "/app/admin");
    return Response.redirect(new URL(dest, url.origin).toString(), 302);
  }

  // 2. Vendor proxy to portal live
  if (path.startsWith("/vendor/")) {
    const target = new URL(path + url.search, "https://smartpath-portal-live.pages.dev");
    return fetch(new Request(target.toString(), context.request));
  }

  // 3. App shell proxy to apps live
  if (path.startsWith("/app/")) {
    const target = new URL(path + url.search, "https://smartpath-apps-live.pages.dev");
    return fetch(new Request(target.toString(), context.request));
  }

  // 4. Default: serve static site assets
  return context.next();
};
