---
title: "SDLContext.RawApi — Method: Crc32"
description: "Exact Method: Crc32 contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.eeaac45b6f594f23
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Crc32

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Crc32`

<a id="api-108dd3c4327854d5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Crc32(System.UInt32,System.Void*,System.UInt64) 5eaf3cb4511503ece86da39a13105cf410c30fb70aa3a18a1215498056c86054 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.Crc32(uint crc, void* data, ulong len)
```

Calculate a CRC-32 value.
https://en.wikipedia.org/wiki/Cyclic_redundancy_check
This function can be called multiple times, to stream data to be
checksummed in blocks. Each call must provide the previous CRC-32 return
value to be updated with the next block. The first call to this function
for a set of blocks should pass in a zero CRC value.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `crc`:** the current checksum for this data set, or 0 for a new data set.

**Parameter `data`:** a new block of data to add to the checksum.

**Parameter `len`:** the size, in bytes, of the new block of data.

**Returns:** a CRC-32 checksum value of all blocks in the data set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L46685).
