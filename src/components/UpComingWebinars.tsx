import CustomButton from "./CustomButton";
import { CardComponent } from "./CardComponent";

export default function UpComingWebinars(){
    return(
        <div className="p-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
                        Featured Webinars
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        Enhance Your Musical Journey
                    </p>
                </div>
                <div className="mt-10">
                    <CardComponent />
                </div>
                <div className="mt-10 text-center">
                    <CustomButton text="View All Courses"/>
                </div>
            </div>
        </div>
    )
}