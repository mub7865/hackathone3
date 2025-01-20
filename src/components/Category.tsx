// src/components/Category.tsx
import Link from 'next/link';
import { client } from '@/sanity/lib/client';

export default async function Category() {
  const categories = await client.fetch(`*[_type == "category"] { _id, name, "slug": slug.current }`);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {categories.map((category: { _id: string; name: string; slug: string }) => (
        <Link
          key={category._id}
          href={`/categories?category=${category.slug}`}
          className="p-4 border rounded-lg hover:bg-gray-200"
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}
