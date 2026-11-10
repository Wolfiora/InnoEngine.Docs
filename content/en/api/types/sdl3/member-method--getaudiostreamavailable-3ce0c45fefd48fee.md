---
title: "SDLContext.RawApi — Method: GetAudioStreamAvailable"
description: "Exact Method: GetAudioStreamAvailable contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.3ce0c45fefd48fee
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetAudioStreamAvailable

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetAudioStreamAvailable`

<a id="api-c15f86caabc1f058"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetAudioStreamAvailable(Inno.Native.Sdl3.SDLAudioStream*) 1414137b51bf978eab5e0c509b3bda0a01ac36157188bcc6ebe47f72ca07207b -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetAudioStreamAvailable(Inno.Native.Sdl3.SDLAudioStream* stream)
```

Get the number of converted/resampled bytes available.
The stream may be buffering data behind the scenes until it has enough to
resample correctly, so this number might be lower than what you expect, or
even be zero. Add more data or flush the stream if you need the data now.
If the stream has so much data that it would overflow an int, the return
value is clamped to a maximum value, but no queued data is lost; if there
are gigabytes of data queued, the app might need to read some of it with
SDL_GetAudioStreamData before this function's return value is no longer
clamped.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetAudioStreamData

**See also:** SDL_PutAudioStreamData

**Parameter `stream`:** the audio stream to query.

**Returns:** the number of converted/resampled bytes available or -1 on
failure; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L20458).
