<br/>

# **example-tests-framework**

## Local Setup:

#### Pre-requisites:

1. nvm: https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating
2. node: can use nvm to install node
3. pnpm: https://pnpm.io/installation
</br>
</br>
   *Refer to [Homebrew](https://brew.sh/) for instructions on installing any of the packages listed above if not already present on your machine. Please note the installation locations differ with Macs on the M2/M3 chipset and Macs using an older Intel chipset.

### Installation:

```bash
git clone git@github.com:Co-Din/example-tests-framework.git

cd /<your clone dir>
```

* Clone the __example-tests-framework__ and __example-test-pack__ projects side-by-side (under the same directory).
* Build the example-tests-framework project you can use `pnpm regenerate` (this will install and build the project).
* Running `test:local` in the example-test-pack will run a: clean, install, bddgen and playwright test all under the one command and is compatible with the `--ui` flag.

---

### Nodemon
```bash
# starts nodemon and wraps the example-tests-framework app to display any saved changes in the console
nodemon example-tests-framework
```
More information regarding *nodemon* can be found **[here](https://github.com/remy/nodemon#nodemon)**

---

## Tech Stack

_*This Project was developed on Mac OS M2 and up using the [VS Code](https://code.visualstudio.com/) IDE and the following tech: <br />*_

-   _[NodeJS](https://nodejs.org/en)_<br />
-   _[PNPM](https://pnpm.io/)_<br />
-   _[TypeScript](https://www.typescriptlang.org/)_<br />
-   _[Playwright](https://playwright.dev/)_<br />
-   _[Playwright-BDD](https://vitalets.github.io/playwright-bdd/#/)_<br />
-   _[CucumberJS](https://cucumber.io/docs/installation/javascript/)_<br />
