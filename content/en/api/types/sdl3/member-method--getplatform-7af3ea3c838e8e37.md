---
title: "SDLContext.RawApi — Method: GetPlatform"
description: "Exact Method: GetPlatform contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7af3ea3c838e8e37
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetPlatform

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetPlatform`

<a id="api-ed58ae781f8a9189"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetPlatform cc8789da933ed8e810a54e32683ffdaddc8e416d0724bc8f07e259bb34fc542f -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetPlatform()
```

Get the name of the platform.
Here are the names returned for some (but not all) supported platforms:
- "Windows"
- "macOS"
- "Linux"
- "iOS"
- "Android"

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** the name of the platform. If the correct platform name is not
available, returns a string beginning with the text "Unknown".


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L40013).
