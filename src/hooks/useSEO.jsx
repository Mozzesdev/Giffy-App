import { useEffect, useRef } from "react";

export default function useSEO({ title, description }) {
  const previousTitle = useRef(document.title);

  const previousDescription = useRef(
    document.querySelector('meta[name="description"]')
  );

  useEffect(() => {
    const prevTitle = previousTitle.current;
    if (title) {
      document.title = `${title} | Giffy`;
    }

    return () => (document.title = prevTitle);
  }, [title]);

  useEffect(() => {
    if (description) {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    return () => {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.remove();
    };
  }, [description]);
}
