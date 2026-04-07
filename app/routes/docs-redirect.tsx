export async function loader() {
  throw new Response(null, {
    status: 301,
    headers: {
      Location: "/docs/",
    },
  });
}

export default function DocsRedirect() {
  return null;
}
