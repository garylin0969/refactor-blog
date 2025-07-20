'use client';

import { useState } from 'react';
import Dropdown from './dropdown';

const DropdownExample = () => {
    const [selectedValue, setSelectedValue] = useState<string | number>('');

    const options = [
        { id: '1', label: '選項 1', value: 'option1' },
        { id: '2', label: '選項 2', value: 'option2' },
        { id: '3', label: '選項 3', value: 'option3' },
        { id: '4', label: '選項 4', value: 'option4' },
        { id: '5', label: '選項 5', value: 'option5' },
    ];

    return (
        <div className="mx-auto max-w-md p-4">
            <h2 className="mb-4 text-xl font-bold">下拉選單範例</h2>

            <div className="space-y-6">
                <Dropdown
                    label="基本下拉選單"
                    options={options}
                    value={selectedValue}
                    onOptionChange={(value) => setSelectedValue(value)}
                    placeholder="請選擇一個選項"
                />

                <Dropdown label="禁用的下拉選單" options={options} disabled placeholder="此下拉選單已禁用" />

                <Dropdown
                    label="預設選項"
                    options={options}
                    value="option3"
                    onOptionChange={(value) => console.log('Selected:', value)}
                />
            </div>

            {selectedValue && (
                <div className="mt-4 rounded-md bg-gray-100 p-3 dark:bg-gray-800">
                    <p>
                        已選擇的值: <span className="font-medium text-sky-600 dark:text-sky-400">{selectedValue}</span>
                    </p>
                </div>
            )}
        </div>
    );
};

export default DropdownExample;
