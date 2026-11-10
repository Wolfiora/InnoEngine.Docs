---
title: "SDL — Method: UpdateGamepads"
description: "Exact Method: UpdateGamepads contracts in SDL."
uid: api.inno.native.sdl3.f841cc15be0507c7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: UpdateGamepads

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UpdateGamepads`

<a id="api-03e85fa597b6371b"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.UpdateGamepads e282f0f0fa8a9101c05d7db8b0e326057814c0eece0a1192b790240a6d428e22 -->

```csharp
public static void Inno.Native.Sdl3.SDL.UpdateGamepads()
```

Manually pump gamepad updates if not using the loop.
This function is called automatically by the event loop if events are
enabled. Under such circumstances, it will not be necessary to call this
function.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L753).
