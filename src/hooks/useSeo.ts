import { useEffect } from "react";

type UseSeoParams = {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
  image?: string;
  type?: string;
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
  let el = document.querySelector(`meta[property="${property}"]`);
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

export function useSeo({ title, description, canonicalPath, keywords, image, type = "website" }: UseSeoParams) {
  useEffect(() => {
    document.title = title;

    upsertMetaByName("description", description);

    // Keywords
    if (keywords) {
      upsertMetaByName("keywords", keywords);
    }

    // Social previews (keep in sync with title/description)
    upsertMetaByProperty("og:title", title);
    upsertMetaByProperty("og:description", description);
    upsertMetaByProperty("og:type", type);
    upsertMetaByName("twitter:title", title);
    upsertMetaByName("twitter:description", description);
    upsertMetaByName("twitter:card", "summary_large_image");

    // Open Graph Image
    if (image) {
      const imageUrl = image.startsWith("http") ? image : new URL(image, window.location.origin).toString();
      upsertMetaByProperty("og:image", imageUrl);
      upsertMetaByName("twitter:image", imageUrl);
    }

    if (canonicalPath) {
      const canonical = new URL(canonicalPath, window.location.origin).toString();
      upsertCanonical(canonical);
      upsertMetaByProperty("og:url", canonical);
      upsertMetaByName("twitter:url", canonical);
    } else {
      // Set default canonical to current URL
      const canonical = window.location.href;
      upsertCanonical(canonical);
      upsertMetaByProperty("og:url", canonical);
      upsertMetaByName("twitter:url", canonical);
    }
  }, [title, description, canonicalPath, keywords, image, type]);
}
