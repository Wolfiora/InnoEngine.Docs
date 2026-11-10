---
title: "SDLContext.RawApi — Method: RestoreWindow"
description: "Exact Method: RestoreWindow contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.20b855bca704c46b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RestoreWindow

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RestoreWindow`

<a id="api-4f17e5773dfc99ea"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RestoreWindow(Inno.Native.Sdl3.SDLWindow*) 5914b7b6edf060ec1d47cf8ff1d29b96ac526f42c08635dd65dd3081c90e1146 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RestoreWindow(Inno.Native.Sdl3.SDLWindow* window)
```

Request that the size and position of a minimized or maximized window be
restored.
If the window is in a fullscreen state, this request has no direct effect.
It may alter the state the window is returned to when leaving fullscreen.
On some windowing systems this request is asynchronous and the new window
state may not have have been applied immediately upon the return of this
function. If an immediate change is required, call SDL_SyncWindow() to
block until the changes have taken effect.
When the window state changes, an SDL_EVENT_WINDOW_RESTORED event will be
emitted. Note that, as this is just a request, the windowing system can
deny the state change.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_MaximizeWindow

**See also:** SDL_MinimizeWindow

**See also:** SDL_SyncWindow

**Parameter `window`:** the window to restore.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23615).
