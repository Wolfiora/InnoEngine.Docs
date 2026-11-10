---
title: "SDLContext.RawApi — Method: GetWindowIccProfile"
description: "Exact Method: GetWindowIccProfile contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a0cbe47fcd40d92b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetWindowIccProfile

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindowIccProfile`

<a id="api-6910b66e9089c416"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetWindowIccProfile(Inno.Native.Sdl3.SDLWindow*,System.UInt64*) 6640cbe939c422b7d17a8c900aada547e4bb822af7373bc516070f6b4810c8ea -->

```csharp
public void* Inno.Native.Sdl3.SDLContext.RawApi.GetWindowIccProfile(Inno.Native.Sdl3.SDLWindow* window, ulong* size)
```

Get the raw ICC profile data for the screen the window is currently on.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `window`:** the window to query.

**Parameter `size`:** the size of the ICC profile.

**Returns:** the raw ICC profile data on success or NULL on failure; call
SDL_GetError() for more information. This should be freed with
SDL_free() when it is no longer needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L33261).
