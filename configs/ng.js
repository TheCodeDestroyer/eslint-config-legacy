module.exports = {
    'extends': 'tcd',
    'globals': { 'angular': true },
    'plugins': [
        'angular'
    ],
    'rules': {
        'consistent-this': ['error', 'vm', 'svc'],
        'max-params': 'off',

        'angular/module-getter': 'error',
        'angular/module-setter': 'error',
        'angular/module-name': 'off',
        'angular/module-dependency-order': 'error',
        'angular/no-private-call': ['error', { 'allow': ['$$phase'] }],
        'angular/angularelement': 'error',
        'angular/controller-as': 'error',
        'angular/controller-as-route': 'error',
        'angular/controller-as-vm': ['error', 'vm'],
        'angular/controller-name': ['error', '/[A-Z].*Ctrl$/'],
        'angular/deferred': 'error',
        'angular/definedundefined': 'error',
        'angular/di': 'error',
        'angular/di-order': ['off', true],
        'angular/di-unused': 'error',
        'angular/one-dependency-per-line': 'off',
        'angular/dumb-inject': 'error',
        'angular/directive-name': 'error',
        'angular/directive-restrict': 'error',
        'angular/no-directive-replace': 'off',
        'angular/component-limit': ['off', 1],
        'angular/component-name': 'error',
        'angular/prefer-component': 1,
        'angular/constant-name': 'error',
        'angular/document-service': 'error',
        'angular/empty-controller': 'error',
        'angular/file-name': 'error',
        'angular/filter-name': ['error', '/[A-Z].*Filter/'],
        'angular/foreach': 'off',
        'angular/function-type': ['error', 'anonymous'],
        'angular/interval-service': 'error',
        'angular/json-functions': 'error',
        'angular/log': 'error',
        'angular/no-angular-mock': 'off',
        'angular/no-controller': 'off',
        'angular/no-cookiestore': 'error',
        'angular/no-jquery-angularelement': 'error',
        'angular/no-service-method': 'off',
        'angular/no-services': ['error', ['$http', '$resource', 'Restangular']],
        'angular/on-watch': 'error',
        'angular/on-destroy': 'error',
        'angular/rest-service': ['error', '$http'],
        'angular/no-http-callback': 'error',
        'angular/service-name': ['error', '/[A-Z].*Svc/', { 'oldBehavior': false }],
        'angular/factory-name': 'error',
        'angular/provider-name': 'error',
        'angular/value-name': 'error',
        'angular/timeout-service': 'error',
        'angular/typecheck-array': 'error',
        'angular/typecheck-date': 'error',
        'angular/typecheck-function': 'error',
        'angular/typecheck-number': 'error',
        'angular/typecheck-object': 'error',
        'angular/typecheck-string': 'error',
        'angular/watchers-execution': ['error', '$apply'],
        'angular/window-service': 'error'
    }
};
