import Image from "next/image";
// import { convertToIndonesiaTime } from "@/models/ConvertTime";
interface CardProps {
  key: string;
  author?: string;
  title: string;
  image: string;
  description: string;
  publishedAt: string;
  url: string;
}

export default function Card({
  author,
  title,
  image,
  description,
  url,
  publishedAt,
}: CardProps) {
  const validDesc = description?.length > 0 ? description : null;
  return (
    <div className="z-0 mt-16 card w-[455px] lg:w-[435px] bg-white shadow-xl text-black">
      <figure>
        <a href={url} className="w-full">
          <img alt={title} src={image} className="h-60 object-fill w-full" />
        </a>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-justify break-words">{description}</p>
        <div className="card-actions justify-end">
          <div className="flex justify-between w-full">
            <p className="self-end">{publishedAt.slice(0, 10)}</p>
            <a href={url}>
              <button className="btn btn-primary">Read more</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
