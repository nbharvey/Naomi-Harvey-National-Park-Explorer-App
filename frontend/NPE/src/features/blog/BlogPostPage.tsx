//TODO: Implement Blog

// import React from 'react';
// import { blogPosts as ALL_POSTS } from './blogPosts';
// import { Link } from 'react-router-dom';

// const BlogPostPage: React.FC = () => {
//   const postId = 'epic-western-road-trip-part-1';

//   const currentPost = ALL_POSTS.find((post) => post.id === postId);
//   const otherPosts = ALL_POSTS.filter((post) => post.id !== postId);

//   if (!currentPost) {
//     return (
//       <div className="text-center py-20">
//         <h1 className="text-2xl">Post not found!</h1>
//       </div>
//     );
//   }

//   return (
//     <div className="mx-auto px-4 py-12">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        
//         {/* main content */}
//         <main className="lg:col-span-2">
//           <h1 className="text-5xl font-extrabold mb-4">{currentPost.title}</h1>
//           <div className="text-gray-500 mb-6">
//             By {currentPost.author} on {currentPost.date}
//           </div>
//           <img src={currentPost.imageUrl} alt={currentPost.title} className="w-full rounded-lg shadow-lg mb-8" />
//           {/* rendering HTML content */}
//           <div 
//             className="prose lg:prose-xl max-w-none" 
//             dangerouslySetInnerHTML={{ __html: currentPost.content }} 
//           />
//         </main>

//         {/* sidebar */}
//         <aside>
//           <div className="sticky top-8 bg-gray-50 p-6 rounded-lg">
//             <h3 className="text-xl font-bold mb-4 border-b pb-2">More Posts</h3>
//             <div className="space-y-4">
//               {otherPosts.map(post => (
//                 <Link key={post.id} to={`/blog/${post.id}`} className="group flex items-center gap-4">
//                   <div key={post.id} className="group flex items-center gap-4">
//                     <img src={post.imageUrl} alt={post.title} className="w-20 h-20 object-cover rounded-md flex-shrink-0" />
//                     <div>
//                       <h4 className="font-semibold group-hover:text-blue-600 transition-colors">{post.title}</h4>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// };

// export default BlogPostPage;