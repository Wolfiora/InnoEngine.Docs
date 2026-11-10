---
title: "SDL — Method: IsTablet"
description: "Exact Method: IsTablet contracts in SDL."
uid: api.inno.native.sdl3.34c1b18708ad35a5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: IsTablet

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsTablet`

<a id="api-4e150fa418f37f16"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.IsTablet 736b5e96fae7f9f225aeec68b691957952c75566335c19614302d884414680d4 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.IsTablet()
```

Query if the current device is a tablet.
If SDL can't determine this, it will return false.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** true if the device is a tablet, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L794).
