---
title: "SDL — Method: HidBleScan"
description: "Exact Method: HidBleScan contracts in SDL."
uid: api.inno.native.sdl3.fdf44625765017c2
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: HidBleScan

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HidBleScan`

<a id="api-94c73b79268c402e"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.HidBleScan(System.Boolean) cfe79fc4d81a066dcf61ca7c4128282ebe5e4ede6ee508e44fa64762e4c008f0 -->

```csharp
public static void Inno.Native.Sdl3.SDL.HidBleScan(bool active)
```

Start or stop a BLE scan on iOS and tvOS to pair Steam Controllers.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `active`:** true to start the scan, false to stop the scan.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1321).
