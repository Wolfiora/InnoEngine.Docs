---
title: "SDLContext.RawApi — Method: GetEventDescription"
description: "Exact Method: GetEventDescription contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d69c855fc8d0028b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetEventDescription

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetEventDescription`

<a id="api-5e11eda2bc603d79"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetEventDescription(Inno.Native.Sdl3.SDLEvent*,System.SByte*,System.Int32) 2966b012d1647a76549db94d5e12bf25672819e5e908cd431a726ca23f4167a9 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetEventDescription(Inno.Native.Sdl3.SDLEvent* @event, sbyte* buf, int buflen)
```

Generate an English description of an event.
This will fill `buf` with a null-terminated string that might look
something like this:
```
SDL_EVENT_MOUSE_MOTION (timestamp=1140256324 windowid=2 which=0 state=0 x=492.99 y=139.09 xrel=52 yrel=6)
```
The exact format of the string is not guaranteed; it is intended for
logging purposes, to be read by a human, and not parsed by a computer.
The returned value follows the same rules as SDL_snprintf(): `buf` will
always be NULL-terminated (unless `buflen` is zero), and will be truncated
if `buflen` is too small. The return code is the number of bytes needed for
the complete string, not counting the NULL-terminator, whether the string
was truncated or not. Unlike SDL_snprintf(), though, this function never
returns -1.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.4.0.

**Parameter `event`:** an event to describe. May be NULL.

**Parameter `buf`:** the buffer to fill with the description string. May be NULL.

**Parameter `buflen`:** the maximum bytes that can be written to `buf`.

**Returns:** number of bytes needed for the full string, not counting the
null-terminator byte.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L34469).
