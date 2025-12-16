import { useEffect } from "react";

type UseSeoParams = {
  title: string;
  description: string;
  canonicalPath?: string;
};

function upsertMetaByName(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertMetaByProperty(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSeo({ title, description, canonicalPath }: UseSeoParams) {
  useEffect(() => {
    document.title = title;

    upsertMetaByName("description", description);

    // Social previews (keep in sync with title/description)
    upsertMetaByProperty("og:title", title);
    upsertMetaByProperty("og:description", description);
    upsertMetaByName("twitter:title", title);
    upsertMetaByName("twitter:description", description);

    if (canonicalPath) {
      const canonical = new URL(canonicalPath, window.location.origin).toString();
      upsertCanonical(canonical);
      upsertMetaByProperty("og:url", canonical);
      upsertMetaByName("twitter:url", canonical);
    }
  }, [title, description, canonicalPath]);
}
