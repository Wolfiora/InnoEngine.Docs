---
title: "SDLContext.RawApi — Method: RegisterEvents"
description: "Exact Method: RegisterEvents contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.bf14f3254fce7ead
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RegisterEvents

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RegisterEvents`

<a id="api-c7d738e16fb63f21"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RegisterEvents(System.Int32) a069c21ca812b5fce29a5dd513e66e97b0068e9ea54bd57ff5fa3b437a4c1820 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.RegisterEvents(int numevents)
```

Allocate a set of user-defined events, and return the beginning event
number for that set of events.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_PushEvent

**Parameter `numevents`:** the number of events to be allocated.

**Returns:** the beginning event number, or 0 if numevents is invalid or if
there are not enough user-defined events left.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L30333).
