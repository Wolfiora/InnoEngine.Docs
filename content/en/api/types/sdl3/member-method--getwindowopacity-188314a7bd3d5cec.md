---
title: "SDLContext.RawApi — Method: GetWindowOpacity"
description: "Exact Method: GetWindowOpacity contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.188314a7bd3d5cec
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetWindowOpacity

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindowOpacity`

<a id="api-fff942b05c70e94f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetWindowOpacity(Inno.Native.Sdl3.SDLWindow*) 29f5b752d0087944de0084c4c5a0d47b9c978929ce4b80b51946076ae658c39a -->

```csharp
public float Inno.Native.Sdl3.SDLContext.RawApi.GetWindowOpacity(Inno.Native.Sdl3.SDLWindow* window)
```

Get the opacity of a window.
If transparency isn't supported on this platform, opacity will be returned
as 1.0f without error.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetWindowOpacity

**Parameter `window`:** the window to get the current opacity value from.

**Returns:** the opacity, (0.0f - transparent, 1.0f - opaque), or -1.0f on
failure; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L34890).
