import transpile from './tanspile';

export default function run(code) {
    try {
        (new Function(transpile(code)))()
    } catch(err) {
        console.log(err);
    }
}