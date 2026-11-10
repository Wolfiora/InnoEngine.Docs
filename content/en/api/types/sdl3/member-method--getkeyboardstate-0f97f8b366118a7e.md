---
title: "SDLContext.RawApi — Method: GetKeyboardState"
description: "Exact Method: GetKeyboardState contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.0f97f8b366118a7e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetKeyboardState

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetKeyboardState`

<a id="api-da295e85bcbbb1c6"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetKeyboardState(System.Int32*) c782663fbbca90e62e233563cea555fc54c314186b8c65cbbb4f74d529a6ce05 -->

```csharp
public byte* Inno.Native.Sdl3.SDLContext.RawApi.GetKeyboardState(int* numkeys)
```

Get a snapshot of the current state of the keyboard.
The pointer returned is a pointer to an internal SDL array. It will be
valid for the whole lifetime of the application and should not be freed by
the caller.
A array element with a value of true means that the key is pressed and a
value of false means that it is not. Indexes into this array are obtained
by using SDL_Scancode values.
Use SDL_PumpEvents() to update the state array.
This function gives you the current state after all events have been
processed, so if a key or button has been pressed and released before you
process events, then the pressed state will never show up in the
SDL_GetKeyboardState() calls.
Note: This function doesn't take into account whether shift has been
pressed or not.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_PumpEvents

**See also:** SDL_ResetKeyboard

**Parameter `numkeys`:** if non-NULL, receives the length of the returned array.

**Returns:** a pointer to an array of key states.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L45879).
