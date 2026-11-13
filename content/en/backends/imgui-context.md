---
title: Own an ImGui presentation context
description: Bind a context to its SDL application, borrow frames and retire
  viewports before releasing callbacks or fonts.
uid: backends.imgui-context
kind: how-to
owners:
  - Inno.Adapter.Presentation.ImGui.Sdl3
contracts:
  - project.inno-adapter-presentation-imgui-sdl3
---
# Own an ImGui presentation context

The SDL/ImGui managed adapter binds a UI context, application windows, renderer and callback lifetime. Engine extensions normally use the [Editor widget facade](../extending/editor-widgets.md), while product composition creates the underlying context explicitly.

## Create with explicit interaction policy

CreateImGuiContext requires ImGuiInteractionOptions and a window owned by the application. Main and additional viewports share the application's actual host/surface integration. Register newly created windows and release registration before destruction; do not create another global window directory or event bus.

Each frame reads the real window dimensions, pixel scale and DPI before NewFrame. It does not copy a stale window snapshot or repeat Win32/Cocoa ABI interpretation. Hidden/minimized windows do not present. Successful context creation transfers renderer ownership; failed creation leaves the renderer with the caller, and duplicate creation is rejected.

## Borrow one complete frame

RenderFrame selects its context and updates display metrics before the preparation callback, which runs before native NewFrame. Reentry and disposal are rejected during preparation, drawing and publication.

Preparation failure creates no native frame. Draw failure ends only the adapter's frame, does not publish partial draw data, and propagates the original error. The caller still balances its windows and push/pop scopes; the adapter does not clear another context's stack. Draw data is borrowed only until the next frame or context retirement.

## Configure fonts before drawing

The bundled English interface uses four JetBrains Mono styles merged with Font Awesome and the separately licensed Inno icon font. Assets have one source/deployment owner; there is no source-tree or system-font search to fill missing glyphs. The merged Inno glyph at U+E000 uses the current text color, and the authored Shader mark remains available through the engine's icon use contract.

RegisterFontStyle accepts an explicitly deployed TrueType/OpenType file on the context owner thread before the first RenderFrame. The file must contain the required language glyphs and carry appropriate licensing. Registration merges built-in icons, not an automatic language fallback. Missing files/load failures are errors. The native atlas owns loaded data until the context retires.

Game text uses the separate [Text shaping contract](../manual/text/shape-text.md), with explicit font/language/script/direction policy. Editor default fonts do not define the game's localization or shaping capability.

## Retire windows before callbacks and the context

Viewport close removes routes/registration and requests renderer retirement, retaining the native SDL window. At the next managed safe point, successful completion permits one destruction; failure retains the owner and reports it. Final disposal drains all viewport/renderer work before releasing the native context and font data.

Position/size callbacks use the engine's scalar ABI bridge; aggregate ABI rules remain with the C++ compiler. Registration belongs to the context and owner thread. Check callback quiescence and unregister only after viewport/renderer retirement. Failure cannot authorize destroying their dependencies early.

Dispose and DestroyImGuiContext share the same completion path. Remove the exact application's registration only after every dependency retires; Pending/failure retains registration for a legitimate retry. Application exit freezes its context set and rejects new creation while retiring it. See [BGFX presentation retirement](imgui-rendering.md).

## Documentation scope

The managed context, interaction, frame, font and renderer contracts are documented in the reference below. The upstream-generated glyph constant catalog is not mirrored as thousands of engine API entries. Full extraction facts and its exact capture/source/declaration exclusion identities remain in the bound provenance; engine-specific icon usage and branding attribution stay documented. This exclusion does not waive native callback, deployment or lifetime tests.
