"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { Modal } from "@heroui/react";

export type LightboxItem = {
  src: string;
  kind: "image" | "video";
  alt?: string;
};

type LightboxContextValue = {
  open: (item: LightboxItem) => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

/**
 * Single modal shared by every gallery on the page. The old site created a
 * detached <video> element by hand and toggled `display` on it; here the modal
 * simply unmounts, which stops playback and frees the media.
 */
export const LightboxProvider = ({ children }: { children: ReactNode }) => {
  const [item, setItem] = useState<LightboxItem | null>(null);

  const open = useCallback((next: LightboxItem) => setItem(next), []);
  const value = useMemo(() => ({ open }), [open]);

  return (
    <LightboxContext.Provider value={value}>
      {children}

      {/*
        No <Modal> wrapper: it mounts a press responder for a trigger this
        lightbox does not have, which React Aria warns about. A fully
        controlled modal hangs its state straight off Modal.Backdrop.
      */}
      <Modal.Backdrop
        variant="blur"
        isOpen={item !== null}
        onOpenChange={(isOpen) => {
          if (!isOpen) setItem(null);
        }}
      >
        <Modal.Container size="cover">
          <Modal.Dialog
            aria-label={item?.alt ?? "Просмотр изображения"}
            className="bg-transparent p-0 shadow-none"
          >
            <Modal.CloseTrigger />
            <Modal.Body className="flex items-center justify-center p-0">
              {item?.kind === "video" ? (
                <video
                  src={item.src}
                  controls
                  autoPlay
                  className="max-h-[85vh] w-auto max-w-full rounded-lg"
                />
              ) : item ? (
                // Deliberately a plain <img>: the source is an arbitrary
                // full-size asset shown at its natural size, which is what
                // next/image is not for.
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.src}
                  alt={item.alt ?? ""}
                  className="max-h-[85vh] w-auto max-w-full rounded-lg object-contain"
                />
              ) : null}
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </LightboxContext.Provider>
  );
};

export const useLightbox = () => {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error("useLightbox должен вызываться внутри LightboxProvider");
  }
  return context;
};
