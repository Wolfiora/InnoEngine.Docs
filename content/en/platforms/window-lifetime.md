---
title: Own windows and rendering surfaces
description: Preserve borrowed window handles and rendering retirement across host implementations.
uid: platforms.window-lifetime
kind: how-to
---
# Own windows and rendering surfaces

A window owner and a rendering surface have different lifetimes. Code that composes them must keep borrowed handles valid until rendering has stopped using them.

## Establish the owners

1. Obtain application and window services from the selected host.
2. Create or explicitly adopt the window through its owning service.
3. Supply the live window surface to the renderer through the supported integration boundary.
4. Retain the window, application and any external native owner while rendering borrows the surface.

Successful surface resolution does not transfer ownership. An invalid or unsupported surface fails through its actual contract; shared engine code must not silently create another window.

## Close in dependency order

Stop submitting work for a closing surface, request its retirement and wait for the rendering owner to finish the required retirement before destroying the window. A completed retirement task is not a general GPU fence. Keep any additional in-flight resource protection required by the renderer.

For an adopted window, release the engine wrapper before its external owner destroys the native object. Do not release the same resource through both paths.

## Respect thread and capability boundaries

Application and window operations follow their owner-thread contract. Awaiting a task does not itself restore that thread. Event pumping, focus and additional-window support depend on the selected host's capabilities; do not infer them from a shared interface's existence.

Use [rendering ownership](../manual/rendering/index.md) and the [SDL integration guide](../backends/sdl3.md) for the relevant engine-level contracts. Concrete OS handles, surface ABI implementations and target-specific initialization are intentionally outside the reference.
