const EventImage = ({ image, className }) => {
  return (
    <div role="eventImage" className={`lg:w-1/2 w-full lg:pl-10 lg:py-6 pl-4 pr-4 mt-6 lg:mt-0 d-flex align-items-center justify-content-center ${className}`}>
      <img src={image} alt="" className="object-cover object-center w-full mx-auto  md:h-80 rounded-full" style={{ borderRadius: '10px', maxWidth: '100%' }} />
    </div>
  );
};

export default EventImage;




