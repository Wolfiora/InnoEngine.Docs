---
title: "SDLContext.RawApi — Method: GetAudioRecordingDevices"
description: "Exact Method: GetAudioRecordingDevices contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1105d040e7b04da6
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetAudioRecordingDevices

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetAudioRecordingDevices`

<a id="api-2b87323f4f8d7a03"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetAudioRecordingDevices(System.Int32*) a1d9abcaffe47c2b00492e61b3a28a0894afcec59ee68c78837f960b73f62be6 -->

```csharp
public uint* Inno.Native.Sdl3.SDLContext.RawApi.GetAudioRecordingDevices(int* count)
```

Get a list of currently-connected audio recording devices.
This returns of list of available devices that record audio, like a
microphone ("recording" devices). If you want devices that play sound,
perhaps to speakers or headphones ("playback" devices), use
SDL_GetAudioPlaybackDevices() instead.
This only returns a list of physical devices; it will not have any device
IDs returned by SDL_OpenAudioDevice().
If this function returns NULL, to signify an error, `*count` will be set to
zero.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_OpenAudioDevice

**See also:** SDL_GetAudioPlaybackDevices

**Parameter `count`:** a pointer filled in with the number of devices returned, may
be NULL.

**Returns:** a 0 terminated array of device instance IDs, or NULL on failure;
call SDL_GetError() for more information. This should be freed
with SDL_free() when it is no longer needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21682).
