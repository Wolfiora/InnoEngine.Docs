---
title: "SDLContext.RawApi — Method: StepBackUtf8"
description: "Exact Method: StepBackUtf8 contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d1b7874841f9df6f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: StepBackUtf8

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `StepBackUtf8`

<a id="api-77295a4f80c1521a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.StepBackUtf8(System.SByte*,System.SByte**) 9afc57e95db2185d3f190fed30f6c0396545c6b3c9d349f6f084a2dac56d8402 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.StepBackUtf8(sbyte* start, sbyte** pstr)
```

Decode a UTF-8 string in reverse, one Unicode codepoint at a time.
This will go to the start of the previous Unicode codepoint in the string,
move `*pstr` to that location and return that codepoint.
If `*pstr` is already at the start of the string), it will not advance
`*pstr` at all.
Generally this function is called in a loop until it returns zero,
adjusting its parameter each iteration.
If an invalid UTF-8 sequence is encountered, this function returns
SDL_INVALID_UNICODE_CODEPOINT.
Several things can generate invalid UTF-8 sequences, including overlong
encodings, the use of UTF-16 surrogate values, and truncated data. Please
refer to
[RFC3629](https://www.ietf.org/rfc/rfc3629.txt)
for details.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `start`:** a pointer to the beginning of the UTF-8 string.

**Parameter `pstr`:** a pointer to a UTF-8 string pointer to be read and adjusted.

**Returns:** the previous Unicode codepoint in the string.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39806).
