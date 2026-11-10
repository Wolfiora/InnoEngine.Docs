---
title: "SDLContext — Method: HidBleScan"
description: "Exact Method: HidBleScan contracts in SDLContext."
uid: api.inno.native.sdl3.e89c5a0b0c704b26
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: HidBleScan

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HidBleScan`

<a id="api-fbf0f20e89330a2e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.HidBleScan(System.Boolean) 573d8bd6757c0a4c71d68e3e1ccabde0a4adbe25c3a87e05fe750fa9f1d0f1f5 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.HidBleScan(bool active)
```

Start or stop a BLE scan on iOS and tvOS to pair Steam Controllers.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `active`:** true to start the scan, false to stop the scan.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12958).
