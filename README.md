# Audit Log Database

Database audit system that records data changes.

## Solved Problem

This project demonstrates a practical portfolio implementation for database audit system that records data changes.

## Features

- Audit tables
- Change triggers
- Actor tracking
- Before and after values
- Retention queries
- Reports

## Technologies

- Category: sql-database
- Template: database-project
- Difficulty: small

## Architecture

The project is organized around a small but expandable production-style structure:

- `src/` contains the application source.
- `tests/` contains automated checks.
- `docs/` contains architecture and usage notes.
- `.github/workflows/` contains the CI workflow.

## Installation

Clone the repository and use the command documented for the selected technology stack.

## Environment Variables

No secrets are committed. Use local environment variables or a private `.env` file when integrating real services.

## API Usage Examples

See `docs/usage.md` for example flows and commands.

## Test Commands

Run the test command configured in the CI workflow for this project type.

## Screenshots

Screenshots can be added under `docs/screenshots/` after the UI or API demo is available.

## Planned Development Stages

- chore: initialize project structure
- feat: add core domain model
- feat: configure persistence or state layer
- feat: implement main workflow
- feat: add public interface
- test: add automated coverage
- docs: add installation and usage documentation
- ci: add build and test workflow
- feat: add validation rules for actor tracking

## Future Improvements

- Add production deployment notes.
- Add observability and monitoring examples.
- Add richer integration tests.
