---
title: "SDLContext.RawApi — Method: GetAudioDeviceChannelMap"
description: "Exact Method: GetAudioDeviceChannelMap contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6fdeb357d4e69387
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetAudioDeviceChannelMap

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetAudioDeviceChannelMap`

<a id="api-473a5f2a3ce74b0a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetAudioDeviceChannelMap(System.UInt32,System.Int32*) 483afacf4ebfca133efb787312afc829b98215e72140ca8189a108f67909d778 -->

```csharp
public int* Inno.Native.Sdl3.SDLContext.RawApi.GetAudioDeviceChannelMap(uint devid, int* count)
```

Get the current channel map of an audio device.
Channel maps are optional; most things do not need them, instead passing
data in the [order that SDL expects](https://wiki.libsdl.org/SDL3/CategoryAudio#channel-layouts).
Audio devices usually have no remapping applied. This is represented by
returning NULL, and does not signify an error.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetAudioStreamInputChannelMap

**Parameter `devid`:** the instance ID of the device to query.

**Parameter `count`:** On output, set to number of channels in the map. Can be NULL.

**Returns:** an array of the current channel mapping, with as many elements as
the current output spec's channels, or NULL if default. This
should be freed with SDL_free() when it is no longer needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L41825).
