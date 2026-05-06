# katalon-playwright-project

Playwright & Allure TestOps Integration Project

This repository demonstrates a complete integration between Playwright (TypeScript) and Allure TestOps, following a multi-branch progression from basic testing to full CI/CD automation.
## Project Structure & Branches

The project is organized into branches to show the evolution of the testing framework:

    main: Pure Playwright tests without Allure integration. Uses standard Playwright HTML reports.

    branch_2: Initial integration of the Allure reporter.

    branch_3: Implementation of basic Allure annotations for better test categorization.

    branch_4: Final version featuring full annotations, detailed metadata, and organized test.step structures.

## Tech Stack

    Language: TypeScript

    Test Runner: Playwright

    Reporting: Allure TestOps & Allure Report

    CI/CD: GitHub Actions

## Key Features

    Meaningful Test Coverage: Automated flows covering navigation and functional checks on the Katalon platform.

    Debuggability: Configured to capture Screenshots and Playwright Traces on failure for efficient troubleshooting.

    CI/CD Integration: Automated workflows using allurectl watch to upload results to Allure TestOps in real-time from every branch except main.

    Stability: Optimized global timeouts (60s) to handle cloud-based execution across different browsers (Chromium, Firefox, Webkit).
