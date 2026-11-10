---
title: "SDLContext.RawApi — Method: SetAudioPostmixCallback"
description: "Exact Method: SetAudioPostmixCallback contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.28c9b904eebaf718
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetAudioPostmixCallback

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetAudioPostmixCallback`

<a id="api-e144d7352e9601b1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetAudioPostmixCallback(System.UInt32,,System.Void*) aeb30faa4f5f6bb2571f557d038397d04a792df88ce83f7f647830726af6e358 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetAudioPostmixCallback(uint devid, delegate* unmanaged[Cdecl]<void*, Inno.Native.Sdl3.SDLAudioSpec*, float*, int, void> callback, void* userdata)
```

Set a callback that fires when data is about to be fed to an audio device.
This is useful for accessing the final mix, perhaps for writing a
visualizer or applying a final effect to the audio data before playback.
The buffer is the final mix of all bound audio streams on an opened device;
this callback will fire regularly for any device that is both opened and
unpaused. If there is no new data to mix, either because no streams are
bound to the device or all the streams are empty, this callback will still
fire with the entire buffer set to silence.
This callback is allowed to make changes to the data; the contents of the
buffer after this call is what is ultimately passed along to the hardware.
The callback is always provided the data in float format (values from -1.0f
to 1.0f), but the number of channels or sample rate may be different than
the format the app requested when opening the device; SDL might have had to
manage a conversion behind the scenes, or the playback might have jumped to
new physical hardware when a system default changed, etc. These details may
change between calls. Accordingly, the size of the buffer might change
between calls as well.
This callback can run at any time, and from any thread; if you need to
serialize access to your app's data, you should provide and use a mutex or
other synchronization device.
All of this to say: there are specific needs this callback can fulfill, but
it is not the simplest interface. Apps should generally provide audio in
their preferred format through an SDL_AudioStream and let SDL handle the
difference.
This function is extremely time-sensitive; the callback should do the least
amount of work possible and return as quickly as it can. The longer the
callback runs, the higher the risk of audio dropouts or other problems.
This function will block until the audio device is in between iterations,
so any existing callback that might be running will finish before this
function sets the new callback and returns.
Setting a NULL callback function disables any previously-set callback.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `devid`:** the ID of an opened audio device.

**Parameter `callback`:** a callback function to be called. Can be NULL.

**Parameter `userdata`:** app-controlled pointer passed to callback. Can be NULL.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L19296).
