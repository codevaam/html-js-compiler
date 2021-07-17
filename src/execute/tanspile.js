const options = {
    presets: ["@babel/preset-env", ["es2015", {"modules": false}]]
}

export default function prePorcess(str) {
    const {code} = babel.transform(str, options)

    return code;
}