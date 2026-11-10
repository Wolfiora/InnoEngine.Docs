---
title: "SDLContext.RawApi — Method: GetVideoDriver"
description: "Exact Method: GetVideoDriver contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.4687c907d55bb070
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetVideoDriver

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetVideoDriver`

<a id="api-8584e1d19366ce70"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetVideoDriver(System.Int32) 3014570ea685e75f8ea22a109ff7ea114c9793746cb83b94810974d1bea58e78 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetVideoDriver(int index)
```

Get the name of a built in video driver.
The video drivers are presented in the order in which they are normally
checked during initialization.
The names of drivers are all simple, low-ASCII identifiers, like "cocoa",
"x11" or "windows". These never have Unicode characters, and are not meant
to be proper names.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetNumVideoDrivers

**Parameter `index`:** the index of a video driver.

**Returns:** the name of the video driver with the given **index**, or NULL if
index is out of bounds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L51337).
