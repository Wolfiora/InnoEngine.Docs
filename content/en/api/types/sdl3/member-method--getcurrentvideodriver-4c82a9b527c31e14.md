---
title: "SDLContext.RawApi — Method: GetCurrentVideoDriver"
description: "Exact Method: GetCurrentVideoDriver contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.4c82a9b527c31e14
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetCurrentVideoDriver

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetCurrentVideoDriver`

<a id="api-432bbeeabbceee29"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetCurrentVideoDriver 826918ebe9c8bb4040128a25c7e1de429412ac51ab4a39af7833cb8316691f76 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetCurrentVideoDriver()
```

Get the name of the currently initialized video driver.
The names of drivers are all simple, low-ASCII identifiers, like "cocoa",
"x11" or "windows". These never have Unicode characters, and are not meant
to be proper names.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetNumVideoDrivers

**See also:** SDL_GetVideoDriver

**Returns:** the name of the current video driver or NULL if no driver has been
initialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L19128).
