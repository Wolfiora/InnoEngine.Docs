---
title: "SDLContext.RawApi — Method: LoadFile"
description: "Exact Method: LoadFile contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ab94e26926cfc5ee
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: LoadFile

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `LoadFile`

<a id="api-a8556d1bc3943674"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.LoadFile(System.SByte*,System.UInt64*) 1aed6b1d4dedc3df8574c45ed9f6ef93946d9713ef0d3679c161a82d7efcdaef -->

```csharp
public void* Inno.Native.Sdl3.SDLContext.RawApi.LoadFile(sbyte* file, ulong* datasize)
```

Load all the data from a file path.
The data is allocated with a zero byte at the end (null terminated) for
convenience. This extra byte is not included in the value reported via
`datasize`.
The data should be freed with SDL_free().

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_LoadFile_IO

**See also:** SDL_SaveFile

**Parameter `file`:** the path to read all available data from.

**Parameter `datasize`:** if not NULL, will store the number of bytes read.

**Returns:** the data or NULL on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L38519).
