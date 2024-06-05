import Image from "next/image";

export default function Categories() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center gap-10 h-1/2">
        <div>Categories</div>
        <div>lorem ipmus dolor sit amet</div>
        <div>shop all</div>
      </div>
      <div className="flex flex-row justify-center items-center gap-8 h-1/2">
        <Image src="/bendera-indonesia.jpg" width="200" height="200" />
        <Image src="/bendera-indonesia.jpg" width="200" height="200" />
        <Image src="/bendera-indonesia.jpg" width="200" height="200" />
      </div>
    </div>
  );
}
