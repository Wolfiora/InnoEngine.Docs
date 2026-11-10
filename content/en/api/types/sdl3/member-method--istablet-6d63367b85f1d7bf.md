---
title: "SDLContext.RawApi — Method: IsTablet"
description: "Exact Method: IsTablet contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6d63367b85f1d7bf
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: IsTablet

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsTablet`

<a id="api-be0a812fbe9745c0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.IsTablet b5a7b4ee8c5f215b7f15fb81a21e5754f46e0b93d973366c7672cca82c73c9e3 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.IsTablet()
```

Query if the current device is a tablet.
If SDL can't determine this, it will return false.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** true if the device is a tablet, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21931).
