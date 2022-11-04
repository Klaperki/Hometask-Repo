# Hometask-Repo

1. Clone github repository to your local device
2. Open the terminal and navigate to the repository root.
3. Check the 'package.json' file if the dev dependency was added

```json
  "devDependencies": {
    "jest": "^29.2.2"
  }
```
4. 'package.json' file should be updated with the the command, which will trigger test execution

```json
  "scripts": {
    "test": "jest"
  }
```
3. Type 'yarn test' command to start testing.