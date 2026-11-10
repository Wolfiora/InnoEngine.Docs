---
title: "SDLContext.RawApi — Method: GetAudioStreamQueued"
description: "Exact Method: GetAudioStreamQueued contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.929440b9172f84af
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetAudioStreamQueued

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetAudioStreamQueued`

<a id="api-af396edbab2aa64c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetAudioStreamQueued(Inno.Native.Sdl3.SDLAudioStream*) 2df489f00ac4bea534315f70fa65e5d14d9a1ec885137e16cd96d712fce1af86 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetAudioStreamQueued(Inno.Native.Sdl3.SDLAudioStream* stream)
```

Get the number of bytes currently queued.
This is the number of bytes put into a stream as input, not the number that
can be retrieved as output. Because of several details, it's not possible
to calculate one number directly from the other. If you need to know how
much usable data can be retrieved right now, you should use
SDL_GetAudioStreamAvailable() and not this function.
Note that audio streams can change their input format at any time, even if
there is still data queued in a different format, so the returned byte
count will not necessarily match the number of _sample frames_ available.
Users of this API should be aware of format changes they make when feeding
a stream and plan accordingly.
Queued data is not converted until it is consumed by
SDL_GetAudioStreamData, so this value should be representative of the exact
data that was put into the stream.
If the stream has so much data that it would overflow an int, the return
value is clamped to a maximum value, but no queued data is lost; if there
are gigabytes of data queued, the app might need to read some of it with
SDL_GetAudioStreamData before this function's return value is no longer
clamped.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_PutAudioStreamData

**See also:** SDL_ClearAudioStream

**Parameter `stream`:** the audio stream to query.

**Returns:** the number of bytes queued or -1 on failure; call SDL_GetError()
for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27457).
