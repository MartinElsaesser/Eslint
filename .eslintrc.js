module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "prettier",
    ], 
    "rules": {
        "indent": [
            0,
            "tab"
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": 0,
        "prettier/prettier": [
            "error",
            {
                "trailingComma": "es5",
                "singleQuote": false,
                "printWidth": 120
            }
        ],
    },
    "plugins": [
        "prettier",
    ]
};