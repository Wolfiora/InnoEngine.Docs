---
title: Use the Game View
description: Inspect routed game output and understand Play input, aspect ratio and temporary state.
uid: manual.editor.game-view
kind: how-to
owners: [Inno.Editor.Panel.GameView]
contracts: [project.inno-editor-panel-gameview]
---
# Use the Game View

Game View displays output contributed to the open viewport kind `inno.editor.viewport.game`. It is a viewport host, not a built-in Camera or Scene renderer. A content source, matching output contributor and render model must participate before an image is available.

## Obtain an output

Open the Game View with the project's rendering contributions active. A content source alone is insufficient. If several models accept the same output, choose an explicit `RenderOutputRoute`; ambiguity appears as a diagnostic rather than selecting an arbitrary model.

While a target is unavailable, a contribution fails or no model applies, the panel fills its region with the configured background and shows status in the center. Unavailable output is released without stopping the Editor's own interface.

## Choose presentation size

Use **Project → Player → Presentation** to set the shared `GamePresentationSettings`. The default reference frame is 1280×720 with **Preserve Aspect Ratio** enabled.

With preservation enabled, the panel fits the largest complete rectangle inside its available region and centers the output. Remaining space is black letterbox/pillarbox. The composition target uses the fitted rectangle's physical pixel dimensions, so the model's projection and final display agree. Disabling preservation uses the whole panel.

The same project settings enter Player deployment. A resized Player calculates the same content viewport rather than maintaining a separate aspect policy.

HiDPI layout uses logical units, while composition targets use framebuffer-scaled physical pixels. `pixelDensity` communicates that ratio to contributors. Presentation composites the GPU output without a CPU image readback.

## Send input to Play

Keyboard and text input enter the Play Session only while Game View has focus. Pointer input starts when the image is hit and foreground-hovered; a held interaction continues receiving movement and release. Losing focus, hiding or closing the view releases held keys and buttons.

The host resolves the presentation viewport to its live platform window, including detached windows. Play uses a separate input backend from Edit. Render output input follows the same focus and hit-test conditions.

## Understand the displayed world

Editing, compilation and incomplete Play preparation continue presenting Edit state. Only after all Play scenes materialize successfully does the shared presentation switch to the isolated Runtime Session. Game View, Scene View, Hierarchy, Inspector and selection observe that same committed world.

Play edits use their own History branch and cannot save into Edit documents. Stop switches presentation back to Edit before retiring the Play world. A drawing scope temporarily selects the presented world's Identity, UI and audio services, then restores Edit services on exit; Editor module updates and reload activation do not run inside that drawing scope.

The view submits an explicit content scope. Rendering Runtime does not independently render an implicit process-global Scene into the Editor backbuffer. See [Scene View navigation](scene-view.md) and [frame ownership](../../architecture/render-frame.md).
