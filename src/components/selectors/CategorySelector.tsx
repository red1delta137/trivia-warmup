import { useEffect, useState } from "react";
import { MultiSelect } from '@mantine/core';

export function CategorySelector() {

    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/category/all')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <MultiSelect
            placeholder="Select up to 10 Categories"
            data={categories}
            maxValues={10}
            clearable
            onChange={(values) => setSelectedCategories(values)}
        />
    );
}