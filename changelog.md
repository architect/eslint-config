# Architect ESLint Config

---

## [3.0.0] 2024-04-18

### Added

- Added ESLint v9 support
- Added new rules:
  - `block-spacing` - https://eslint.style/rules/default/block-spacing
  - `comma-dangle` (multiline) - https://eslint.style/rules/default/comma-dangle
  - `no-mixed-operators` - https://eslint.style/rules/default/no-mixed-operators
  - `space-before-blocks` - https://eslint.style/rules/default/space-before-blocks


### Changed

- Breaking change: now using ESLint v9's flat config format
- Updated to ES2022 (v13)
- Breaking change: `eslint-plugin-import` is not yet ESLint v9 compatible, so that has been disabled
  - This will be restored as soon as the plugin has been updated, see: https://github.com/import-js/eslint-plugin-import/issues/2948
- Breaking change: disabled `global-require` erroring
- Breaking change: removed support for Node.js 14.x (now EOL)

---

## [2.1.2] 2023-09-07

### Changed

- Per eslint's change in v8.46.0, disable `no-return-await`

---

## [2.1.1] 2023-01-12

### Fixed

- Update eslint-plugin-import after some release thrash

---

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
