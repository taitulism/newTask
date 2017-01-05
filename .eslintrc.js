module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "es6": true,
        "mocha": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "accessor-pairs": "error",
        "array-bracket-spacing": "error",
        "array-callback-return": "error",
        "arrow-body-style": "error",
        "block-scoped-var": "error",
        "block-spacing": "error",
        "callback-return": "error",
        "class-methods-use-this": "error",
        "comma-style": "error",
        "complexity": "error",
        "computed-property-spacing": "error",
        "consistent-this": "error",
        "default-case": "error",
        "dot-notation": "error",
        "eol-last": "error",
        "eqeqeq": "error",
        "func-call-spacing": "error",
        "func-name-matching": "error",
        "generator-star-spacing": "error",
        "guard-for-in": "error",
        "handle-callback-err": "error",
        "id-blacklist": "error",
        "id-match": "error",
        "jsx-quotes": "error",
        "lines-around-comment": "error",
        "lines-around-directive": "error",
        "max-depth": "error",
        "max-nested-callbacks": "error",
        "max-params": ["error", 4],
        "max-statements-per-line": "error",
        "new-cap": "error",
        "new-parens": "error",
        "newline-per-chained-call": "error",
        "no-alert": "error",
        "no-array-constructor": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-catch-shadow": "error",
        "no-confusing-arrow": "error",
        "no-console": "error",
        "no-continue": "error",
        "no-div-regex": "error",
        "no-duplicate-imports": "error",
        "no-else-return": "error",
        "no-empty-function": "error",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-floating-decimal": "error",
        "no-global-assign": "error",
        "no-implicit-coercion": "error",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-iterator": "error",
        "no-label-var": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-loop-func": "error",
        "no-mixed-operators": "error",
        "no-mixed-requires": "error",
        "no-multi-str": "error",
        "no-multiple-empty-lines": "error",
        "no-nested-ternary": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-require": "error",
        "no-new-wrappers": "error",
        "no-octal-escape": "error",
        "no-path-concat": "error",
        "no-process-exit": "error",
        "no-proto": "error",
        "no-prototype-builtins": "error",
        "no-restricted-globals": "error",
        "no-restricted-imports": "error",
        "no-restricted-modules": "error",
        "no-restricted-properties": "error",
        "no-restricted-syntax": "error",
        "no-return-assign": "error",
        "no-script-url": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow": "error",
        "no-shadow-restricted-names": "error",
        "no-spaced-func": "error",
        "no-template-curly-in-string": "error",
        "no-throw-literal": "error",
        "no-undef-init": "error",
        "no-undefined": "error",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": "error",
        "no-unsafe-negation": "error",
        "no-useless-call": "error",
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-constructor": "error",
        "no-useless-escape": "error",
        "no-useless-rename": "error",
        "no-var": "error",
        "no-void": "error",
        "no-whitespace-before-property": "error",
        "no-with": "error",
        "object-curly-newline": "error",
        "object-property-newline": "error",
        "object-shorthand": "error",
        "one-var-declaration-per-line": "error",
        "operator-assignment": "error",
        "operator-linebreak": "error",
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-numeric-literals": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "radix": "error",
        "rest-spread-spacing": "error",
        "semi": "error",
        "semi-spacing": "error",
        "sort-imports": "error",
        "sort-vars": "error",
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "symbol-description": "error",
        "vars-on-top": "error",
        "wrap-iife": "error",
        "wrap-regex": "error",
        "yield-star-spacing": "error",
        "yoda": "error",
        "dot-location": [
            "error",
            "property"
        ],
        "func-names": [
            "error",
            "never"
        ],
        "func-style": [
            "error",
            "declaration"
        ],
        "keyword-spacing": [
            "error",
            {
                "after": true,
                "before": true
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "newline-after-var": [
            "error",
            "always"
        ],
        "arrow-parens": [
            "error",
            "always"
        ],
        "arrow-spacing": [
            "error",
            {
                "after": true,
                "before": true
            }
        ],
        "brace-style": [
            "error",
            "stroustrup"
        ],
        "comma-spacing": [
            "error",
            {
                "after": true,
                "before": false
            }
        ],
        "no-magic-numbers": [
            "warn",
            { "ignore": [0, 1, 2] }
        ],
        "object-curly-spacing": [
            "error",
            "never"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "template-curly-spacing": [
            "error",
            "never"
        ],
        "unicode-bom": [
            "error",
            "never"
        ],
        "no-use-before-define": "off",
        "no-warning-comments": "off",
        "quote-props": "off",
        "require-jsdoc": "off",
        "sort-keys": "off",
        "space-before-blocks": "off",
        "space-before-function-paren": "off",
        "no-param-reassign": "off",
        "no-plusplus": "off",
        "no-process-env": "off",
        "spaced-comment": "off",
        "strict": "off",
        "valid-jsdoc": "off",
        "init-declarations": "off",
        "camelcase": "off",
        "comma-dangle": "off",
        "consistent-return": "off",
        "curly": "off",
        "global-require": "off",
        "id-length": "off",
        "indent": "off",
        "key-spacing": "off",
        "line-comment-position": "off",
        "max-len": "off",
        "max-lines": "off",
        "max-statements": "off",
        "multiline-ternary": "off",
        "newline-before-return": "off",
        "no-extra-parens": "off",
        "no-inline-comments": "off",
        "no-invalid-this": "off",
        "no-multi-spaces": "off",
        "no-negated-condition": "off",
        "no-sync": "off",
        "no-tabs": "off",
        "no-ternary": "off",
        "no-trailing-spaces": "off",
        "one-var": "off",
        "padded-blocks": "off",
        "prefer-reflect": "off"
    }
};
