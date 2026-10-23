# README images

Every image in `assets/` is an HTML mock rendered by headless Chrome, never a photo or a generated picture.

- `laws.mjs`: the 30 laws, with the before and after mock of each one.
- `styles.css`: the mock app primitives (`.ui`) and the image frames.
- `render.mjs`: renders `assets/banner.png`, `invite.png`, `proof.png` and `laws/law-NN.png` at 2x.

```bash
PLAYWRIGHT=/path/to/node_modules/playwright/index.mjs \
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
node assets/src/render.mjs
```

Fonts in `assets/fonts/` (Inter Tight, Instrument Serif, JetBrains Mono) are under the SIL Open Font License 1.1.
