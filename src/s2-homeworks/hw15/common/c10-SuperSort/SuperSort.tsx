import React from 'react';
import downIcon from '../../assets/arrowDown.png';
import upIcon from '../../assets/arrowUp.png';
import noneIcon from '../../assets/noneIcon.png';

export type SuperSortPropsType = {
    id?: string;
    sort: string; // Текущее состояние сортировки (например, '0name' или '1name')
    value: string; // Значение, по которому происходит сортировка (например, 'name')
    onChange: (newSort: string) => void; // Функция для обновления состояния сортировки
};

// Функция для определения следующего состояния сортировки
export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === down) {
        return up; // Переключаем на сортировку по возрастанию
    } else if (sort === up) {
        return ''; // Отключаем сортировку
    } else {
        return down; // Включаем сортировку по убыванию
    }
};

const SuperSort: React.FC<SuperSortPropsType> = ({ sort, value, onChange, id = 'hw15' }) => {
    const up = '0' + value; // Состояние сортировки по возрастанию (например, '0name')
    const down = '1' + value; // Состояние сортировки по убыванию (например, '1name')

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up)); // Обновляем состояние сортировки
    };

    // Определяем, какую иконку отображать
    let icon;
    if (sort === down) {
        icon = <img src={downIcon} alt="Sort descending" aria-label="Sort descending" />;
    } else if (sort === up) {
        icon = <img src={upIcon} alt="Sort ascending" aria-label="Sort ascending" />;
    } else {
        icon = <img src={noneIcon} alt="No sort" aria-label="No sort" />;
    }

    return (
        <span id={id + '-sort-' + value} onClick={onChangeCallback} style={{ cursor: 'pointer' }}>
            {icon}
        </span>
    );
};

export default SuperSort;