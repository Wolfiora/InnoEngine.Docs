---
title: "SDL — Method: SetAudioDeviceGain"
description: "Exact Method: SetAudioDeviceGain contracts in SDL."
uid: api.inno.native.sdl3.127d654132b3ecdc
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: SetAudioDeviceGain

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetAudioDeviceGain`

<a id="api-94f87c8292008fbd"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.SetAudioDeviceGain(System.UInt32,System.Single) 5bd30fb842cad29f9d3c869227197d12cd94057389b71d3c4f27a88f61c8779e -->

```csharp
public static bool Inno.Native.Sdl3.SDL.SetAudioDeviceGain(uint devid, float gain)
```

Change the gain of an audio device.
The gain of a device is its volume; a larger gain means a louder output,
with a gain of zero being silence.
Audio devices default to a gain of 1.0f (no change in output).
Physical devices may not have their gain changed, only logical devices, and
this function will always return false when used on physical devices. While
it might seem attractive to adjust several logical devices at once in this
way, it would allow an app or library to interfere with another portion of
the program's otherwise-isolated devices.
This is applied, along with any per-audiostream gain, during playback to
the hardware, and can be continuously changed to create various effects. On
recording devices, this will adjust the gain before passing the data into
an audiostream; that recording audiostream can then adjust its gain further
when outputting the data elsewhere, if it likes, but that second gain is
not applied until the data leaves the audiostream again.

**Thread safety:** It is safe to call this function from any thread, as it holds
a stream-specific mutex while running.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetAudioDeviceGain

**Parameter `devid`:** the audio device on which to change gain.

**Parameter `gain`:** the gain. 1.0f is no change, 0.0f is silence.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2310).
