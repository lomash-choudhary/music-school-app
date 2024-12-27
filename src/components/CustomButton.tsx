import Link from "next/link";

export default function CustomButton({text}:{text:string}){
    return(
    <Link href={"/"} className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-900 bg-white rounded-md hover:bg-gray-100 transition-colors duration-200">{text}</Link>
)
}