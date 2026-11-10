---
title: "SDLContext — Method: Isgraph"
description: "Exact Method: Isgraph contracts in SDLContext."
uid: api.inno.native.sdl3.7dcc6818946f533f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Isgraph

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isgraph`

<a id="api-8e2e6ea64cc016fd"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Isgraph(System.Int32) 8a221504219fcac2c4ad05f979eccefe6b191ddb6b52f61fb90ae4fe715a12cc -->

```csharp
public int Inno.Native.Sdl3.SDLContext.Isgraph(int x)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14177).
