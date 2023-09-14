const location = () => {
  return (
    <div className="size border-b border-base-100">
      <div className="grid grid-cols-2 gap-10 mb-16">
        <div className="col-span-2 lg:col-span-1">
          <h1 className="text-5xl text-mainText font-semibold mb-5">
            Sheraton
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3547.954853746437!2d33.83269158647951!3d27.22056718612419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145287b12e428143%3A0x8d0772063857dc37!2sMoby%20Dick%20Restaurant!5e0!3m2!1sen!2sus!4v1694654894665!5m2!1sen!2sus"
            width="100%"
            height="600"
            style={{ border: "0" }}
            loading="lazy"
          ></iframe>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <h1 className="text-5xl text-mainText font-semibold mb-5">
            Steigenberger
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2209.2886963149613!2d33.82323992756354!3d27.163264859510015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145287baf1b93d67%3A0x907350782c4e2bdd!2sMoby%20Dick%20Restaurant%2C%20Aldau%20Promenade%2C%20Steigenberger%20pure%20lifestyle!5e0!3m2!1sen!2sus!4v1694654952380!5m2!1sen!2sus"
            width="100%"
            height="600"
            style={{ border: "0" }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-flow-col gap-7">
        <div className="col-span-2 md:col-span-1">
          <h1 className="text-white text-2xl md:text-3xl font-bold mb-2 md:mb-5">
            Address
          </h1>
          <p className="subtitle">782 S Westwood Blvd, Los Angeles, CA 90024</p>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h1 className="text-white text-2xl md:text-3xl font-bold mb-2 md:mb-5">
            Contact
          </h1>
          <p className="subtitle">
            <a
              className="underline"
              href="https://www.google.com/maps/dir//Hurghada+Red+Sea+Governorate/@27.2578957,33.8116067,11z/data=!4m5!4m4!1m0!1m2!1m1!1s0x145287b2cd3dbbb3:0x2db807f98bd3c360"
              target="_blank"
              rel="noopener noreferrer"
            >
              T. (213) 384-3894, M. (213) 384-3896
            </a>
          </p>
        </div>
        <div className="col-span-2 md:col-span-1 md:row-span-3">
          <h1 className="text-white text-2xl md:text-3xl font-bold mb-2 md:mb-5">
            Hours
          </h1>
          <h2 className="text-white text-xl md:text-2xl font-bold mb-2">
            Dinner
          </h2>
          <p className="subtitle mb-2 md:mb-5">
            Monday -Saturday: 1:00pm - 10:00pm, Sunday: 1:00pm - 9:00pm
          </p>
          <h2 className="text-white text-xl md:text-2xl font-bold mb-2">
            Brunch
          </h2>
          <p className="subtitle">Monday -Saturday: Noon - 3:00pm</p>
        </div>
      </div>
    </div>
  );
};

export default location;
