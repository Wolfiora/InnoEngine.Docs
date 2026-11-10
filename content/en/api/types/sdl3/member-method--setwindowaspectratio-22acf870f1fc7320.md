---
title: "SDLContext.RawApi — Method: SetWindowAspectRatio"
description: "Exact Method: SetWindowAspectRatio contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.22acf870f1fc7320
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetWindowAspectRatio

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetWindowAspectRatio`

<a id="api-1dad864cb1398a5e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetWindowAspectRatio(Inno.Native.Sdl3.SDLWindow*,System.Single,System.Single) 6e69a0c2a1cc020d946a7829bf91d453431504898e51685749f43c4018bd1bf6 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetWindowAspectRatio(Inno.Native.Sdl3.SDLWindow* window, float min_aspect, float max_aspect)
```

Request that the aspect ratio of a window's client area be set.
The aspect ratio is the ratio of width divided by height, e.g. 2560x1600
would be 1.6. Larger aspect ratios are wider and smaller aspect ratios are
narrower.
If, at the time of this request, the window in a fixed-size state, such as
maximized or fullscreen, the request will be deferred until the window
exits this state and becomes resizable again.
On some windowing systems, this request is asynchronous and the new window
aspect ratio may not have have been applied immediately upon the return of
this function. If an immediate change is required, call SDL_SyncWindow() to
block until the changes have taken effect.
When the window size changes, an SDL_EVENT_WINDOW_RESIZED event will be
emitted with the new window dimensions. Note that the new dimensions may
not match the exact aspect ratio requested, as some windowing systems can
restrict the window size in certain scenarios (e.g. constraining the size
of the content area to remain within the usable desktop bounds).
Additionally, as this is just a request, it can be denied by the windowing
system.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetWindowAspectRatio

**See also:** SDL_SyncWindow

**Parameter `window`:** the window to change.

**Parameter `min_aspect`:** the minimum aspect ratio of the window, or 0.0f for no
limit.

**Parameter `max_aspect`:** the maximum aspect ratio of the window, or 0.0f for no
limit.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L34360).
