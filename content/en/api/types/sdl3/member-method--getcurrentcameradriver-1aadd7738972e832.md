---
title: "SDLContext.RawApi — Method: GetCurrentCameraDriver"
description: "Exact Method: GetCurrentCameraDriver contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1aadd7738972e832
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetCurrentCameraDriver

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetCurrentCameraDriver`

<a id="api-8ce533d272dd2325"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetCurrentCameraDriver bc741a0f81843536f4e7ffca00628ae301f41118643f1a533eb4626dab09dec9 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetCurrentCameraDriver()
```

Get the name of the current camera driver.
The names of drivers are all simple, low-ASCII identifiers, like "v4l2",
"coremedia" or "android". These never have Unicode characters, and are not
meant to be proper names.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** the name of the current camera driver or NULL if no driver has
been initialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23999).
