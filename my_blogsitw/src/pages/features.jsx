import React from 'react';
import { PencilIcon, PlusIcon, DocumentTextIcon, HeartIcon, ShareIcon, ChatIcon, BookmarkIcon, SearchIcon } from '@heroicons/react/solid';

const features = [
  {
    icon: <PencilIcon className="h-6 w-6 text-blue-500" />,
    title: "Edit",
    description: "Edit existing content effortlessly to keep it up-to-date.",
  },
  {
    icon: <PlusIcon className="h-6 w-6 text-green-500" />,
    title: "Add",
    description: "Add new content seamlessly with just a few clicks.",
  },
  {
    icon: <DocumentTextIcon className="h-6 w-6 text-purple-500" />,
    title: "Read",
    description: "You can read blogs related to home, designs and costs.",
  },
  {
    icon: <HeartIcon className="h-6 w-6 text-red-500" />,
    title: "Favorite",
    description: "Save your favorite blogs for quick access later.",
  },
  {
    icon: <ShareIcon className="h-6 w-6 text-yellow-500" />,
    title: "Share",
    description: "Share your favorite blogs with your friends on social media.",
  },
  {
    icon: <ChatIcon className="h-6 w-6 text-pink-500" />,
    title: "Comment",
    description: "Engage with other readers by leaving comments on blogs.",
  },
  {
    icon: <BookmarkIcon className="h-6 w-6 text-orange-500" />,
    title: "Bookmark",
    description: "Bookmark blogs to revisit them at any time.",
  },
  {
    icon: <SearchIcon className="h-6 w-6 text-teal-500" />,
    title: "Search",
    description: "Quickly find blogs related to specific topics of interest.",
  },
];


const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-base text-orange-700 font-semibold tracking-wide uppercase ">Features</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text sm:text-4xl">
          Our Amazing Features
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-orange-100 shadow-md rounded-lg p-6 flex items-start transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex-shrink-0">
              {feature.icon}
            </div>
            <div className="ml-4">
              <h3 className="text-lg leading-6 font-medium text-black">{feature.title}</h3>
              <p className="mt-2 text-base text-black font-medium">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
