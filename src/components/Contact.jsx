import React from "react";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/_atharva.47/",
    logo: "https://img.icons8.com/fluency/48/000000/instagram-new.png"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/atharv-bargir-081927250/",
    logo: "https://img.icons8.com/fluency/48/000000/linkedin.png"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 md:px-8 lg:px-32 flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold mb-4">Contact</h2>
      <p className="text-gray-300 mb-6">Connect with me on social media!</p>
      <div className="flex gap-8 justify-center">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:scale-110 transition-transform"
          >
            <img src={link.logo} alt={link.name + ' logo'} className="w-12 h-12 mb-2" />
            <span className="text-lg text-gray-200 font-semibold">{link.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;