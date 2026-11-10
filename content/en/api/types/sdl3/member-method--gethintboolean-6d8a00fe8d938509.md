---
title: "SDLContext.RawApi — Method: GetHintBoolean"
description: "Exact Method: GetHintBoolean contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6d8a00fe8d938509
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetHintBoolean

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetHintBoolean`

<a id="api-ed5def6c916094cf"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetHintBoolean(System.SByte*,System.Byte) 440e20fd378b632a2dda7cebd3540c106285890efa5f8a5fca40926636093846 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetHintBoolean(sbyte* name, byte default_value)
```

Get the boolean value of a hint variable.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetHint

**See also:** SDL_SetHint

**Parameter `name`:** the name of the hint to get the boolean value from.

**Parameter `default_value`:** the value to return if the hint does not exist.

**Returns:** the boolean value of a hint or the provided default value if the
hint does not exist.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52159).
