---
title: "SDLContext.RawApi — Method: BindAudioStreams"
description: "Exact Method: BindAudioStreams contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.20c13f61bbf7b520
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: BindAudioStreams

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BindAudioStreams`

<a id="api-6d1ef919ceb1fefb"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.BindAudioStreams(System.UInt32,Inno.Native.Sdl3.SDLAudioStream**,System.Int32) ba75bdfe02ae6de3d441820a490009aad99e350b830eaba20d7bf287ebccd56f -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.BindAudioStreams(uint devid, Inno.Native.Sdl3.SDLAudioStream** streams, int num_streams)
```

Bind a list of audio streams to an audio device.
Audio data will flow through any bound streams. For a playback device, data
for all bound streams will be mixed together and fed to the device. For a
recording device, a copy of recorded data will be provided to each bound
stream.
Audio streams can only be bound to an open device. This operation is
atomic--all streams bound in the same call will start processing at the
same time, so they can stay in sync. Also: either all streams will be bound
or none of them will be.
It is an error to bind an already-bound stream; it must be explicitly
unbound first.
Binding a stream to a device will set its output format for playback
devices, and its input format for recording devices, so they match the
device's settings. The caller is welcome to change the other end of the
stream's format at any time with SDL_SetAudioStreamFormat(). If the other
end of the stream's format has never been set (the audio stream was created
with a NULL audio spec), this function will set it to match the device
end's format.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_BindAudioStreams

**See also:** SDL_UnbindAudioStream

**See also:** SDL_GetAudioStreamDevice

**Parameter `devid`:** an audio device to bind a stream to.

**Parameter `streams`:** an array of audio streams to bind.

**Parameter `num_streams`:** number streams listed in the `streams` array.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L45521).
