---
title: "SDLContext.RawApi — Method: SetModState"
description: "Exact Method: SetModState contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f0a9d3b41bb77842
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetModState

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetModState`

<a id="api-a7ebfbc17a0b4923"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetModState(System.UInt16) 3ec99a374a565b418cb917814b70b3e5002d2820c951b79995af0dc78014dbf3 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.SetModState(ushort modstate)
```

Set the current key modifier state for the keyboard.
The inverse of SDL_GetModState(), SDL_SetModState() allows you to impose
modifier key states on your application. Simply pass your desired modifier
states into `modstate`. This value may be a bitwise, OR'd combination of
SDL_Keymod values.
This does not change the keyboard state, only the key modifier flags that
SDL reports.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetModState

**Parameter `modstate`:** the desired SDL_Keymod for the keyboard.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L44280).
