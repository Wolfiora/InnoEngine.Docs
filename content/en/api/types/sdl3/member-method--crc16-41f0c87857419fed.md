---
title: "SDLContext.RawApi — Method: Crc16"
description: "Exact Method: Crc16 contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.41f0c87857419fed
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Crc16

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Crc16`

<a id="api-e132a8ebb98736d4"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Crc16(System.UInt16,System.Void*,System.UInt64) 1c0eb22919ed9001a828d5279d1deffb237795edbe472c718c55f20cc79babe1 -->

```csharp
public ushort Inno.Native.Sdl3.SDLContext.RawApi.Crc16(ushort crc, void* data, ulong len)
```

Calculate a CRC-16 value.
https://en.wikipedia.org/wiki/Cyclic_redundancy_check
This function can be called multiple times, to stream data to be
checksummed in blocks. Each call must provide the previous CRC-16 return
value to be updated with the next block. The first call to this function
for a set of blocks should pass in a zero CRC value.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `crc`:** the current checksum for this data set, or 0 for a new data set.

**Parameter `data`:** a new block of data to add to the checksum.

**Parameter `len`:** the size, in bytes, of the new block of data.

**Returns:** a CRC-16 checksum value of all blocks in the data set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18982).
