

# Plan: Shopify Integration + 3-Minute Narrated Advertisement Video

## Part 1: Shopify Store Connection

Connect your existing Shopify store (`milanosafleets`) to the project using the Shopify integration tool. This will link both platforms so your website and Shopify store share product data and checkout capabilities.

## Part 2: 3-Minute Narrated Advertisement Video

Create a cinematic 3-minute (5,400 frames at 30fps) advertisement video with a South African male narrator and soft background music.

### Video Structure (10 scenes)

| Scene | Duration | Content |
|-------|----------|---------|
| 1. Opening Hook | 15s | Milano SA logo reveal, "Proudly South African" tagline |
| 2. The Problem | 20s | Rising fuel costs, load-shedding, delivery downtime |
| 3. Our Solution | 20s | Valternative V1 Pro Max fleet, specs, Checkers branding |
| 4. Solar Swap Network | 20s | Battery swapping lockers, solar infrastructure |
| 5. Community Impact | 20s | Job creation, skills training, youth empowerment |
| 6. Environmental Impact | 15s | Carbon reduction, green energy, sustainability |
| 7. Partners & Traction | 20s | Uber, Checkers, Famous Brands, metrics |
| 8. Financials & ROI | 15s | R2.9M ask, use of funds, revenue model |
| 9. Proudly SA | 10s | Buy local, grow local economy, B-BBEE Level 1 |
| 10. Call to Action | 5s | Logo, website, contact details |

### Narrator Voice

Generate narration using ElevenLabs TTS with a deep, confident male voice. The script will cover:
- Business overview and mission
- Community empowerment and job creation through skills training
- Environmental benefits of solar-powered EV delivery
- Cost savings vs traditional ICE fleets
- Proudly South African manufacturing and local economic growth
- Safety, efficiency, and continuous improvement

**Requirement**: An ElevenLabs API key is needed to generate the narration. I will request this secret from you before proceeding.

### Background Music

Generate a soft, inspirational background track using ElevenLabs Music API — warm, uplifting, African-inspired ambient music.

### Technical Approach

1. **Shopify**: Call `shopify--enable` with `store_type: "existing"` to connect `milanosafleets`
2. **Narration**: Create an edge function to call ElevenLabs TTS API, generate narration audio segments
3. **Music**: Create an edge function to generate background music via ElevenLabs Music API
4. **Video**: Expand Remotion composition to 10 scenes (5,400 frames), add `<Audio>` tracks for narration and background music layered together
5. **Render**: Use programmatic render script with `muted: false` (audio enabled) to produce final MP4
6. **Integration**: Update `VideoDemoSection.tsx` to reference the new 3-minute video

### Files to Create/Edit

- `remotion/src/scenes/Scene5Community.tsx` — New community impact scene
- `remotion/src/scenes/Scene6Environment.tsx` — New environmental impact scene
- `remotion/src/scenes/Scene9ProudlySA.tsx` — New Proudly SA scene
- `remotion/src/MainVideo.tsx` — Expand to 10 scenes, add audio tracks
- `remotion/src/Root.tsx` — Update duration to 5,400 frames
- `supabase/functions/elevenlabs-tts/index.ts` — TTS edge function
- `supabase/functions/elevenlabs-music/index.ts` — Music generation edge function
- Existing scene files updated with extended durations

### Important Note

The sandbox ffmpeg build may not support audio encoding. If that's the case, I will:
1. Render the video muted from Remotion
2. Generate audio files separately (narration + music)
3. Use ffmpeg to merge video + audio tracks into the final MP4

