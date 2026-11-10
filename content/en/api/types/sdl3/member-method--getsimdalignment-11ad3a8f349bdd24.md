---
title: "SDL — Method: GetSimdAlignment"
description: "Exact Method: GetSimdAlignment contracts in SDL."
uid: api.inno.native.sdl3.11ad3a8f349bdd24
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetSimdAlignment

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSimdAlignment`

<a id="api-0dffe258eacc5c3c"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetSimdAlignment adf31192bdc51114bab80f97afa1c971b7f0d12545eaabad6f97efaabf5f5c9a -->

```csharp
public static ulong Inno.Native.Sdl3.SDL.GetSimdAlignment()
```

Report the alignment this system needs for SIMD allocations.
This will return the minimum number of bytes to which a pointer must be
aligned to be compatible with SIMD instructions on the current machine. For
example, if the machine supports SSE only, it will return 16, but if it
supports AVX-512F, it'll return 64 (etc). This only reports values for
instruction sets SDL knows about, so if your SDL build doesn't have
SDL_HasAVX512F(), then it might return 16 for the SSE support it sees and
not 64 for the AVX-512 instructions that exist but SDL doesn't know about.
Plan accordingly.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_aligned_alloc

**See also:** SDL_aligned_free

**Returns:** the alignment in bytes needed for available, known SIMD
instructions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3974).
