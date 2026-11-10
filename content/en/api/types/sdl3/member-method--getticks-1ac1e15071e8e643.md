---
title: "SDL — Method: GetTicks"
description: "Exact Method: GetTicks contracts in SDL."
uid: api.inno.native.sdl3.1ac1e15071e8e643
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetTicks

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTicks`

<a id="api-2113f250694a267d"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetTicks fc84beff0d363d2da9a97634f50245c721f160661f79987c85714aa2b8f03081 -->

```csharp
public static ulong Inno.Native.Sdl3.SDL.GetTicks()
```

Get the number of milliseconds that have elapsed since the SDL library
initialization.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetTicksNS

**Returns:** an unsigned 64‑bit integer that represents the number of
milliseconds that have elapsed since the SDL library was
initialized (typically via a call to SDL_Init).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L479).
