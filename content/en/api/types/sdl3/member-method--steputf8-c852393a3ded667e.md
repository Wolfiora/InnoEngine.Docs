---
title: "SDLContext.RawApi — Method: StepUtf8"
description: "Exact Method: StepUtf8 contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c852393a3ded667e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: StepUtf8

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `StepUtf8`

<a id="api-19a735db0c9ff5c4"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.StepUtf8(System.SByte**,System.UInt64*) 17f4c4a66ed24e569fb9febeea2f581f4d00744ccf614829d118ee28c0a5aa22 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.StepUtf8(sbyte** pstr, ulong* pslen)
```

Decode a UTF-8 string, one Unicode codepoint at a time.
This will return the first Unicode codepoint in the UTF-8 encoded string in
`*pstr`, and then advance `*pstr` past any consumed bytes before returning.
It will not access more than `*pslen` bytes from the string. `*pslen` will
be adjusted, as well, subtracting the number of bytes consumed.
`pslen` is allowed to be NULL, in which case the string _must_ be
NULL-terminated, as the function will blindly read until it sees the NULL
char.
if `*pslen` is zero, it assumes the end of string is reached and returns a
zero codepoint regardless of the contents of the string buffer.
If the resulting codepoint is zero (a NULL terminator), or `*pslen` is
zero, it will not advance `*pstr` or `*pslen` at all.
Generally this function is called in a loop until it returns zero,
adjusting its parameters each iteration.
If an invalid UTF-8 sequence is encountered, this function returns
SDL_INVALID_UNICODE_CODEPOINT and advances the string/length by one byte
(which is to say, a multibyte sequence might produce several
SDL_INVALID_UNICODE_CODEPOINT returns before it syncs to the next valid
UTF-8 sequence).
Several things can generate invalid UTF-8 sequences, including overlong
encodings, the use of UTF-16 surrogate values, and truncated data. Please
refer to
[RFC3629](https://www.ietf.org/rfc/rfc3629.txt)
for details.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `pstr`:** a pointer to a UTF-8 string pointer to be read and adjusted.

**Parameter `pslen`:** a pointer to the number of bytes in the string, to be read and
adjusted. NULL is allowed.

**Returns:** the first Unicode codepoint in the string.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L45777).
