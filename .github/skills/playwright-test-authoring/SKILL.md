---
name: playwright-test-authoring
description: 'Author, debug, or improve Playwright UI and API tests in this project.'
---

## API Testing

- Use Playwright's `request` fixture or the project's existing API client abstraction.
- Keep API tests separate from UI tests when the behavior can be validated directly through an API.
- Validate status code, response body, headers, and relevant business rules.
- Reuse API clients/helpers instead of duplicating request logic.
- Do not hardcode API URLs; use the project's configured base URL/environment settings.
- Keep authentication and tokens in environment-based configuration or fixtures.
- For dependent API calls, clearly manage the required test data and cleanup.
- Avoid using UI actions to create test data when an API is available, unless the workflow specifically requires UI validation.

## UI Testing

- Prefer user-facing locators such as `getByRole`, `getByLabel`, and `getByTestId`.
- Avoid brittle XPath/CSS selectors based on generated classes, DOM position, or styling.
- Use Page Objects for reusable page interactions.
- Keep assertions in tests when they describe business behavior; keep low-level interactions in Page Objects.
- Handle dynamic elements using Playwright's auto-waiting and web-first assertions.
- Avoid `page.waitForTimeout()` unless there is a documented exceptional reason.

## Test Data

- Keep test data separate from test logic where practical.
- Generate unique data when tests create users, orders, or other mutable entities.
- Clean up data created by tests when required.
- Never commit credentials, tokens, API keys, or sensitive test data.

## Framework Design

- Prefer reusable fixtures for browser, API clients, authentication, and test data.
- Avoid duplicate helper methods across Page Objects.
- Keep Page Objects focused on page behavior rather than test assertions.
- Keep API clients focused on API operations rather than test assertions.
- Follow the existing project architecture before introducing new abstractions.
- Prefer simple abstractions over unnecessary framework complexity.