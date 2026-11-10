---
title: "SDLContext — Method: Isprint"
description: "Exact Method: Isprint contracts in SDLContext."
uid: api.inno.native.sdl3.1fa158f0a05e8948
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Isprint

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isprint`

<a id="api-56718e49f9261d9e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Isprint(System.Int32) 07531c1930df1c9d83cea915f2a125e2568edeefa573c62cc1ca08d88e642b3f -->

```csharp
public int Inno.Native.Sdl3.SDLContext.Isprint(int x)
```

Report if a character is "printable".
Be advised that "printable" has a definition that goes back to text
terminals from the dawn of computing, making this a sort of special case
function that is not suitable for Unicode (or most any) text management.
**WARNING**: Regardless of system locale, this will only treat ASCII values
' ' (0x20) through '~' (0x7E) as true.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `x`:** character value to check.

**Returns:** non-zero if x falls within the character class, zero otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L11899).
