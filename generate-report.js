const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
    jsonDir: './reports/json',         // <--- folder where your JSON is
    reportPath: './reports/html',       // <--- folder where HTML report will be created
    metadata: {
        browser: {
            name: 'chromium',
            version: 'latest'
        },
        device: 'Local Test Machine',
        platform: {
            name: 'windows',
            version: '10'
        }
    },
    customData: {
        title: 'Run Info',
        data: [
            { label: 'Project', value: 'testChallenge' },
            { label: 'Release', value: '1.0.0' },
            { label: 'Cycle', value: 'Sprint 1' },
            { label: 'Execution Start Time', value: new Date().toLocaleString() },
            { label: 'Execution End Time', value: new Date().toLocaleString() }
        ]
    }
});
