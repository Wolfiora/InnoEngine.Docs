---
title: "SDLContext — Method: IsAudioDevicePhysical"
description: "Exact Method: IsAudioDevicePhysical contracts in SDLContext."
uid: api.inno.native.sdl3.71174e3cd3eb86ef
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: IsAudioDevicePhysical

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsAudioDevicePhysical`

<a id="api-39a78f7bfb87b6ca"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.IsAudioDevicePhysical(System.UInt32) eb8bd28e11d29c7346414632f3b6cf0e08f4a009452d21ccdf646d92677a04e8 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.IsAudioDevicePhysical(uint devid)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14280).
