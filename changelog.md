# Architect ESLint Config

---

## [2.1.1] 2023-01-12

### Fixed

- Update eslint-plugin-import after some release thrash

## [2.1.0] 2023-01-11

### Added

- Added support for ES modules when the file extension ends in `.mjs`
- Added Node.js 18.x to CI


### Changed

- Updated dependencies

---

## [2.0.1] 2021-10-11

### Changed

- Updated dependencies
- Added eslint plugins to `peerDependencies`, which should hopefully improve reliability in later versions of npm

---

## [2.0.0] 2021-08-21

### Changed

- Enable ES11 for >=Node 14.x
- Allow `.` in linted filenames
- Retire the ever-annoying `require-await` rule
- Add `no-return-await` to prevent double-wrapped promises

---

## [1.0.1] 2021-07-29

### Changed

- Updated dependencies

---

## [1.0.0] 2020-10-10

Nothing really changed, just decided this thing is solid enough to be 1.0!

---

## [0.0.1] 2020-05-23

- First cut!
