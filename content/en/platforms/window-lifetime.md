---
title: Own windows and rendering surfaces
description: Compose platform windows with rendering without transferring borrowed handles or destroying live surfaces.
uid: platforms.window-lifetime
kind: how-to
---
# Own windows and rendering surfaces

A window, its application wrapper and the renderer's surface have different owners. Keep their destruction order explicit when composing a product or implementing a host.

## Choose the system integration

The SDL host integration supplies initialization, window creation, focus and system handles. The BGFX runtime integration validates those borrowed handles for rendering. Neither selection chooses the build-time shader compiler.

| Target | Window integration | Rendering integration | Additional windows |
| --- | --- | --- | --- |
| Windows x64 | [SDL host](../api/projects/inno-integration-windowsx64-sdl3.md) | [Win32 surface](../api/projects/inno-integration-windowsx64-bgfx-runtime.md) | Subject to actual renderer capability |
| macOS ARM64 | [SDL host](../api/projects/inno-integration-macosarm64-sdl3.md) | [Cocoa surface](../api/projects/inno-integration-macosarm64-bgfx-runtime.md) | Subject to actual renderer capability |
| Browser | [SDL host](../api/projects/inno-integration-browserwasm32-sdl3.md) | [Canvas surface](../api/projects/inno-integration-browserwasm32-bgfx-runtime.md) | Not supported |

The desktop integrations permit primary-output sRGB reset; the Browser integration does not. A permitted capability still requires support from the selected backend and device.

## Create and borrow in order

1. Construct the application with its explicit host integration on the owner thread.
2. Create the window through that application, or explicitly adopt an externally owned window.
3. Supply the live window's borrowed system handles to the renderer. The integration validates the ABI and presentation role before native initialization or additional-surface creation.
4. Keep the application, window and original external owner alive while rendering references the surface.

The integration configuration is borrowed and immutable. A successful surface resolution does not transfer window or display ownership. An invalid role, ABI or zero handle fails explicitly; it does not create a replacement window.

## Close safely

Stop submitting work for the closing surface, request `RetireWindowSurface`, and let the renderer process the retirement before the window owner destroys its system handle. A completed retirement Task is not a general GPU fence; retain any additional in-flight resource protection required by the rendering contract.

For an adopted window, release the application wrapper first, then let the external owner destroy the original window. Do not destroy the same handle through both paths. Released wrappers reject native-handle access.

Application/window operations remain on their original owner thread. An `await` does not promise that the continuation returned to that thread. Consult [SDL application ownership](../backends/sdl3.md) when coordinating input, event pumping and shutdown.

## Recognize platform limits

Browser starts with no assumed focus and follows browser focus events. It creates an OpenGL Canvas and does not install desktop live-resize behavior. Unsupported multiple-window requests fail before native creation.

Source-level composition and compiled examples cannot certify a real window, display, driver or event loop. Use the relevant native/product checks on the actual platform when changing initialization, handles, focus or retirement.
