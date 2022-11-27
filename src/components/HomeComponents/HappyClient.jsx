import React from "react";

// clients fake data
const clientReviews = [
  {
    id: 123,
    imgUrl: "https://www.booktionary.com.bd/storage/app/client//image79067.jpg",
    name: "Saad Shuvro",
    reviewerInfo: "Student (Ahsanullah University)",
    reviewDesc:
      "বুকশনারি পরিবারকে অসংখ্য ধন্যবাদ।ঠিক সময়ের মধ্যে ডেলিভারি দেওয়ার জন্য। আশা করি বুকশনারি জনপ্রিয় হবে।",
    ratings: 5,
  },
  {
    id: 234,
    imgUrl: "https://www.booktionary.com.bd/storage/app/client//image96569.jpg",
    name: "Fahim Hasan Chowdhury",
    reviewerInfo: "Influencer",
    reviewDesc:
      "অনলাইনে বই বিক্রি করে এমন অনেক অনলাইন শপ থেকে বই কিনেছি।কিন্তু তাদের বেপারে যেই জিনিসটা ভাল লেগেছে তা হল কাস্টমার-সার্ভিস। ফোনে এবং ফেইসবুকে তারা খুব ভাল ব্যবহার করে যেটা কাস্টমার হিসাবে অনেক ভাল লেগেছে।আর তাদের সার্ভিসটাও ছিল দ্রুত।একদিনের ভিতর বই পেয়ে গিয়েছি। কোন সমস্যাও ছিল না কোন ধরনের।",
    ratings: 5,
  },
  {
    id: 345,
    imgUrl: "https://www.booktionary.com.bd/storage/app/client//image62084.jpg",
    name: "Saad Shuvro",
    reviewerInfo: "Student (Stampford University)",
    reviewDesc:
      "Well its a big review now..To be very honest i have got the best book delivery ever from this group..as i didnt even expect that the books will be this much better and so cleanly printed..me and my other friends liked the books so much nd thanked me that i can't even imagine..even my faculty members and seniors also appreciated this..",
    ratings: 5,
  },
];

const HappyClient = () => {
  return (
    <section className="mx-auto px-4 md:px-8 my-10">
      <h2 className="text-center text-3xl font-semibold">Happy Clients</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 mt-4">
        {clientReviews.map((clientReview) => {
          return (
            <div key={clientReview.id} className="flex gap-2">
              <div>
                <img className="w-11/12" src={clientReview.imgUrl} alt="" />
              </div>
              <div>
                <p className="text-[.8rem]">{clientReview.reviewDesc}</p>
                <div className="mt-4">
                  <h4 className="text-xl font-semibold">{clientReview.name}</h4>
                  <h6>{clientReview.reviewerInfo}</h6>
                  <p className="flex text-yellow-600">
                    {[...Array(clientReview.ratings)].map((x, idx) => (
                      <svg
                        key={idx}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 inline-flex"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HappyClient;
