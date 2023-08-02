'use client';
import { atom, useAtom } from 'jotai';
import { ChangeEvent } from 'react';

// Create your atoms and derivatives
const textAtom = atom('');
const uppercaseAtom = atom(
    (get) => get(textAtom).toUpperCase(),
);

// Use them anywhere in your app
const Input = () => {
    const [text, setText] = useAtom(textAtom);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setText(e.target.value);
    };
    return (
        <input className={'bg-gray-300 p-0 text-2xl text-black'} value={text} onChange={handleChange} />
    );
};

const Uppercase = () => {
    const [uppercase] = useAtom(uppercaseAtom);
    return (
        <div className={'text-4xl pt-2.5'}>Uppercase: {uppercase}</div>
    );
};

export default function Home() {
    return (
        <>
            <Input />
            <Uppercase />
        </>
    );
}
