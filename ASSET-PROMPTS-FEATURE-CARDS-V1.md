# Dream Library — 8 Feature Card Asset Prompts V1

## Shared visual DNA
Premium fantasy mobile app UI illustration, dreamy mystical atmosphere, deep indigo and violet palette, soft champagne-gold accents, glowing magical light, cinematic depth, refined fantasy-game quality, elegant and spiritual, soft luminous particles, isolated decorative scene suitable for a mobile feature card.

### Shared negative prompt
No emoji, no flat icon, no clip-art, no cartoon sticker, no children's illustration, no white background, no hard black outline, no generic stock illustration, no cyberpunk neon, no oversaturated rainbow, no text, no letters, no logo, no watermark, no UI frame, no hands, no extra objects unrelated to the theme, no clutter, no photorealistic people, no horror gore.

### Shared output spec
- Purpose: right-side decorative art for 2-column mobile feature cards
- Preferred format: transparent PNG or WebP
- Aspect ratio: 4:3 or 1:1
- Safe composition: main subject concentrated on right-center / lower-right
- Visual density: medium
- Edge behavior: soft fade into transparency
- Lighting: violet moonlight + restrained champagne-gold rim light
- Contrast: readable on dark purple card background
- Avoid placing critical details in the left 35% of the asset

---

## 1. 解夢 / Dream Interpretation
**HTML text**
- Icon character: 夢
- Title: 解夢
- Subtitle: 探索象徵與訊息

**Asset prompt**
A glowing magical doorway inside an ancient dream library, a violet portal opening between tall shadowed bookshelves, soft moonlit mist flowing through the doorway, tiny floating stardust, subtle candlelight, restrained champagne-gold rim light tracing the arch, mysterious but welcoming, premium fantasy game illustration, compact isolated decorative scene, main focus on the doorway, soft transparent fade around the edges.

**Implementation note**
Use as a right-side overlay image, width around 34% of the card, object-position right center.

---

## 2. 圖書館 / Library
**HTML text**
- Icon character: 書
- Title: 圖書館
- Subtitle: 夢境知識庫

**Asset prompt**
A warm enchanted library alcove with tall shelves of glowing books, tiny brass candleholders, soft purple moonlight entering from a distant arched window, floating dust motes, rich indigo shadows and warm gold highlights, elegant old-world fantasy library ambience, compact premium mobile-game illustration, isolated decorative scene with depth, soft transparent edge fade.

**Implementation note**
Right-side art may extend slightly behind the arrow but must not overlap the title area.

---

## 3. 人格 / Inner Personality
**HTML text**
- Icon character: 心
- Title: 人格
- Subtitle: 內在性格特質

**Asset prompt**
A luminous heart-shaped crystal made of layered violet and rose energy, floating above a subtle circular magical sigil, surrounded by fine stardust and a soft halo, emotionally warm and introspective rather than romantic, elegant spiritual fantasy aesthetic, champagne-gold inner highlights, compact premium decorative illustration, isolated with a soft transparent fade.

**Implementation note**
Keep the heart centered in the right third and avoid bright pink saturation.

---

## 4. 收藏 / Collection
**HTML text**
- Icon character: 藏
- Title: 收藏
- Subtitle: 重要夢境

**Asset prompt**
An elegant fantasy treasure chest slightly open, filled with glowing dream fragments, miniature memory cards, tiny crystals and star-like relics, deep violet shadows, warm gold light spilling from inside, subtle celestial particles, luxurious and mysterious, premium fantasy mobile-game illustration, compact isolated scene with a soft transparent edge fade.

**Implementation note**
Chest should read clearly at small size; avoid excessive tiny objects.

---

## 5. 每日解析 / Daily Insight
**HTML text**
- Icon character: 析
- Title: 每日解析
- Subtitle: AI 潛意識洞察

**Asset prompt**
A luminous crystal sphere resting on a refined dark magical desk, moonlight reflected inside the orb, faint constellations and dream symbols suspended within, soft candle glow, violet aura and restrained gold highlights, mystical but modern enough to suggest daily insight, premium fantasy mobile-game illustration, compact isolated decorative scene with transparent edge fade.

**Implementation note**
Crystal sphere is the main focus; background desk detail should remain minimal.

---

## 6. 夢境交友 / Dream Connection
**HTML text**
- Icon character: 緣
- Title: 夢境交友
- Subtitle: 靈魂頻率配對

**Asset prompt**
Two elegant translucent soul silhouettes facing one another in a violet cosmic mist, connected by a thin arc of light and tiny shared stardust, gentle sense of resonance and recognition, romantic but not dating-app cliché, spiritual and refined, soft champagne-gold accents, premium fantasy mobile-game illustration, compact isolated composition with transparent edge fade.

**Implementation note**
Use abstract silhouettes, not identifiable people; keep it calm and sophisticated.

---

## 7. 冥想宣言 / Meditation Affirmation
**HTML text**
- Icon character: 願
- Title: 冥想宣言
- Subtitle: 潛意識編程

**Asset prompt**
A luminous lotus flower floating above a layer of soft violet mist, subtle sacred geometry glowing faintly behind it, tiny stardust particles, calm moonlit atmosphere, pale lavender petals with restrained champagne-gold highlights, serene, spiritual and luxurious, premium fantasy mobile-game illustration, compact isolated decorative scene with transparent edge fade.

**Implementation note**
Avoid religious iconography; preserve neutral meditative symbolism.

---

## 8. 環境音樂 / Ambient Music
**HTML text**
- Icon character: 音
- Title: 環境音樂
- Subtitle: 夢境氛圍音效

**Asset prompt**
An enchanted vintage record player with a softly glowing vinyl disc, tiny floating musical notes transformed into light particles, subtle magical sound waves, deep indigo and violet ambience, warm brass and champagne-gold details, elegant dreamlike mood, premium fantasy mobile-game illustration, compact isolated decorative scene with transparent edge fade.

**Implementation note**
Record player should remain recognizable at small size; avoid oversized music-note symbols.

---

## Web implementation rules
1. Card containers remain real HTML/CSS.
2. Chinese icon character, title, subtitle, and arrow remain live text.
3. Decorative artwork is an independent image asset, never baked together with text.
4. Do not use emoji as production artwork.
5. Use consistent crop, glow intensity, and visual scale across all eight cards.
6. Recommended asset display width: 30–36% of card width.
7. Apply a slight right-side mask/gradient if an asset edge feels too abrupt.
8. Keep all eight artworks in the same lighting family: cool violet moonlight + restrained warm gold rim light.
9. Mobile-first reference width: 390–430px.
10. Prefer AVIF/WebP for production after PNG master export.

## Naming convention
- feature-dream-interpretation.webp
- feature-library.webp
- feature-personality.webp
- feature-collection.webp
- feature-daily-insight.webp
- feature-dream-connection.webp
- feature-meditation.webp
- feature-ambient-music.webp
