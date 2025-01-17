const SectionTitle = ( {title, subtitle}) => {
    return (
        <div className="mt-12">
            <div className="border-y-2 w-fit px-6 mx-auto text-center uppercase py-4">
                <h2 className="text-3xl md:text-4xl font-bold text-[#825afa]">{title}</h2>
                <p className="text-md font-semibold text-[#333333]">{subtitle}</p>
            </div>
        </div>
    );
};

export default SectionTitle;