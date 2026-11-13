---
title: Own a presentation context
description: Compose authoring UI without leaking native windows or renderer
  handles into the host.
uid: extending.presentation-context
kind: how-to
owners:
  - Inno.Adapter.Presentation
  - Inno.Adapter.Platform
  - Inno.Platform
contracts:
  - project.inno-adapter-presentation
  - project.inno-adapter-platform
  - project.inno-platform
---
# Own a presentation context

An authoring host uses `IPresentationContext` to draw UI, contribute rendering work and manage layout text. Platform applications own windows and events; render devices own GPU resources. Keep these owners explicit instead of coupling the host to an SDL, ImGui or BGFX implementation.

## Register and select the implementation

Supply the complete provider collection to the presentation catalog. IDs are open and case-sensitive. Unknown selections fail; no registration silently substitutes a different implementation. The default authoring adapter composition also requires an explicit provider collection. An empty collection means no presentation backend.

Validate platform and rendering selections before creating windows or devices. Create the platform application, primary window and rendering device through the containing product's composition, then provide them as borrowed `PresentationBackendOptions` dependencies.

The caller owns the returned presentation context. Creating it does not transfer ownership of the supplied application, window or device.

## Build a frame safely

Call `RenderFrame` through the host's normal frame lifecycle. Its optional synchronous preparation runs after selecting the owned context and display metrics and before creating the frame. If preparation fails, drawing does not run and no partial frame is published. Reentering a frame operation fails explicitly.

The context implements the neutral frame-contributor contract. Integrate it into the host's graph; do not create a second rendering loop. Use `TryGetWindowId` to relate a live presentation viewport to a platform window rather than assuming every viewport is the primary window.

## Register images without transferring textures

Register a persistent texture from the active device generation to obtain an opaque presentation token. Draw with logical presentation dimensions. Unregister the token when the presentation no longer needs it; this does not destroy the texture.

Keep the texture's owner alive for every frame that may consume it. Do not serialize tokens or reuse them after context/device retirement. See [frame ownership](../architecture/render-frame.md) for contributor snapshots and resource retirement.

## Persist layout through one owner

If the host owns layout storage, call `SetLayoutFile(null)` to disable independent backend-file persistence. Load complete saved text and capture complete changed layout with `TryCaptureLayout`; force capture only when the caller requires it.

Layout belongs to the presentation/host lifetime. It does not turn native context or window handles into persistent engine identities.

## Retire in dependency order

Stop new frames and callbacks, detach the presentation from future graph snapshots, and complete outstanding use before disposal. Release presentation before its shared render device and window owners. The window/application owner remains responsible for their final destruction.

For physical surface borrowing between concrete adapters, read [window and surface lifetime](../platforms/window-lifetime.md). For exact options, failures and methods, use the [presentation reference](../architecture/projects/inno-adapter-presentation.md).
