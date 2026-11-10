---
title: "SDLContext.RawApi — Method: SetPointerPropertyWithCleanup"
description: "Exact Method: SetPointerPropertyWithCleanup contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.04e3022d6271f6ec
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetPointerPropertyWithCleanup

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetPointerPropertyWithCleanup`

<a id="api-04cd94b864bad15c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetPointerPropertyWithCleanup(System.UInt32,System.SByte*,System.Void*,,System.Void*) a7042ad13f14801392de039916cb30a6a96afb4c20914efec5c14a5870c0dc54 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetPointerPropertyWithCleanup(uint props, sbyte* name, void* value, delegate* unmanaged[Cdecl]<void*, void*, void> cleanup, void* userdata)
```

Set a pointer property in a group of properties with a cleanup function
that is called when the property is deleted.
The cleanup function is also called if setting the property fails for any
reason.
For simply setting basic data types, like numbers, bools, or strings, use
SDL_SetNumberProperty, SDL_SetBooleanProperty, or SDL_SetStringProperty
instead, as those functions will handle cleanup on your behalf. This
function is only for more complex, custom data.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetPointerProperty

**See also:** SDL_SetPointerProperty

**See also:** SDL_CleanupPropertyCallback

**Parameter `props`:** the properties to modify.

**Parameter `name`:** the name of the property to modify.

**Parameter `value`:** the new value of the property, or NULL to delete the property.

**Parameter `cleanup`:** the function to call when this property is deleted, or NULL
if no cleanup is necessary.

**Parameter `userdata`:** a pointer that is passed to the cleanup function.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L44528).
