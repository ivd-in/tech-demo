import React from "react";

const Team = () => {
  const teamMembers = [
    { name: "John Doe", role: "CEO", image: "/cdn/images/profile.png" },
    { name: "Jane Smith", role: "Designer", image: "/cdn/images/profile.png" },
    {
      name: "Mike Johnson",
      role: "Developer",
      image: "/cdn/images/profile.png",
    },
    {
      name: "Mike Johnson",
      role: "Developer",
      image: "/cdn/images/profile.png",
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-secondary tracking-tight line-clamp-1 text-black">
          Our Team Behind The Studio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-20">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 text-center"
            >
              <div className="relative w-40 h-40 mx-auto mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-4 border-gray-200 grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-primary font-semibold text-black">
                {member.name}
              </h3>
              <p className="text-xs text-gray-500 mt-2">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
