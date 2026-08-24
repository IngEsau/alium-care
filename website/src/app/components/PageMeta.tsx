import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description: string;
  type?: "website" | "article";
}

export function PageMeta({ title, description, type = "website" }: PageMetaProps) {
  useEffect(() => {
    document.title = title;
    setMetaContent("name", "description", description);
    setMetaContent("property", "og:title", title);
    setMetaContent("property", "og:description", description);
    setMetaContent("property", "og:type", type);
    setMetaContent("property", "og:locale", "es_MX");
    setMetaContent("property", "og:site_name", "Alium Care");
    setMetaContent("name", "twitter:card", "summary");
    setMetaContent("name", "twitter:title", title);
    setMetaContent("name", "twitter:description", description);
  }, [description, title, type]);

  return null;
}

function setMetaContent(attribute: "name" | "property", value: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${value}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  element.content = content;
}
