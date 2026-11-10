---
title: "SDLContext.RawApi — Method: GetHint"
description: "Exact Method: GetHint contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a0593d3cef8f004b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetHint

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetHint`

<a id="api-f4f9953aab09ce7f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetHint(System.SByte*) ffdeefb5be96cc252af1df9663892c6ae649e54feee6838d186c4e8551b8aacf -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetHint(sbyte* name)
```

Get the value of a hint.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetHint

**See also:** SDL_SetHintWithPriority

**Parameter `name`:** the hint to query.

**Returns:** the string value of a hint or NULL if the hint isn't set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26158).
