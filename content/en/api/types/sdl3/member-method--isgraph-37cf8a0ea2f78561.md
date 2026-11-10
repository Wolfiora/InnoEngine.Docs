---
title: "SDL — Method: Isgraph"
description: "Exact Method: Isgraph contracts in SDL."
uid: api.inno.native.sdl3.37cf8a0ea2f78561
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Isgraph

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isgraph`

<a id="api-b835d5fa9f64239a"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Isgraph(System.Int32) 16385fbc70a7862bcbc4388c18877d18d02dc65f914b784eae6df341864034f6 -->

```csharp
public static int Inno.Native.Sdl3.SDL.Isgraph(int x)
```

Report if a character is any "printable" except space.
Be advised that "printable" has a definition that goes back to text
terminals from the dawn of computing, making this a sort of special case
function that is not suitable for Unicode (or most any) text management.
**WARNING**: Regardless of system locale, this is equivalent to
`(SDL_isprint(x))
&
&
((x) != ' ')`.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_isprint

**Parameter `x`:** character value to check.

**Returns:** non-zero if x falls within the character class, zero otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2331).
