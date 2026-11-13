---
title: Build consistent Editor controls
description: Use a scoped UI session, shared metrics and one interaction owner
  for readable panels, forms, trees and dialogs.
uid: extending.editor-widgets
kind: how-to
owners:
  - Inno.Editor.ImGui
contracts:
  - project.inno-editor-imgui
---
# Build consistent Editor controls

Use `EditorUiSession.current.widgets` and the pointer-free ImGui facade inside an active Panel, Modal or Drawer callback. These provide reusable presentation primitives, not Scene, Selection or business-state ownership. Script callers use the explicitly projected logical API, not native pointers, userdata or backend texture IDs.

## Respect the synchronous UI scope

Each runtime owns one UI session and its widget/menu/search/tree/gesture state. The current accessor is a synchronous scope lookup, not a cross-thread service locator. Incorrect thread, context or disposal order fails. Panel/generation retirement clears the relevant state.

EditorDrawList borrows the current frame/window and expires on window change, frame exit or context replacement. Font scopes restore their previous font. TransformGizmo exposes neutral matrices/results, not native pointer ownership. InputText uses shared temporary storage with finally-return/clearing and avoids decoding unchanged text; it does not create a private pool.

Native Begin/End, push/pop, disabled and popup scopes must unwind on exceptions. The runtime quarantines failed extension callbacks while keeping the enclosing draw stack balanced. Pending interaction retirement keeps its owner alive and propagates Pending; it does not authorize releasing the native context early.

## Use semantic style and one scale

EditorPalette owns general surfaces, selection, disabled/error states, axes and drop feedback. Domain presentation owns asset layouts and Shader node categories. EditorStyleMetrics supplies shared spacing, padding, borders, rounding, minimum sizes and column ratios. Zoom scales dimensions once; normalized ratios, opacity and time values do not scale again.

Native style is reapplied when the zoom changes. PanelWindow locks that panel's padding at Begin without contaminating menus/popups. ConstrainedContent provides one inset layer, explicit available width and no inner scroll input, preventing long content from widening the scrolling parent. Dock proportions come from actual/current SizeRef data and remain in the single persisted docking layout, not a second ratio store.

Use the existing Appearance actions/settings for user scale. The engine logo is the licensed merged Inno glyph, available in all four default font styles and colored as text; it does not create a separate texture/font. Preserve branding provenance.

## Structure sections, cards and forms

SectionLayout owns fieldsets. SectionHeader returns whether the complete following group should draw, until the next section. EnsureSection creates Properties for an unlabelled first group. Leading controls can express group semantics such as Local/World space; headings and descriptions do not require an extra property row. HeaderSurface and CollectionSectionHeader supply shared top/header presentation. Necessary warnings belong in visible HelpBox/Text, not only a tooltip.

CollapsingCard owns disclosure/open state, title and reserved leading/trailing controls. Its context menu and drag source refer to the complete header item, not the last checkbox. Pair an open card with CardBody and TreePop even on failure. Dimmed bodies are noneditable while the header's enable control remains available. Long titles clip between controls instead of expanding content bounds.

Use SetupPropertyColumns/PropertyLabel for 2:3 label/input allocation after fixed action columns. Labels wrap in their own column; vector axes shrink to available width. Float controls display compact precision without rounding stored values; precise editing uses the same identity and bounds. Linear rendering colors use ColorEditLinear4, which converts RGB through sRGB and preserves alpha; incompatible HSV input flags are rejected. ColorEdit4 retains its ordinary display-value semantics.

One visual region has one scrolling owner. A full-form modal may scroll itself; a fixed toolbar/body-child layout disables parent scrolling. Do not manufacture scroll ranges with fixed heights, forced scrollbars or cursor offsets. Check small windows, long labels and zoom. Editor overlay scrollbars do not consume content width, appear during activity, then fade; a fully faded bar cannot intercept content. Explicit non-scrolling viewports create none.

## Route menus and dialogs through shared models

The menu renderer traverses EditorMenuModel, derives shortcuts from action declarations and queues intent. Panels supply context/target. Empty models do not open empty popups. Item and empty-background context menus have different hit ownership. Main-menu toolbars render the common model; they do not implement Play logic.

Menus/selectors/tooltips share palette, padding and work-area bounds and inherit the invoking viewport. Bounded combos/menus size from their control, then scroll vertically within the available region rather than creating an unbounded native window. Use literal wrapped text rather than a native variadic formatting call for diagnostics or asset content. Stable widget IDs are unique in the current scope.

MeasureDialog and DrawDialog consume the same neutral presentation and same-frame metrics. A long body has one scrolling child; progress/actions remain outside. Unknown totals show activity, not invented percentages. Measurement caches are bounded by session, text size, font/bake identity, available area and actual layout values; shared/remapped fonts are remeasured without extending a native borrow. Escape triggers an action only when explicitly configured. The renderer does not know scripts, exports or sample workflows.

## Keep input with its actual owner

Mouse-down/drag-delta queries are UI-frame state. Establish item capture/focus first; screen position alone does not grant a gesture through another window, popup or modal. Apply cumulative drag delta to the captured starting value, not repeatedly to each previous frame. Complete or roll back the edit through its domain owner.

List navigation returns intent in visible order without owning Selection. Text fields, other active controls and popups suppress underlying list commands. Search Escape clears a nonempty query first, then exits on another press. InlineRename returns distinct commit, focus-lost and cancel outcomes; the feature decides validation/finishing behavior. Trend borrows finite samples for the call and rejects invalid ring offsets without retaining a provider.

Game input capture observes existing Editor-dispatched events after shortcuts/consumption. It routes only the current Game View's eligible input to the independent Play source. Consumed release/focus-loss/close can require a synthesized focus reset; other-window events do not clear this capture. Consumed motion updates boundary observation without redelivering motion or losing a captured drag. End-of-frame presentation changes can also reset held input. This is one routing policy, not another event bus.

## Draw trees and drop feedback from current geometry

Disclosure, content and overlay controls have separate hit regions; overlays cannot also select the row. Current-frame geometry drives text, hit areas, connectors and background channels. Apply ScrollX once, keep full-width row backgrounds fixed to the viewport and exclude viewport overlays from content width. Resizing must let horizontal range shrink back to actual text/indentation needs.

Use supplied row height/content bounds for aligned rename and drop placement. Native open state applies without breaking TreePush/TreePop symmetry. Popup ownership suppresses underlying hover. Foreground drop highlights/insertion lines use shared thickness and are not clipped to a table cell. For card reordering, include the expanded body in the target and disable drag-hold opening of other cards.

Native drag payloads carry runtime identity. Preview and delivery resolve/check the current generation again; persisted History uses persistent identity. Do not retain the source object or use native payload bytes as an independent object registry. Glyph-centering helpers use visible baked bounds, preserving consistent alignment for asymmetric icons.

## Verify the affected surface

The existing native layout tests exercise public widgets with a real matching ImGui context and synthetic input. Geometry tests can cover zoom, wrapping, popup bounds, false scroll ranges and foreground hit ownership without claiming a full desktop/product journey. Physical rendering, accessibility and lifecycle acceptance remain separate. Use the [widget reference](../architecture/projects/inno-editor-imgui.md) for exact types and host/script examples.
