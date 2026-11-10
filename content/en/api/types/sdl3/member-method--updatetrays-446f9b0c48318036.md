---
title: "SDL — Method: UpdateTrays"
description: "Exact Method: UpdateTrays contracts in SDL."
uid: api.inno.native.sdl3.446f9b0c48318036
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: UpdateTrays

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UpdateTrays`

<a id="api-dc2b430874a3bd97"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.UpdateTrays f339fcab9940b6b9adb403f5d6155c5d2634247589cf0ac92ef468085a6985bc -->

```csharp
public static void Inno.Native.Sdl3.SDL.UpdateTrays()
```

Update the trays.
This is called automatically by the event loop and is only needed if you're
using trays but aren't handling SDL events.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2533).
