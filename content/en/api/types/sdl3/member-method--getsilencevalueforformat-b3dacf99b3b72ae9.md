---
title: "SDL — Method: GetSilenceValueForFormat"
description: "Exact Method: GetSilenceValueForFormat contracts in SDL."
uid: api.inno.native.sdl3.b3dacf99b3b72ae9
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetSilenceValueForFormat

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSilenceValueForFormat`

<a id="api-72985eff517dfa91"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetSilenceValueForFormat(Inno.Native.Sdl3.SDLAudioFormat) bd583377b3e8d6d0c121f4535cb02fb6e3f012e1b26560739572490217d2aac7 -->

```csharp
public static int Inno.Native.Sdl3.SDL.GetSilenceValueForFormat(Inno.Native.Sdl3.SDLAudioFormat format)
```

Get the appropriate memset value for silencing an audio format.
The value returned by this function can be used as the second argument to
memset (or SDL_memset) to set an audio buffer in a specific format to
silence.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `format`:** the audio data format to query.

**Returns:** a byte value that can be passed to memset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2917).
