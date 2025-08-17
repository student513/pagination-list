import { Post } from "@/types/post";

interface PostCardProps {
  post: Post;
  index: number; // 순서를 나타내는 인덱스 추가
}

export default function PostCard({ post, index }: PostCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2 max-h-12 overflow-hidden">
        {index + 1}.{post.title}
      </h3>
      <p className="text-gray-600 text-sm line-clamp-3 max-h-20 overflow-hidden mb-4">
        {post.body}
      </p>
      <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors duration-200">
        Read More
      </button>
    </div>
  );
}
