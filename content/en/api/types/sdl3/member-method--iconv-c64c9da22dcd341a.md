---
title: "SDLContext.RawApi — Method: Iconv"
description: "Exact Method: Iconv contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c64c9da22dcd341a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Iconv

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Iconv`

<a id="api-5cd8b0c80bfc6c5e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Iconv(Inno.Native.Sdl3.SDLIconvDataT*,System.SByte**,System.UInt64*,System.SByte**,System.UInt64*) 0f97c062f64ea343cbe9b5acf0c196521b2978bab46d0450b280ad2deb932c70 -->

```csharp
public ulong Inno.Native.Sdl3.SDLContext.RawApi.Iconv(Inno.Native.Sdl3.SDLIconvDataT* cd, sbyte** inbuf, ulong* inbytesleft, sbyte** outbuf, ulong* outbytesleft)
```

This function converts text between encodings, reading from and writing to
a buffer.
It returns the number of successful conversions on success. On error,
SDL_ICONV_E2BIG is returned when the output buffer is too small, or
SDL_ICONV_EILSEQ is returned when an invalid input sequence is encountered,
or SDL_ICONV_EINVAL is returned when an incomplete input sequence is
encountered.
On exit:
- inbuf will point to the beginning of the next multibyte sequence. On
error, this is the location of the problematic input sequence. On
success, this is the end of the input sequence.
- inbytesleft will be set to the number of bytes left to convert, which
will be 0 on success.
- outbuf will point to the location where to store the next output byte.
- outbytesleft will be set to the number of bytes left in the output
buffer.

**Thread safety:** Do not use the same SDL_iconv_t from two threads at once.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_iconv_open

**See also:** SDL_iconv_close

**See also:** SDL_iconv_string

**Parameter `cd`:** The character set conversion context, created in
SDL_iconv_open().

**Parameter `inbuf`:** Address of variable that points to the first character of the
input sequence.

**Parameter `inbytesleft`:** The number of bytes in the input buffer.

**Parameter `outbuf`:** Address of variable that points to the output buffer.

**Parameter `outbytesleft`:** The number of bytes in the output buffer.

**Returns:** the number of conversions on success, or a negative error code.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L45097).
