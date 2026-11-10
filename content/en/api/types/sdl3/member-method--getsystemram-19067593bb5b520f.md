---
title: "SDL — Method: GetSystemRam"
description: "Exact Method: GetSystemRam contracts in SDL."
uid: api.inno.native.sdl3.19067593bb5b520f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetSystemRam

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSystemRam`

<a id="api-70fee50bd08efd12"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetSystemRam 618a3bb0741bf45ac6fa6419748470e8b8a443f6ec3e00b75e23e40f649f20fd -->

```csharp
public static int Inno.Native.Sdl3.SDL.GetSystemRam()
```

Get the amount of RAM configured in the system.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** the amount of RAM configured in the system in MiB.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L4073).
