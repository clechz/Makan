# Mobile scanned district

The phone scene now uses ScanForge’s real photogrammetry model, replacing the procedural miniature. Desktop remains on the existing layout. The source archive is kept locally under `.local-assets/town` and excluded from Git.

Source: https://www.cgtrader.com/free-3d-models/scanned/various/small-town-buildings-area-drone-pbr-photogrammetry-free
Creator: ScanForge. Model ID: 6294190. Downloaded 2026-10-01 through the authenticated free-download flow. Listing: Royalty Free License (no AI). Keep the scan credit. This asset is used as rendered site content, not as training data or a standalone download offering.

## Assets and conversion

Original: `wiz1etap.rar` (95 MB listing), FBX plus 8192px color and 4096px detail maps. `scripts/inspect-town.mjs` converts the local source into normalized, indexed, quantized, Meshopt-compressed glTF. Geometry is approximately 1.26 MB. A 4096px WebP color texture is approximately 5 MB; data-saving or <=4 GB memory devices receive a 2048px texture, approximately 1.40 MB. Baked scan color uses an unlit material so it does not need costly live lighting. The transparent poster is rendered from the same scan.

## Interaction and accuracy

Horizontal drag or arrow keys rotate the model. Vertical touch gestures remain native scrolling. Places displays the original survey; Agent and Discoveries use three manually traced roof regions. These are illustrative, not measured Makan detections. Layers lifts the matching roof outlines above the survey. Shifts offers Original scan / Change example and explicitly labels the raised roof geometry as an illustrative height change. Only one survey was supplied, so no actual historical change is claimed.

Overlays are extracted from the same transformed scan triangles. Quantized positions are decoded to float before applying transforms. Roof outline heights are sampled by raycasting against the real surface.

## Performance and fallback

The module loads only near the scene below 768px. No continuous spin. Rendering stops when settled, offscreen, hidden, or at desktop widths. Pixel ratio is capped at 1.5. Reduced motion skips easing. If WebGL is unavailable, the same survey appears as a still poster with a clear still-preview label.

## Verification

Production build passes. Chrome phone preview tested at 390px; overlays and original/change toggle inspected. Further viewport and fallback checks are recorded in the task response.

## Neighborhood-wide Layers update

Layers now has five independent toggles across the scan: buildings, green areas, tree cover, streets, and Power · example. Surface colors and elevation provide illustrative rooftop/vegetation masks; these are not validated semantic predictions. Street centerlines are manually traced to the visible scan and draped by raycasting. The dashed gold power network follows an illustrative street-side route; the asset contains no surveyed utility data. The three selected roof regions remain specific examples in Discoveries and Shifts. Phone controls wrap at 320px and stay outside the draggable surface.

## Shifts scenarios and perspective camera

Shifts now switches among three explicitly illustrative scenarios: five added building volumes (two outside a drawn example boundary), tree-cover loss highlighted on sampled canopy geometry, and widening overlays across three street routes. The Original scan toggle removes the scenario overlay. No permit violation or temporal finding is asserted about the real site.

The default camera uses perspective projection at a low oblique angle instead of the former overhead orthographic framing. 3D view / Overhead / Closer controls let the user inspect facades and tree heights, with reset restoring the default view. Vertical gestures still scroll the page; camera changes render on demand. English and Arabic controls are provided.

## Guided scene simplification

The main five feature tabs and one play/pause control replace camera buttons, layer toggles, Shifts case buttons, and before/after buttons. The visible mobile scene advances every 4.8 seconds through individual layers, combined layers, discoveries, and three illustrative shift overlays. Material opacity eases between stages; no constant render loop runs during the hold. Autoplay stops while hidden, offscreen, or on desktop. Reduced motion starts paused and uses immediate transitions. Dragging/arrow rotation pauses the tour.

Camera fitting uses sampled perimeter points from the actual scan and refits as it rotates to keep the neighborhood inside the phone edges. It uses a closer default oblique perspective with no zoom buttons. Shifts building activity now highlights real scanned roof geometry; the synthetic building boxes and artificial permit boundary are removed. There is no factual claim of new or illegal construction from this single survey.

## Calm, tap-driven revision

Removed the tour/play control and automatic tab progression. Five main tabs are the only scene buttons. Layers enters in a staggered sequence (110 ms between groups), then all five layers remain visible. Switching tabs crossfades; animation stops after settling and respects reduced motion. The interaction hint explicitly asks users to tap a feature and drag the scene.

Discoveries is preserved. Shifts now combines sampled roof outlines raised 0.32 scene units with vertical connections, an outline around the visible pool, and canopy-change highlighting. These are illustrative overlays on one scan, not evidence of a new house, unlicensed pool, or historical event. Copy is concise and mobile-only. The section heading is “A place. Every signal.”

The separate comparison restores before-satellite-phone.webp and after-makan-overlay-phone.webp, labeled What you see / What Makan sees. Pix4D views and credit are removed from this section. The range interaction retains the drag affordance and an illustrative-analysis caption.

## Conversational Agent preview

Agent now shows an Example conversation with a user question and a Makan response. Two suggested prompts switch between inspecting the three roof highlights and locating neighborhood green spaces. Answers and scene overlays update together. This is a local scripted illustration, not a live chatbot or inferred inspection recommendation. No chat data is sent. The conversation has English/Arabic text and appears only in Agent mode. Its canvas uses the actual available display area to preserve scene proportions above the bubbles. Tested both prompts and 320px layout.

## Stable Agent example

Removed suggested-question buttons. Agent uses one illustrative multi-source question about 90-day building expansions, matching permits, and power-line proximity, with an example response and evidence-type labels. The scene retains the same fixed height as Places; the chat is absolutely positioned in its lower portion. Canvas sizing matches its 55% visual area. At 390px the scene measured 439px in both modes and the feature tab document position was identical. At 320px there was no horizontal overflow and the chat stayed inside the scene. This is still scripted illustrative content, not a claim about the scan or a live data integration.

Agent examples now hold completed question/answer pairs for 11 seconds. Solar, shade, delivery access, and pool examples activate their corresponding roof, tree, street, or pool overlay as the answer starts. Removed unsupported counts and permit/change claims. Fixed-size bubbles verified at 320px without overflow; build passed.

Decision-focused Agent update: supermarket siting, road access obstructions, investment shortlist, and vehicle counts replace simple layer queries. Each uses separate scenario markers; 24 vehicle markers match the illustrative count. Replies visibly carry a Demo label. These are scripted examples, not analysis of the scan or financial recommendations. Completed replies retain the 11-second hold.

Scene copy cleanup: visible topline is now Real scan; removed the chat Demo suffix, status/drag captions, interaction hint, and descriptive panels beneath the tabs. Existing source credit and accessible scene interaction label remain.

Mobile feature controls renamed Agent to Ask Makan, with outlined two-column pill buttons and selected state. Layers, Discoveries, and Shifts now show compact benefit cards in the same upper scene region. Ask Makan targets use cyan surface-sampled polygons for selected roofs and road sections, replacing floating pins and invented vehicle marker positions. Checked feature switching and 320px overflow; production build passed.
