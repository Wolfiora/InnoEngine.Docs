---
title: "SDLContext.RawApi — Method: GetWindowMouseRect"
description: "Exact Method: GetWindowMouseRect contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.bf2f302fdac6eda6
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetWindowMouseRect

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindowMouseRect`

<a id="api-8531f5e2ba1fff53"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetWindowMouseRect(Inno.Native.Sdl3.SDLWindow*) 0a699c44f44f5c506574b7261d9f9cc4f4cb34905f272a49ffb58a634616d30d -->

```csharp
public Inno.Native.Sdl3.SDLRect* Inno.Native.Sdl3.SDLContext.RawApi.GetWindowMouseRect(Inno.Native.Sdl3.SDLWindow* window)
```

Get the mouse confinement rectangle of a window.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetWindowMouseRect

**See also:** SDL_GetWindowMouseGrab

**See also:** SDL_SetWindowMouseGrab

**Parameter `window`:** the window to query.

**Returns:** a pointer to the mouse confinement rectangle of a window, or NULL
if there isn't one.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29244).
