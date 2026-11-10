---
title: "SDLContext.RawApi — Method: IconvString"
description: "Exact Method: IconvString contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.154dc45b98364258
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: IconvString

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IconvString`

<a id="api-35819119b23c4ab3"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.IconvString(System.SByte*,System.SByte*,System.SByte*,System.UInt64) 253e7d1d4a5fa2a91b9b783a2400e78e0164fb0a4b2603a4ab28971a918a190a -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.IconvString(sbyte* tocode, sbyte* fromcode, sbyte* inbuf, ulong inbytesleft)
```

Helper function to convert a string's encoding in one call.
This function converts a buffer or string between encodings in one pass.
The string does not need to be NULL-terminated; this function operates on
the number of bytes specified in `inbytesleft` whether there is a NULL
character anywhere in the buffer.
The returned string is owned by the caller, and should be passed to
SDL_free when no longer needed.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_iconv_open

**See also:** SDL_iconv_close

**See also:** SDL_iconv

**Parameter `tocode`:** the character encoding of the output string. Examples are
"UTF-8", "UCS-4", etc.

**Parameter `fromcode`:** the character encoding of data in `inbuf`.

**Parameter `inbuf`:** the string to convert to a different encoding.

**Parameter `inbytesleft`:** the size of the input string _in bytes_.

**Returns:** a new string, converted to the new encoding, or NULL on error.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L24889).
