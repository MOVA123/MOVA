import Image from "next/image";
export default function Input() {
  //   const onChange = (e) => {
  //     console.log(e)
  //   };
  return (
    <>
      <Image
        src="/assets/icons/search.svg"
        alt=""
        width="10"
        height="10"
        className="inline-flex shrink-0 w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 z-10 text-icon-subtle cursor-pointer"
      />
      <input
        className="p-3 text-default ring-offset-surface-default aria-[invalid=true]:border-critical aria-[invalid=true]:hover:border-surface-critical-hovered aria-[invalid=true]:hover:bg-surface-accent-red-subtlest file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-30 rounded-full h-10 border focus-visible:outline-none aria-[invalid=true]:focus-visible:ring-error focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-0 shadow-background-default relative w-full px-9 flex space-x-2 text-base shadow-none placeholder:text-subtlest border-transparent bg-surface-accent-gray-subtlest hover:border-default hover:bg-surface-accent-gray-subtlest focus-visible:bg-surface-default focus-visible:border-default"
        autoComplete="off"
        placeholder="搜索 ..."
        readOnly
      />
    </>
  );
}
