---
title: "SDL — Method: IsAudioDevicePhysical"
description: "Exact Method: IsAudioDevicePhysical contracts in SDL."
uid: api.inno.native.sdl3.a6b36640c4757cf3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: IsAudioDevicePhysical

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsAudioDevicePhysical`

<a id="api-68f0f5b1fafd9fa3"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.IsAudioDevicePhysical(System.UInt32) d3a9f03d2b6a349109df5d293f39dcd5c8f1bb56a8a64fb7f96648fd700ad070 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.IsAudioDevicePhysical(uint devid)
```

Determine if an audio device is physical (instead of logical).
An SDL_AudioDeviceID that represents physical hardware is a physical
device; there is one for each piece of hardware that SDL can see. Logical
devices are created by calling SDL_OpenAudioDevice or
SDL_OpenAudioDeviceStream, and while each is associated with a physical
device, there can be any number of logical devices on one physical device.
For the most part, logical and physical IDs are interchangeable--if you try
to open a logical device, SDL understands to assign that effort to the
underlying physical device, etc. However, it might be useful to know if an
arbitrary device ID is physical or logical. This function reports which.
This function may return either true or false for invalid device IDs.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `devid`:** the device ID to query.

**Returns:** true if devid is a physical device, false if it is logical.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2418).
