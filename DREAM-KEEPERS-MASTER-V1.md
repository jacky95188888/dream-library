# Dream Library — Six Dream Keepers MASTER V1

## Non-negotiable visual rule
The approved character artwork is a **master asset**, not a prompt to redraw in CSS. Faces, hair, costume, jewelry, lighting and pose stay in the image asset. HTML/CSS only renders names, copy, controls, borders, gradients and responsive layout.

## World bible
Shared environment: celestial old library, arched moon window, deep navy/black-purple shelves, warm candlelight, fine gold filigree, restrained violet particles, premium fantasy game UI. Avoid generic pastel anime backgrounds and avoid regenerating faces during responsive work.

## Keepers
- Luna — black/deep-purple long hair, violet floral jewelry, black-purple lace/velvet, warm mysterious gaze. Accent #9B6CFF.
- Seraphine — silver-white hair, ice-blue crystal details, moonlight. Accent #73B8FF.
- Nyx — black hair, black-gold celestial ornament, tarot/symbol motifs. Accent #D4AF37.
- Aurelia — rose-pink hair, floral/quill motifs, warm rose light. Accent #F59BC4.
- Celeste — midnight blue-black hair, star-map/astrolabe motifs. Accent #3B82F6.
- Elara — ivory/champagne hair, white flowers/greenery, soft natural light. Accent #68D391.

## Required exports per keeper
1. portrait-master.webp — 3:4, minimum 1200×1600
2. mobile-card.webp — 9:16, 1080×1920
3. avatar.webp — 1:1, 1024×1024
4. halfbody-transparent.webp — transparent background, minimum 1200×1600
5. expression set — neutral / smile / listening / thinking / comforting

## Web contract
- Never bake Chinese UI copy into artwork.
- Never stretch character images; use object-fit: cover and fixed focal points.
- 390–430 px uses horizontal snap cards, not squeezed six-column cards.
- User selection persists in localStorage key `dream_selected_keeper_v1`.
- Until a keeper's approved master exists, show a sigil placeholder. Do **not** fake the keeper by hue-shifting Luna.
