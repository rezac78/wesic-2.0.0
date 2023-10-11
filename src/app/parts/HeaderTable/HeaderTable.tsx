import React from 'react';
interface DataHeader {
        name: string;
}
interface HeaderTableProps {
        Data: DataHeader[];
}
function HeaderTable({ Data }: HeaderTableProps) {
        return (
                <thead>
                        <tr>
                                {Data.map((e, index: number) => (
                                        <th key={index} className="py-2 px-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">{e.name}</th>
                                ))}

                        </tr>
                </thead>
        );
}

export default HeaderTable;
