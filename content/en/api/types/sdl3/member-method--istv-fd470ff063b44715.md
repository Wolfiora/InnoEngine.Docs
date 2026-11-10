---
title: "SDLContext.RawApi — Method: IsTv"
description: "Exact Method: IsTv contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.fd470ff063b44715
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: IsTv

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsTv`

<a id="api-1d8d1a8d96695fb5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.IsTv 81109691b64db976fd5e2fef969ce509b5432a26a9b81c2af289baa54128be62 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.IsTv()
```

Query if the current device is a TV.
If SDL can't determine this, it will return false.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** true if the device is a TV, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17557).
