---
title: "SDLContext.RawApi — Method: OpenAudioDevice"
description: "Exact Method: OpenAudioDevice contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a7516c8ba9b7be3e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: OpenAudioDevice

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `OpenAudioDevice`

<a id="api-6ce5ce73cd1da0f7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.OpenAudioDevice(System.UInt32,Inno.Native.Sdl3.SDLAudioSpec*) ae006ca98a8e9fb9c309e0dd54022cfba0c8405b54adb2999228329505643acd -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.OpenAudioDevice(uint devid, Inno.Native.Sdl3.SDLAudioSpec* spec)
```

Open a specific audio device.
You can open both playback and recording devices through this function.
Playback devices will take data from bound audio streams, mix it, and send
it to the hardware. Recording devices will feed any bound audio streams
with a copy of any incoming data.
An opened audio device starts out with no audio streams bound. To start
audio playing, bind a stream and supply audio data to it. Unlike SDL2,
there is no audio callback; you only bind audio streams and make sure they
have data flowing into them (however, you can simulate SDL2's semantics
fairly closely by using SDL_OpenAudioDeviceStream instead of this
function).
If you don't care about opening a specific device, pass a `devid` of either
`SDL_AUDIO_DEVICE_DEFAULT_PLAYBACK` or
`SDL_AUDIO_DEVICE_DEFAULT_RECORDING`. In this case, SDL will try to pick
the most reasonable default, and may also switch between physical devices
seamlessly later, if the most reasonable default changes during the
lifetime of this opened device (user changed the default in the OS's system
preferences, the default got unplugged so the system jumped to a new
default, the user plugged in headphones on a mobile device, etc). Unless
you have a good reason to choose a specific device, this is probably what
you want.
You may request a specific format for the audio device, but there is no
promise the device will honor that request for several reasons. As such,
it's only meant to be a hint as to what data your app will provide. Audio
streams will accept data in whatever format you specify and manage
conversion for you as appropriate. SDL_GetAudioDeviceFormat can tell you
the preferred format for the device before opening and the actual format
the device is using after opening.
It's legal to open the same device ID more than once; each successful open
will generate a new logical SDL_AudioDeviceID that is managed separately
from others on the same physical device. This allows libraries to open a
device separately from the main app and bind its own streams without
conflicting.
It is also legal to open a device ID returned by a previous call to this
function; doing so just creates another logical device on the same physical
device. This may be useful for making logical groupings of audio streams.
This function returns the opened device ID on success. This is a new,
unique SDL_AudioDeviceID that represents a logical device.
Some backends might offer arbitrary devices (for example, a networked audio
protocol that can connect to an arbitrary server). For these, as a change
from SDL2, you should open a default device ID and use an SDL hint to
specify the target if you care, or otherwise let the backend figure out a
reasonable default. Most backends don't offer anything like this, and often
this would be an end user setting an environment variable for their custom
need, and not something an application should specifically manage.
When done with an audio device, possibly at the end of the app's life, one
should call SDL_CloseAudioDevice() on the returned device id.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CloseAudioDevice

**See also:** SDL_GetAudioDeviceFormat

**Parameter `devid`:** the device instance id to open, or
SDL_AUDIO_DEVICE_DEFAULT_PLAYBACK or
SDL_AUDIO_DEVICE_DEFAULT_RECORDING for the most reasonable
default device.

**Parameter `spec`:** the requested device configuration. Can be NULL to use
reasonable defaults.

**Returns:** the device ID on success or 0 on failure; call SDL_GetError() for
more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L30475).
