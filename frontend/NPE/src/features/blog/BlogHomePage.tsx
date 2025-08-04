//TODO: Implement Blog

// import React from 'react';
// import { blogPosts as ALL_POSTS } from './blogPosts'; 
// import { Link } from 'react-router-dom';

// const BlogPage: React.FC = () => {
//   return (
//     // main page container with padding and vertical space between posts
//     <div className="mx-auto px-4 py-12 space-y-8">
//       <h1 className="text-4xl font-bold text-center mb-4">National Park Blog</h1>
      
//       {/* map over each post to render a card */}
//       {ALL_POSTS.map((post) => (
//         // each post is a link to its full page
//         <Link key={post.id} to={`/blog/${post.id}`}>
//           <div className="grid grid-cols-3 gap-6 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            
//             {/*image*/}
//             <div className="col-span-1">
//               <img 
//                 src={post.imageUrl} 
//                 alt={post.title} 
//                 className="w-full h-full object-cover rounded-md" 
//               />
//             </div>

//            {/*text content*/}
//             <div className="col-span-2 flex flex-col">
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-800">
//                   {post.title}
//                 </h2>
//                 <p className="mt-2 text-gray-600">
//                   {post.excerpt}
//                 </p>
//               </div>

//               <div className="mt-auto pt-4 text-sm text-gray-500">
//                 <span>By {post.author} on {post.date}</span>
//               </div>
//             </div>

//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default BlogPage;