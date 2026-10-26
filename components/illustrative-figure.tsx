import Image from "next/image";

type IllustrativeFigureProps = {
  src: string;
  alt: string;
  title: string;
  className?: string;
  width: number;
  height: number;
  note?: string;
};

export function IllustrativeFigure({
  src,
  alt,
  title,
  className = "",
  width,
  height,
  note = "Illustrative image · not a photograph of the residence",
}: IllustrativeFigureProps) {
  return (
    <figure className={`illustrative-figure ${className}`.trim()}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 680px) 100vw, (max-width: 940px) 50vw, 42vw"
        loading="lazy"
        unoptimized
      />
      <figcaption>
        <span>{title}</span>
        <small>{note}</small>
      </figcaption>
    </figure>
  );
}
