---
title: "SDLContext.RawApi — Method: SetAudioStreamFrequencyRatio"
description: "Exact Method: SetAudioStreamFrequencyRatio contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2c70f868fd182589
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetAudioStreamFrequencyRatio

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetAudioStreamFrequencyRatio`

<a id="api-582b23d4237d9c20"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetAudioStreamFrequencyRatio(Inno.Native.Sdl3.SDLAudioStream*,System.Single) b151a4bbaed4334aab3f519b937d3d97b65303cf2be7d8cb42070bcd273be001 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetAudioStreamFrequencyRatio(Inno.Native.Sdl3.SDLAudioStream* stream, float ratio)
```

Change the frequency ratio of an audio stream.
The frequency ratio is used to adjust the rate at which input data is
consumed. Changing this effectively modifies the speed and pitch of the
audio. A value greater than 1.0f will play the audio faster, and at a
higher pitch. A value less than 1.0f will play the audio slower, and at a
lower pitch. 1.0f means play at normal speed.
This is applied during SDL_GetAudioStreamData, and can be continuously
changed to create various effects.

**Thread safety:** It is safe to call this function from any thread, as it holds
a stream-specific mutex while running.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetAudioStreamFrequencyRatio

**See also:** SDL_SetAudioStreamFormat

**Parameter `stream`:** the stream on which the frequency ratio is being changed.

**Parameter `ratio`:** the frequency ratio. 1.0 is normal speed. Must be between 0.01
and 100.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26959).
