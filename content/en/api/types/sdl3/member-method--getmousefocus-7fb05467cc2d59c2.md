---
title: "SDLContext.RawApi — Method: GetMouseFocus"
description: "Exact Method: GetMouseFocus contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7fb05467cc2d59c2
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetMouseFocus

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetMouseFocus`

<a id="api-e3a4953c7881f8a0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetMouseFocus c6d40cb9d2cc12cc262c99c0b0f41de8d41392e35e10ea60383fa009a1a9e5d1 -->

```csharp
public Inno.Native.Sdl3.SDLWindow* Inno.Native.Sdl3.SDLContext.RawApi.GetMouseFocus()
```

Get the window which currently has mouse focus.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** the window with mouse focus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52612).
