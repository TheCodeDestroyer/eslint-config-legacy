module.exports = {
    "rules": {
        "accessor-pairs": "error",
        "array-bracket-spacing": "off",
        "array-callback-return": "error",
        "arrow-body-style": "off",
        "arrow-parens": "off",
        "arrow-spacing": ["error", { "before": true, "after": true }],
        "block-spacing": ["error", "always"],
        "brace-style": ["error", "stroustrup", { "allowSingleLine": true }], "block-scoped-var": "off",
        "callback-return": "off",
        "capitalized-comments": "off",
        "class-methods-use-this": "off",
        "complexity": "off",
        "computed-property-spacing": "off",
        "consistent-return": "off",
        "consistent-this": "off",
        "camelcase": ["error", { "properties": "never" }],
        "comma-dangle": [
            "error", {
                "arrays": "never",
                "objects": "never",
                "imports": "never",
                "exports": "never",
                "functions": "never"
            }
        ],
        "comma-spacing": ["error", { "before": false, "after": true }],
        "comma-style": ["error", "last"],
        "constructor-super": "error",
        "curly": ["error", "multi-line"],
        "dot-location": ["error", "property"],
        "dot-notation": "off",
        "eol-last": "error",
        "eqeqeq": ["error", "always", { "null": "ignore" }], "default-case": "off", "func-name-matching": "off",
        "func-names": "off",
        "func-style": "off",
        "func-call-spacing": ["error", "never"],
        "generator-star-spacing": ["error", { "before": true, "after": true }],
        "guard-for-in": "off",
        "handle-callback-err": ["error", "^(err|error)$"],
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "id-blacklist": "off",
        "id-length": "off",
        "id-match": "off",
        "indent-legacy": "off",
        "init-declarations": "off",
        "jsx-quotes": "off",
        "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
        "keyword-spacing": ["error", { "before": true, "after": true }], "global-require": "off", "line-comment-position": "off",
        "linebreak-style": "off",
        "lines-around-comment": "off",
        "lines-around-directive": "off",
        "max-depth": "off",
        "max-len": "off",
        "max-lines": "off",
        "max-nested-callbacks": "off",
        "max-params": "off",
        "max-statements": "off",
        "max-statements-per-line": "off",
        "multiline-ternary": "off",
        "newline-after-var": "off",
        "newline-before-return": "off",
        "newline-per-chained-call": "off",
        "no-alert": "off",
        "no-await-in-loop": "off",
        "no-bitwise": "off",
        "no-buffer-constructor": "off",
        "no-case-declarations": "error",
        "no-catch-shadow": "off",
        "no-confusing-arrow": "off",
        "no-console": "error",
        "no-continue": "off",
        "no-div-regex": "off",
        "no-duplicate-imports": "off",
        "no-else-return": "off",
        "no-empty": "error",
        "no-empty-function": "off",
        "no-eq-null": "off",
        "no-extra-label": "off",
        "no-extra-semi": "error",
        "no-implicit-coercion": "off",
        "no-implicit-globals": "off",
        "no-inline-comments": "off",
        "no-invalid-this": "off",
        "no-lonely-if": "off",
        "no-loop-func": "off",
        "no-magic-numbers": "off",
        "no-mixed-requires": "off",
        "no-multi-assign": "off",
        "no-native-reassign": "off",
        "no-negated-condition": "off",
        "no-nested-ternary": "off",
        "no-param-reassign": "off",
        "no-plusplus": "off",
        "no-process-env": "off",
        "no-process-exit": "off",
        "no-prototype-builtins": "off",
        "no-restricted-globals": "off",
        "no-restricted-imports": "off",
        "no-restricted-modules": "off",
        "no-restricted-properties": "off",
        "no-restricted-syntax": "off",
        "no-script-url": "off",
        "no-shadow": "off",
        "no-spaced-func": "off",
        "no-sync": "off",
        "no-ternary": "off",
        "no-undefined": "off",
        "no-underscore-dangle": "off",
        "no-unused-labels": "error",
        "no-useless-concat": "off",
        "no-var": "off",
        "no-void": "off",
        "no-warning-comments": "off",
        "nonblock-statement-body-position": "off",
        "new-cap": ["error", { "newIsCap": true, "capIsNew": false }],
        "new-parens": "error",
        "no-array-constructor": "error",
        "no-caller": "error",
        "no-class-assign": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-const-assign": "error",
        "no-constant-condition": ["error", { "checkLoops": false }],
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty-character-class": "error",
        "no-empty-pattern": "error",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-parens": ["error", "functions"],
        "no-fallthrough": "error",
        "no-floating-decimal": "error",
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-implied-eval": "error",
        "no-inner-declarations": ["error", "functions"],
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-iterator": "error",
        "no-label-var": "error",
        "no-labels": ["error", { "allowLoop": false, "allowSwitch": false }],
        "no-lone-blocks": "error",
        "no-mixed-operators": [
            "error", {
                "groups": [
                    ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                    ["&&", "||"],
                    ["in", "instanceof"]
                ],
                "allowSamePrecedence": true
            }
        ],
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
        "no-negated-in-lhs": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-require": "error",
        "no-new-symbol": "error",
        "no-new-wrappers": "error",
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-path-concat": "error",
        "no-proto": "error",
        "no-redeclare": "error",
        "no-regex-spaces": "error",
        "no-return-assign": ["error", "except-parens"],
        "no-return-await": "error",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow-restricted-names": "error",
        "no-sparse-arrays": "error",
        "no-tabs": "error",
        "no-template-curly-in-string": "error",
        "no-this-before-super": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef": "error",
        "no-undef-init": "error",
        "no-unexpected-multiline": "error",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": ["error", { "defaultAssignment": false }],
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true, "allowTaggedTemplates": true }],
        "no-unused-vars": ["error", { "vars": "all", "args": "none", "ignoreRestSiblings": true }],
        "no-use-before-define": ["error", { "functions": false, "classes": false, "variables": false }],
        "no-useless-call": "error",
        "no-useless-computed-key": "error",
        "no-useless-constructor": "error",
        "no-useless-escape": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-whitespace-before-property": "error",
        "no-with": "error", "object-curly-newline": "off",
        "object-property-newline": ["error", { "allowMultiplePropertiesPerLine": true }],
        "one-var": ["error", "always"],
        "operator-linebreak": ["error", "after", { "overrides": { "?": "before", ":": "before" } }],
        "padded-blocks": ["error", { "blocks": "never", "switches": "never", "classes": "never" }],
        "prefer-promise-reject-errors": "error",
        "object-shorthand": "off",
        "one-var-declaration-per-line": "off",
        "operator-assignment": "off",
        "prefer-arrow-callback": "off",
        "prefer-const": "off",
        "prefer-destructuring": "off",
        "prefer-numeric-literals": "off",
        "prefer-reflect": "off",
        "prefer-rest-params": "off",
        "prefer-spread": "off",
        "prefer-template": "off",
        "quote-props": "off",
        "quotes": ["error", "single", { "avoidEscape": true, "allowTemplateLiterals": true }], "object-curly-spacing": "off",
        "rest-spread-spacing": ["error", "never"],
        "radix": "off",
        "require-await": "off",
        "require-jsdoc": "off",
        "require-yield": "error",
        "sort-imports": "off",
        "sort-keys": "off",
        "sort-vars": "off",
        "strict": "off",
        "semi": ["error", "always"],
        "semi-spacing": ["error", { "before": false, "after": true }],
        "space-before-blocks": ["error", "always"],
        "space-before-function-paren": ["error", "never"],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "space-unary-ops": ["error", { "words": true, "nonwords": false }],
        "spaced-comment": [
            "error", "always", {
                "line": { "markers": ["*package", "!", "/", ","] },
                "block": { "balanced": true, "markers": ["*package", "!", ",", ":", "::", "flow-include"], "exceptions": ["*"] }
            }
        ],
        "symbol-description": "error", "valid-jsdoc": "off",
        "template-curly-spacing": ["error", "never"],
        "template-tag-spacing": ["error", "never"],
        "unicode-bom": ["error", "never"],
        "use-isnan": "error",
        "vars-on-top": "off",
        "valid-typeof": ["error", { "requireStringLiterals": true }],
        "wrap-regex": "off",
        "wrap-iife": ["error", "any", { "functionPrototypeMethods": true }],
        "yield-star-spacing": ["error", "both"],
        "yoda": ["error", "never"]
    }
};