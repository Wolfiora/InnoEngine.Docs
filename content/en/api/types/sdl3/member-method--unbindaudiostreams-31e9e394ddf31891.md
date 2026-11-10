---
title: "SDLContext.RawApi — Method: UnbindAudioStreams"
description: "Exact Method: UnbindAudioStreams contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.31e9e394ddf31891
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: UnbindAudioStreams

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UnbindAudioStreams`

<a id="api-02415310a79203e9"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.UnbindAudioStreams(Inno.Native.Sdl3.SDLAudioStream**,System.Int32) f61ed808bcd62d3bf5e06f5b67628dd9b23f60f4ecbef4358d9a4a3966a16ae7 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.UnbindAudioStreams(Inno.Native.Sdl3.SDLAudioStream** streams, int num_streams)
```

Unbind a list of audio streams from their audio devices.
The streams being unbound do not all have to be on the same device. All
streams on the same device will be unbound atomically (data will stop
flowing through all unbound streams on the same device at the same time).
Unbinding a stream that isn't bound to a device is a legal no-op.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_BindAudioStreams

**Parameter `streams`:** an array of audio streams to unbind. Can be NULL or contain
NULL.

**Parameter `num_streams`:** number streams listed in the `streams` array.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L43468).
