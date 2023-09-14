const location = () => {
  return (
    <div className="size border-b border-base-100">
      <div className="grid grid-cols-2 gap-10 mb-16">
        <div className="col-span-2 lg:col-span-1">
          <div className="text-center mb-5">
            <h1 className="text-5xl text-mainText font-semibold mb-2">
              Sheraton
            </h1>
            <p className="subtitle">
              782 S Westwood Blvd, Los Angeles, CA 90024
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3547.954853746437!2d33.83269158647951!3d27.22056718612419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145287b12e428143%3A0x8d0772063857dc37!2sMoby%20Dick%20Restaurant!5e0!3m2!1sen!2sus!4v1694654894665!5m2!1sen!2sus"
            width="100%"
            height="600"
            style={{ border: "0" }}
            loading="lazy"
          ></iframe>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <div className="text-center mb-5">
            <h1 className="text-5xl text-mainText font-semibold mb-2">
              Steigenberger
            </h1>
            <p className="subtitle">
              Youssef Affifi, Touristic Villages, Hurghada, Red Sea Governorate
              1962610
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2209.2886963149613!2d33.82323992756354!3d27.163264859510015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145287baf1b93d67%3A0x907350782c4e2bdd!2sMoby%20Dick%20Restaurant%2C%20Aldau%20Promenade%2C%20Steigenberger%20pure%20lifestyle!5e0!3m2!1sen!2sus!4v1694654952380!5m2!1sen!2sus"
            width="100%"
            height="600"
            style={{ border: "0" }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="text-center">
        <h1 className="title text-3xl md:text-5xl font-bold mb-2 md:mb-5">
          Hours
        </h1>
        <p className="subtitle mb-2 md:mb-5">Monday - Sunday: 14:00 - 01:00</p>
        <p className="subtitle">Wednesday - Thursday: 14:00 - 00:00</p>
      </div>
    </div>
  );
};

export default location;
