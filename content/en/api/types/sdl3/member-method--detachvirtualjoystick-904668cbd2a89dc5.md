---
title: "SDL — Method: DetachVirtualJoystick"
description: "Exact Method: DetachVirtualJoystick contracts in SDL."
uid: api.inno.native.sdl3.904668cbd2a89dc5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: DetachVirtualJoystick

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DetachVirtualJoystick`

<a id="api-3a3e517669e6a6d7"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.DetachVirtualJoystick(System.UInt32) 7860ef9dfabc1452ad7eadc489a8b59cfcc68973677d50beabf9d6c3db2af650 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.DetachVirtualJoystick(uint instance_id)
```

Detach a virtual joystick.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_AttachVirtualJoystick

**Parameter `instance_id`:** the joystick instance ID, previously returned from
SDL_AttachVirtualJoystick().

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1415).
