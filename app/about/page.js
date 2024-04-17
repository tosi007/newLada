import React from "react";

const page = () => {
  return (
    <div>
      <p className="text-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d720.5307885834818!2d74.07989823612478!3d32.57737441556186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f1b26de6213b1%3A0xf91c27fd04679f67!2sSarwar%20Gold%20Plaza!5e0!3m2!1sen!2s!4v1713341630601!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </p>
    </div>
  );
};

export default page;
