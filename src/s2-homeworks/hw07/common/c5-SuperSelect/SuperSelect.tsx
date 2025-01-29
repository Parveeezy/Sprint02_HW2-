import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent,
} from 'react';
import s from './SuperSelect.module.css';

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>;

type OptionType = {
    id: number;
    value: string | number;
};

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: OptionType[];
    onChangeOption?: (option: any) => void;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
                                                         options,
                                                         className,
                                                         onChange,
                                                         onChangeOption,
                                                         ...restProps
                                                     }) => {
    // Преобразуем массив опций в JSX-элементы
    const mappedOptions: JSX.Element[] = options
        ? options.map((o) => (
            <option
                id={'hw7-option-' + o.id}
                className={s.option}
                key={o.id}
                value={o.id}
            >
                {o.value}
            </option>
        ))
        : []; // Если опций нет, отображаем пустой список

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // Вызываем onChangeOption с выбранным значением
        onChangeOption?.(Number(e.currentTarget.value));

        // Если передан onChange, вызываем его
        onChange?.(e);
    };

    // Формируем итоговый класс для select
    const finalSelectClassName = s.select + (className ? ' ' + className : '');

    return (
        <select
            className={finalSelectClassName}
            onChange={onChangeCallback}
            {...restProps}
        >
            {mappedOptions.length > 0 ? (
                mappedOptions
            ) : (
                <option disabled>No options</option> // Сообщение, если опций нет
            )}
        </select>
    );
};

export default SuperSelect;