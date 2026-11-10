---
title: "SDLContext.RawApi — Method: GetAudioPlaybackDevices"
description: "Exact Method: GetAudioPlaybackDevices contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d3b74494598ae41f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetAudioPlaybackDevices

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetAudioPlaybackDevices`

<a id="api-67315f1c9361e609"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetAudioPlaybackDevices(System.Int32*) 96ac5531c0892e5259a8cc7df4738a4fbb2b3cad046e1edc23029a899b4f5943 -->

```csharp
public uint* Inno.Native.Sdl3.SDLContext.RawApi.GetAudioPlaybackDevices(int* count)
```

Get a list of currently-connected audio playback devices.
This returns of list of available devices that play sound, perhaps to
speakers or headphones ("playback" devices). If you want devices that
record audio, like a microphone ("recording" devices), use
SDL_GetAudioRecordingDevices() instead.
This only returns a list of physical devices; it will not have any device
IDs returned by SDL_OpenAudioDevice().
If this function returns NULL, to signify an error, `*count` will be set to
zero.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_OpenAudioDevice

**See also:** SDL_GetAudioRecordingDevices

**Parameter `count`:** a pointer filled in with the number of devices returned, may
be NULL.

**Returns:** a 0 terminated array of device instance IDs or NULL on error; call
SDL_GetError() for more information. This should be freed with
SDL_free() when it is no longer needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L22921).
