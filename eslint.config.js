const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const parser = require("@typescript-eslint/parser");

module.exports = [
    {
        files: ["**/*.ts"],
        languageOptions: {
            parser: parser,
            parserOptions: {
                ecmaVersion: 6,
                sourceType: "module"
            }
        },
        plugins: {
            "@typescript-eslint": typescriptEslint
        },
        rules: {
            "@typescript-eslint/naming-convention": [
                "warn",
                {
                    "selector": "default",
                    "format": ["camelCase"]
                },
                {
                    "selector": "variable",
                    "format": ["camelCase", "UPPER_CASE"]
                },
                {
                    "selector": "parameter",
                    "format": ["camelCase"],
                    "leadingUnderscore": "allow"
                },
                {
                    "selector": "memberLike",
                    "modifiers": ["private"],
                    "format": ["camelCase"],
                    "leadingUnderscore": "allow"
                },
                {
                    "selector": "typeLike",
                    "format": ["PascalCase"]
                },
                {
                    "selector": "property",
                    "format": ["camelCase", "PascalCase"]
                }
            ],
            "curly": "warn",
            "eqeqeq": "warn",
            "no-throw-literal": "warn"
        }
    },
    {
        ignores: ["out/**", "dist/**", "**/*.d.ts"]
    }
];