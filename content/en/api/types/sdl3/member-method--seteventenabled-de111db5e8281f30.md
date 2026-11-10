---
title: "SDL — Method: SetEventEnabled"
description: "Exact Method: SetEventEnabled contracts in SDL."
uid: api.inno.native.sdl3.de111db5e8281f30
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: SetEventEnabled

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetEventEnabled`

<a id="api-f1b2af1052c779cb"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.SetEventEnabled(System.UInt32,System.Boolean) 925fa069cb945700b1ad32ce96220dc5c474d6df7e47d194b5b9c6be0389ebb4 -->

```csharp
public static void Inno.Native.Sdl3.SDL.SetEventEnabled(uint type, bool enabled)
```

Set the state of processing events by type.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_EventEnabled

**Parameter `type`:** the type of event; see SDL_EventType for details.

**Parameter `enabled`:** whether to process the event or not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3554).
