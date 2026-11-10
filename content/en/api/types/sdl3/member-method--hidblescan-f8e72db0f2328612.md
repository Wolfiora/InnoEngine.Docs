---
title: "SDLContext.RawApi — Method: HidBleScan"
description: "Exact Method: HidBleScan contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f8e72db0f2328612
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HidBleScan

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HidBleScan`

<a id="api-ae1b85165fd201b9"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HidBleScan(System.Byte) b74307efab3ff04c5a209f945d4313e2a8d3114316c11a7fb1c0dffd435f8465 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.HidBleScan(byte active)
```

Start or stop a BLE scan on iOS and tvOS to pair Steam Controllers.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `active`:** true to start the scan, false to stop the scan.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27178).
