"use client"
import React from "react";

const placementData = [
  {
    id: 1,
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    website: "https://www.google.com",
  },
  {
    id: 2,
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    website: "https://www.microsoft.com",
  },
  {
    id: 3,
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    website: "https://www.amazon.com",
  },
  {
    id: 4,
    name: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/16/Facebook-icon-1.png",
    website: "https://www.facebook.com",
  },
  {
    id: 5,
    name: "Radison",
    logo: "https://cdn.freebiesupply.com/logos/large/2x/radisson-logo-png-transparent.png",
    website: "https://www.radissonhotels.com/en-us/",
  },
  {
    id: 6,
    name: "Royal Bank of Scotland",
    logo: "https://images.squarespace-cdn.com/content/v1/623b6c120a64d02ae34e6b2d/1649871802559-DWCU4KSCUAA3HCZDXZEF/RBS%402x.png",
    website: "https://www.rbs.co.uk/",
  },
  {
    id: 7,
    name: "Deloitte",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ66lDOnB6iXsBJCu70uj_iAJNgu75k_N-jfg&s",
    website: "https://www2.deloitte.com/us/en.html",
  },
  {
    id: 8,
    name: "Goibibo",
    logo: "https://lh3.googleusercontent.com/3azdOwzwVpbQ19g__b5F_-bqsM8cW2kzKTqq27p3EC6JOF-99cC8O9qaYojNHpi7XpVYnCKf5McyGoYa1iMdtIEuhvkVjqb7fkoF",
    website: "https://www.goibibo.com/",
  },
  {
    id: 9,
    name: "EY",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPrQzUaLRu44nhV7RsudZ0v1fipOExpZYOpA&s",
    website: "https://www.ey.com/",
  },
  {
    id: 10,
    name: "HERO",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUJmZQxombCBw6DtxPMBoUHUWQw5WXQoRx-w&s",
    website: "https://www.heromotocorp.com//",
  },
  {
    id: 11,
    name: "MetLife",
    logo: "https://mms.businesswire.com/media/20240625252542/en/2047942/5/metlife_eng_logo_rgb.jpg",
    website: "https://www.metlife.com/",
  },
  {
    id: 12,
    name: "Spicejet",
    logo: "https://brandlogos.net/wp-content/uploads/2023/10/spicejet-logo_brandlogos.net_0ywcb.png",
    website: "https://www.spicejet.com/",
  },
  {
    id: 13,
    name: "Samsung",
    logo: "https://bsmedia.business-standard.com/_media/bs/img/about-page/1562575696.png?im=FitAndFill=(826,465)",
    website: "https://www.samsung.com/in/",
  },

  {
    id: 14,
    name: "Nokia",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhJEdG7ZICbIWXks8gTlVBeMx9aw3Fawr3Sg&s",
    website: "https://www.nokia.com/",
  },
  {
    id: 15,
    name: "IBM",
    logo: "https://avatars.githubusercontent.com/u/1459110?s=280&v=4",
    website: "https://www.ibm.com/",
  },
  {
    id: 16,
    name: "Adobe",
    logo: "https://fabrikbrands.com/wp-content/uploads/Adobe-Logo-History-5.png",
    website: "https://www.adobe.com/",
  },
  {
    id: 17,
    name: "Genpact",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Genpact_logo.svg/1200px-Genpact_logo.svg.png",
    website: "https://www.genpact.com/",
  },
  {
    id: 18,
    name: "McDonald's",
    logo: "https://s7d1.scene7.com/is/image/mcdonalds/History_Timeline_1968_Thumbnail-1:3-column-desktop?resmode=sharp2",
    website: "https://www.mcdonalds.com/",
  },
  {
    id: 19,
    name: "IndiGo",
    logo: "https://seekvectorlogo.com/wp-content/uploads/2022/01/indigo-vector-logo-2022.png",
    website: "https://www.goindigo.in/",
  },
  {
    id: 20,
    name: "KPMG",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTleEYqQONNDL5pKaTOd11j2upI1IFJEaE9qg&s",
    website: "https://www.kpmg.com/",
  },
  {
    id: 21,
    name: "ICICI Lombard",
    logo: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-04/09/thumb/featurecrop/1200X900/1712661485-9599.jpg",
    website: "https://www.icicilombard.com/",
  },
];

const Placement = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 py-12 pt-18 rounded-4xl">
      <div className="container mx-auto px-4 pt-14  ">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Universities Top Placement Partners
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 bg-white bg-opacity-80 shadow-xl rounded-4xl p-6">
          {placementData.map((partner) => (
            <a
              key={partner.id}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-24 h-24 object-contain mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-700">
                {partner.name}
              </h2>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Placement;
