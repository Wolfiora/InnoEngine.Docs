---
title: "SDLContext.RawApi — Method: GetCameraDriver"
description: "Exact Method: GetCameraDriver contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.3fc0eb4dfef4f7bc
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetCameraDriver

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetCameraDriver`

<a id="api-92a6035df27b4644"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetCameraDriver(System.Int32) 59af0870324bd9c0412a9aa1368c1efa9b0a5b06243148eedf69a331d93f6ea3 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetCameraDriver(int index)
```

Use this function to get the name of a built in camera driver.
The list of camera drivers is given in the order that they are normally
initialized by default; the drivers that seem more reasonable to choose
first (as far as the SDL developers believe) are earlier in the list.
The names of drivers are all simple, low-ASCII identifiers, like "v4l2",
"coremedia" or "android". These never have Unicode characters, and are not
meant to be proper names.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetNumCameraDrivers

**Parameter `index`:** the index of the camera driver; the value ranges from 0 to
SDL_GetNumCameraDrivers() - 1.

**Returns:** the name of the camera driver at the requested index, or NULL if
an invalid index was specified.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27905).
