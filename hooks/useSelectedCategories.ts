import { useState } from 'react';

interface Category {
    id: number;
    name: string;
}

const useSelectedCategories = (): [Set<Category>, (category: Category) => void, (category: Category) => void] => {
    const [selectedCategories, setSelectedCategories] = useState<Set<Category>>(new Set());

    const addCategory = (category: Category) => {
        setSelectedCategories((prevSelectedCategories) => new Set([...prevSelectedCategories, category]));
    };

    const removeCategory = (category: Category) => {
        setSelectedCategories((prevSelectedCategories) => {
            const updatedCategories = new Set(prevSelectedCategories);
            updatedCategories.delete(category);
            return updatedCategories;
        });
    };

    return [selectedCategories, addCategory, removeCategory];
};

export default useSelectedCategories;