---
title: "SDLContext.RawApi — Method: MinimizeWindow"
description: "Exact Method: MinimizeWindow contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b52229854bc5b577
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: MinimizeWindow

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `MinimizeWindow`

<a id="api-227d27a31793cf81"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.MinimizeWindow(Inno.Native.Sdl3.SDLWindow*) 771bc394a9d0ff7fb0842049ffbe644ec13f077fd7db9a714c12feb301270dce -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.MinimizeWindow(Inno.Native.Sdl3.SDLWindow* window)
```

Request that the window be minimized to an iconic representation.
If the window is in a fullscreen state, this request has no direct effect.
It may alter the state the window is returned to when leaving fullscreen.
On some windowing systems this request is asynchronous and the new window
state may not have been applied immediately upon the return of this
function. If an immediate change is required, call SDL_SyncWindow() to
block until the changes have taken effect.
When the window state changes, an SDL_EVENT_WINDOW_MINIMIZED event will be
emitted. Note that, as this is just a request, the windowing system can
deny the state change.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_MaximizeWindow

**See also:** SDL_RestoreWindow

**See also:** SDL_SyncWindow

**Parameter `window`:** the window to minimize.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L24659).
