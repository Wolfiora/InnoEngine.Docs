---
title: "SDLContext.RawApi — Method: Murmur332"
description: "Exact Method: Murmur332 contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c50e24af66b752fb
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Murmur332

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Murmur332`

<a id="api-4ce951a586b54841"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Murmur332(System.Void*,System.UInt64,System.UInt32) 1d6af904c45a3ce56cbcef2f7efde97dce7b777c848c46083e783d46f38fe13b -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.Murmur332(void* data, ulong len, uint seed)
```

Calculate a 32-bit MurmurHash3 value for a block of data.
https://en.wikipedia.org/wiki/MurmurHash
A seed may be specified, which changes the final results consistently, but
this does not work like SDL_crc16 and SDL_crc32: you can't feed a previous
result from this function back into itself as the next seed value to
calculate a hash in chunks; it won't produce the same hash as it would if
the same data was provided in a single call.
If you aren't sure what to provide for a seed, zero is fine. Murmur3 is not
cryptographically secure, so it shouldn't be used for hashing top-secret
data.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `data`:** the data to be hashed.

**Parameter `len`:** the size of data, in bytes.

**Parameter `seed`:** a value that alters the final hash value.

**Returns:** a Murmur3 32-bit hash value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L19657).
