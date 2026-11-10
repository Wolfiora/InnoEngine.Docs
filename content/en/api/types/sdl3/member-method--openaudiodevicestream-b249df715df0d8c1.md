---
title: "SDLContext.RawApi — Method: OpenAudioDeviceStream"
description: "Exact Method: OpenAudioDeviceStream contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b249df715df0d8c1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: OpenAudioDeviceStream

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `OpenAudioDeviceStream`

<a id="api-833ae386b3c656cc"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.OpenAudioDeviceStream(System.UInt32,Inno.Native.Sdl3.SDLAudioSpec*,,System.Void*) 72d4f9feaa76e18e874e2e516d5d14dcefcde5d6287ffeb438df4a448552cab3 -->

```csharp
public Inno.Native.Sdl3.SDLAudioStream* Inno.Native.Sdl3.SDLContext.RawApi.OpenAudioDeviceStream(uint devid, Inno.Native.Sdl3.SDLAudioSpec* spec, delegate* unmanaged[Cdecl]<void*, Inno.Native.Sdl3.SDLAudioStream*, int, int, void> callback, void* userdata)
```

Convenience function for straightforward audio init for the common case.
If all your app intends to do is provide a single source of PCM audio, this
function allows you to do all your audio setup in a single call.
This is also intended to be a clean means to migrate apps from SDL2.
This function will open an audio device, create a stream and bind it.
Unlike other methods of setup, the audio device will be closed when this
stream is destroyed, so the app can treat the returned SDL_AudioStream as
the only object needed to manage audio playback.
Also unlike other functions, the audio device begins paused. This is to map
more closely to SDL2-style behavior, since there is no extra step here to
bind a stream to begin audio flowing. The audio device should be resumed
with SDL_ResumeAudioStreamDevice().
This function works with both playback and recording devices.
The `spec` parameter represents the app's side of the audio stream. That
is, for recording audio, this will be the output format, and for playing
audio, this will be the input format. If spec is NULL, the system will
choose the format, and the app can use SDL_GetAudioStreamFormat() to obtain
this information later.
If you don't care about opening a specific audio device, you can (and
probably _should_), use SDL_AUDIO_DEVICE_DEFAULT_PLAYBACK for playback and
SDL_AUDIO_DEVICE_DEFAULT_RECORDING for recording.
One can optionally provide a callback function; if NULL, the app is
expected to queue audio data for playback (or unqueue audio data if
capturing). Otherwise, the callback will begin to fire once the device is
unpaused.
Destroying the returned stream with SDL_DestroyAudioStream will also close
the audio device associated with this stream.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetAudioStreamDevice

**See also:** SDL_ResumeAudioStreamDevice

**Parameter `devid`:** an audio device to open, or SDL_AUDIO_DEVICE_DEFAULT_PLAYBACK
or SDL_AUDIO_DEVICE_DEFAULT_RECORDING.

**Parameter `spec`:** the audio stream's data format. Can be NULL.

**Parameter `callback`:** a callback where the app will provide new data for
playback, or receive new data for recording. Can be NULL,
in which case the app will need to call
SDL_PutAudioStreamData or SDL_GetAudioStreamData as
necessary.

**Parameter `userdata`:** app-controlled pointer passed to callback. Can be NULL.
Ignored if callback is NULL.

**Returns:** an audio stream on success, ready to use, or NULL on failure; call
SDL_GetError() for more information. When done with this stream,
call SDL_DestroyAudioStream to free resources and close the
device.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L49510).
