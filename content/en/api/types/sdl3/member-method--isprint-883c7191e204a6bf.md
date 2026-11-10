---
title: "SDLContext.RawApi — Method: Isprint"
description: "Exact Method: Isprint contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.883c7191e204a6bf
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Isprint

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isprint`

<a id="api-1b2918c109f17214"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Isprint(System.Int32) 96f961cb266af32243d39486c29b2fdae8ed8b7131ee9e7835a1fe244a541e7e -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Isprint(int x)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L19394).
