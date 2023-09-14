const policy = () => {
  const title = "Booking and Cancellation Policy";
  const data = [
    {
      title: "Larger Party Policy",
      subtitle:
        "Donec quis fermentum felis. Praesent felis orci, vulputate in fermentum ut, semper quis purus. Aenean sit amet sem ac turpis tincidunt dapibus nec eget felis. Donec sit amet est consectetur, dignissim diam ut, rhoncus nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla bibendum nisi vitae mauris accumsan consectetur. Nulla est mi, aliquam cursus nibh eu, iaculis cursus nunc. Nunc quis dapibus turpis. Nullam ornare mi ut malesuada cursus.",
      id: 1,
    },
    {
      title: "Reservation Timing Policy",
      subtitle:
        "Nam sed massa vitae quam pharetra ultricies. Nunc sem felis, aliquam vel viverra vel, convallis vitae ipsum. Donec pretium tortor velit, ut porttitor augue rhoncus eget. Pellentesque tempor, nulla a faucibus dignissim, magna felis consectetur ex, ac sodales ipsum arcu sed tortor. Etiam suscipit ligula vel arcu facilisis venenatis. Aenean commodo elementum ullamcorper. Mauris a diam eget diam consequat euismod eget ac tellus.",
      id: 2,
    },
    {
      title: "Dining Guidelines",
      subtitle:
        "Duis sit amet ante sollicitudin lacus vestibulum fringilla. In vitae mauris quis ipsum mattis viverra. Fusce sed massa sem. Phasellus gravida a arcu in lobortis. Sed quis ante risus. Nulla fringilla a tellus viverra ornare. Etiam nec sem quis arcu efficitur egestas. Curabitur in scelerisque velit. Duis in libero eros. Phasellus eget ullamcorper magna. Aliquam vel dapibus ex. Vivamus et mauris turpis. Cras molestie, sem a facilisis tempus, enim est dignissim ex, vel feugiat erat felis in turpis. Nullam vitae ex vel nulla viverra condimentum.",
      id: 3,
    },
    {
      title: "Service Charges and Other Policies",
      subtitle:
        "Ut mattis ex id est volutpat, a cursus sem posuere. Proin eget ante metus. In a diam varius, fermentum eros id, pellentesque ipsum. Cras odio velit, dapibus sed tempor convallis, luctus et orci. Sed lacinia massa arcu, sed mollis ipsum pulvinar sed. Nullam pulvinar diam id sollicitudin mattis. Nulla tristique diam et mattis pellentesque. Praesent vestibulum ligula purus, sed auctor sem aliquam sed. Nam sagittis urna justo, ac rhoncus augue pretium quis. Nullam magna turpis, tincidunt id ultricies ac, pellentesque et erat. Fusce et hendrerit lacus, quis elementum quam. Pellentesque molestie ipsum nec arcu luctus, sit amet viverra purus finibus.",
      id: 4,
    },
  ];

  return (
    <div className="size">
      <div className="mb-16">
        <h1 className="title">{title}</h1>
      </div>
      <div>
        {data.map((item, i) => (
          <div
            tabIndex={0}
            className="collapse collapse-arrow text-secText border-y rounded-none border-base-300 px-5 md:px-10"
            key={item.id}
          >
            <div className="collapse-title text-lg md:text-xl font-medium px-0 py-[30px]">
              {item.title}
            </div>
            <div className="collapse-content px-0">
              <p className="text-md leading-5 mb-6">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default policy;
