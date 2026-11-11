---
title: Navigate and edit in Scene View
description: Use contributor-defined navigation and transactional transforms in the currently presented world.
uid: manual.editor.scene-view
kind: how-to
owners: [Inno.Editor.Panel.SceneView]
contracts: [project.inno-editor-panel-sceneview]
---
# Navigate and edit in Scene View

Scene View hosts the open viewport kind `inno.editor.viewport.scene`. Active contributors decide what to render and which navigation modes apply. The panel provides an offscreen target, input, neutral navigation state and transform interaction; it does not impose a 2D/3D Scene model.

## Navigate using the active controller

| Supported mode | Controls |
| --- | --- |
| Planar | Middle drag or Alt + left drag to pan; wheel zoom keeps the pointer's world point anchored. |
| Orbit | Alt + left drag around the pivot, when the selected controller supports it. |
| Fly | Right-button view control with W/A/S/D/Q/E movement; Shift accelerates. |
| Frame selection | F uses contributor bounds, or the selected object's Transform when bounds are unavailable. |

Several contributors may draw into the view. Only the contributor selected by `controllerPriority` controls interaction. Its profile determines the supported modes; a 2D contribution does not silently acquire perspective navigation.

Navigation state persists with the panel in `editor.ini`. It is not a Scene Component, an Undo record or a retained plugin object.

## Manipulate a Transform

Choose **Move**, **Rotate** or **Scale** from the overlay toolbar. A contributor must supply the current manipulation space before handles are usable. One continuous drag becomes one atomic Scene History transaction.

**World** axes keep world orientation; **Local** axes follow the selected object's final world rotation. They can look identical on an unrotated object. Scale follows the local-space convention and disables the ineffective coordinate-space toggle.

For a declared plane, Move uses its two axes and free center control. Rotate still permits all three axes. Scale uses the two in-plane axes while preserving existing negative-scale signs. Native manipulation options are scoped to that call; a planar contribution does not alter subsequent 3D behavior.

Transform handles use directional red/green/blue colors. Semantic icons and bounds use white; icons keep their real world positions. If several objects overlap the same click region, selection uses a choice menu rather than moving icons to invented positions. Hovering the toolbar captures interaction without hiding the handles.

## Edit the world that is actually presented

Each frame captures the ordered scenes and active scene from the shared presentation owner, then supplies that explicit content scope to every contributor. Contributions must not enumerate a process-global set of loaded scenes.

After successful Play preparation, the view observes the same runtime graph as Game View, Hierarchy, Inspector and selection. Gizmo edits then affect runtime Transforms and Play History only. The Play workspace rejects persistence and reports no saved-document dirty state. Stopping Play restores the Edit world and selection; temporary runtime changes retire with the Play Session.

The draw scope uses the presented world's UI, audio and Identity services and restores Edit scope afterward. It does not wrap Editor module updates or script/reload activation.

## Diagnose a blank view

Read the centered status when no contributor applies, a contributor is quarantined or the GPU target is still preparing. The panel uses **Editor → Appearance → Viewports → Scene Background** while no image is available. It releases its target on close.

A grid, coordinate axes or a particular camera projection belong to the rendering model. Opening Scene View alone does not supply them. See [Game View](game-view.md) for shared presentation selection and [rendering tasks](../rendering/index.md) for the model boundary.
