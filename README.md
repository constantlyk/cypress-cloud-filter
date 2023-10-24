# ...
for debugging something hopefully simple in the interaction between cypress cloud and cypress-log-filter.

1. setup a cypress cloud account (free): https://docs.cypress.io/guides/cloud/getting-started and setup project id and record key

2. clone this repo, then add your project id to `cypress.config.js`

note that per the cypress-log-filter docs, i have added the following to the `support/e2e.js` file:

```
import 'cypress-log-filter'
```

i have also added `require("cypress-log-filter")` to `cypress.config.js`, but i am not sure that matters.

3. run `npx cypress run --record` (passing your record `--key` as necessary)

the recorded run will fail. cypress cloud will report the following error.

```
Cannot read properties of null (reading 'appendChild')
```

but the test runs just fine when the `--record` flag is omitted. so why is cypress-log-filter causing tests to fail only in cypress cloud?

my guess is that the test runner window is being initialized or contained slightly differently in cypress cloud, which is not what cypress-log-filter expects when it sets up the log filter dropdown inside the test runner. cypress-log-filter may also be expecting that i am using cypress in typescript, which i am not.
