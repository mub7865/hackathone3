import { Suspense } from 'react';
import CategoryContent from "@/components/CategoryContent";


export default function CategoriesPage() {


  return (
    <Suspense fallback={<div>Loading categories...</div>}>
    <CategoryContent/>
    </Suspense>
  );
}
