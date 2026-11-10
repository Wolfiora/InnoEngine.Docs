---
title: "SDLContext — Method: IsTv"
description: "Exact Method: IsTv contracts in SDLContext."
uid: api.inno.native.sdl3.a4bfb18819582e6c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: IsTv

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsTv`

<a id="api-b6ad1f0929d62ad0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.IsTv 2e7dc1e64d687e31509f53d6304fafb3d2598c4e969ff73bb60a5c4feb9e7575 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.IsTv()
```

Query if the current device is a TV.
If SDL can't determine this, it will return false.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** true if the device is a TV, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L11567).
