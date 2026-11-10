---
title: "SDL — Method: GetTicksNs"
description: "Exact Method: GetTicksNs contracts in SDL."
uid: api.inno.native.sdl3.a413201cabc585fe
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetTicksNs

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTicksNs`

<a id="api-230fcee698d8fe75"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetTicksNs 59bf9cceeb677f3aa8910acdefc82226b9a066c18f61cfaedb4533a37cfcd79c -->

```csharp
public static ulong Inno.Native.Sdl3.SDL.GetTicksNs()
```

Get the number of nanoseconds since SDL library initialization.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** an unsigned 64-bit value representing the number of nanoseconds
since the SDL library initialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2869).
