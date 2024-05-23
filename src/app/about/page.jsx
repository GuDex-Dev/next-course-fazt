"use client";

import { useRouter } from "next/navigation";

function AboutPage() {
  const router = useRouter();

  return (
    <section>
      <h1>About</h1>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus vero
        repellat, qui nostrum molestiae, rerum corporis ipsam magnam neque
        similique iste! Cumque expedita culpa molestiae magni vitae delectus
        possimus, ullam quod commodi repellendus laudantium repellat hic odio
        est sequi, non dolorum deleniti harum. Et, porro iste, ducimus vitae
        eius aut quibusdam perferendis ab quae voluptate cumque. Consequatur id
        culpa minima non excepturi consectetur odio laboriosam, ducimus sequi
        quos praesentium fugit expedita amet quibusdam saepe veritatis itaque
        eius iusto. Officia asperiores libero ex iure voluptatibus impedit
        repudiandae illum minima sed placeat commodi, aliquid distinctio
        temporibus facilis doloremque sint beatae, nisi minus.
      </p>

      <button
        className="bg-sky-400 px-3 py-2 rounded-md"
        onClick={() => {
          alert("executing");
          router.push(`/`);
        }}
      >
        Click
      </button>
    </section>
  );
}

export default AboutPage;
