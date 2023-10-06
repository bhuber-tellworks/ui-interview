import { useEffect, useLayoutEffect } from 'react';

const fetchObject = async () => {
    return new Promise(resolve => {
        setTimeout(resolve, 1000);
    });
};

export default function Example() {
    useEffect(() => {
        console.log('1');
        const exec = async () => {
            const res = await fetchObject();
            console.log('2');
            return res;
        };
        exec();
        console.log('3');
    }, []);

    useLayoutEffect(() => {
        console.log('4');
        const exec = async () => {
            const res = await fetchObject();
            console.log('5');
            return res;
        };
        exec();
        console.log('6');
    }, []);

    console.log('7');

    return <div>Example</div>;
}
