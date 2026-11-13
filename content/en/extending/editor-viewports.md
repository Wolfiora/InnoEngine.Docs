---
title: Contribute a rendering model to an Editor viewport
description: Separate render layers, interaction ownership, frame-scoped content
  and safe preview output.
uid: extending.editor-viewports
kind: how-to
owners:
  - Inno.Editor.Rendering
contracts:
  - project.inno-editor-rendering
---
# Contribute a rendering model to an Editor viewport

A viewport kind describes a purpose—Scene View, Game View or a custom preview—not a hardcoded 2D/3D renderer. A contributor supplies its model's frame data and optional pipeline. The neutral Editor boundary does not know plugin camera, scene extraction, picking-buffer or material-world types.

## Register participation and interaction separately

Use `EditorViewportContributorExtensionAttribute` to declare stable identity, viewport kind, render order and controller priority. Each frame the host asks candidates whether they contribute. One applicable model can render directly; multiple models require an explicit `RenderOutputRoute` with layer order and each world's content source.

Multiple models render into independent targets with compatible formats, then compose using premultiplied alpha. Missing route configuration or a failed layer rejects the complete output and reports a diagnostic. Models do not share geometric depth. Requests writing overlapping areas of the same target must honor `preservePresentationTarget` by loading existing color rather than clearing it again.

Controller priority chooses one contributor for navigation, toolbar, pointer input and manipulation space. It does not perform layer composition. Use an explicit neutral XY/XZ/YZ or Spatial manipulation plane; orthographic projection and planar navigation do not implicitly choose gizmo dimensions.

## Consume only the current frame's content

The host supplies a stable viewport ID, physical dimensions, frame-scoped `ContentReadScope`, navigation state and presentation preferences. `pixelDensity` relates physical pixels to logical units; background colors are linear. Each model reads only understood content types and skips scenes without its extraction system. A scope can legitimately include several model types.

Do not retain the context, scope-resolved objects, frame data or plugin types across callbacks/generations. Host-owned navigation stores neutral values by viewport ID, so plugin reload does not reset the view or root a plugin camera. Errors, target state and navigation remain isolated between viewports of the same kind.

The frame order is: establish content/presentation, determine participation, choose/configure the controller, process input, build contributions, freeze composition, then submit ordered requests. Input results reach that same frame's snapshot. Only the controller's manipulation matrices are accepted, and they must describe the same submitted snapshot so image, picking and gizmos agree.

## Submit semantic gizmos

An `EditorGizmoProvider` collects through a generation-scoped registry. Its context supplies content, selected runtime identities and physical viewport size. Submit semantic icon IDs and world positions or selected-range lines. Built-in camera/light/canvas meanings and an unknown-icon fallback are presentation policy, not plugin-provided font code points or colors.

Gizmo output is transient. A drag records a minimal Transform transaction through SceneEdits at release, without storing plugin delegates or runtime types. Overlapping icons retain their actual world positions and can expose target selection rather than shifting the world anchors.

## Publish only a ready texture

The host allocates/resizes render textures and registers an opaque presentation texture only after the current revision's graph attachment write was successfully recorded. Until then, display Preparing rather than sampling an uninitialized target. Panels receive no BGFX handle or CPU-readback substitute.

`TryRender` uses the same offscreen host chain for previews. ReleaseRendered can retire a viewport even before its first image, including its persistent shader-resource scope; Release and ReleaseAll cover generated previews too. Texture previews recheck resident generation and dimensions after reimport instead of retaining a stale image forever.

Contributor participation/navigation/build/toolbar/pointer failures are isolated to that contributor. No applicable contributor shows an unavailable state while unrelated Editor features continue. Stats use completed-frame device facts; absent allocation diagnostics show Unavailable, not zero.

## Distinguish draft checks from published assets

Material preview requests read immutable artifacts from the current formal Shader without changing the material. Draft shaders compile in a separate cache. Interactive Check additionally queues the candidate for a render-safe device validation: the real resource service creates and retires each pass pipeline and validates loading, linking and reflection. A failed Check reports that revision's diagnostic and does not pretend an old preview validates the new candidate.

The authoring target provider separately compiles formal Shader/Texture artifacts by content version. First work is Pending, not a missing deployed file. It may keep a last-good Ready artifact while a new candidate is pending or failed. Unavailable describes genuinely absent immutable deployment output. These policies are intentionally different from an explicit draft Check.

Structured diagnostics preserve code/source/message/severity; recoverable groups resolve on successful compilation, resource restoration or owner disposal. Distinct diagnostics in one source must not overwrite one another.

PipelineDocuments uses the shared source-draft service. Replace/ReplaceSettings records immediate neutral History with complete dependency context; saving is separate from import/activation. Missing settings retain bytes, dependencies and feature order. Existing settings/feature toggles/order use shared drawers; selecting new pipeline types/features comes from configuration APIs or plugin templates rather than a built-in renderer-specific branch.
