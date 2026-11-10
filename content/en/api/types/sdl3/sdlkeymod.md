---
title: "SDLKeymod"
description: "Reference for SDLKeymod in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.274d0a98b4a209f2
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLKeymod`

This reference describes `SDLKeymod` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Alt`](#api-a9dd183cd030d4f6) | Field |
| [`Caps`](#api-141ded08fc3c31df) | Field |
| [`Ctrl`](#api-3fe4dbda65b6ad3b) | Field |
| [`Gui`](#api-22adc6cf242a80f3) | Field |
| [`Lalt`](#api-f1eb9d2708ed7354) | Field |
| [`Lctrl`](#api-45c3d714c88333ad) | Field |
| [`Level5`](#api-aa00db96faf598d2) | Field |
| [`Lgui`](#api-705e02533a8ea566) | Field |
| [`Lshift`](#api-9ab2e96cae976a8c) | Field |
| [`Mode`](#api-d8b2beed1b49eec8) | Field |
| [`None`](#api-3e61b3839ae67c8d) | Field |
| [`Num`](#api-a483e898890f5d35) | Field |
| [`Ralt`](#api-389f5b76d4986b59) | Field |
| [`Rctrl`](#api-f626b5a31d2276e2) | Field |
| [`Rgui`](#api-50356326921e0afc) | Field |
| [`Rshift`](#api-fcf1b9c28c3bab00) | Field |
| [`Scroll`](#api-b931cc7864273768) | Field |
| [`Shift`](#api-95f3f063ed7f8e3f) | Field |

## Type declaration

<a id="api-274d0a98b4a209f2"></a>
<!-- api: T:Inno.Native.Sdl3.SDLKeymod 3bd9f4f37c8b66f187165dbc26a42d4c2b864aed3686a5d6313256bffa1e2d0c -->

```csharp
public enum Inno.Native.Sdl3.SDLKeymod : ushort
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57867).

## `Alt`

<a id="api-a9dd183cd030d4f6"></a>
<!-- api: F:Inno.Native.Sdl3.SDLKeymod.Alt 71219b14d2d668e315cb2e1580affa0503c9203ce9f63f35bebc1f55e39ceb6b -->

```csharp
Inno.Native.Sdl3.SDLKeymod.Alt = Inno.Native.Sdl3.SDLKeymod.Lalt | Inno.Native.Sdl3.SDLKeymod.Ralt
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57885).

## `Caps`

<a id="api-141ded08fc3c31df"></a>
<!-- api: F:Inno.Native.Sdl3.SDLKeymod.Caps d17b5e12bf73bacd7f52af3a3eb7c61c5cf9a53bff6a771b3826c2737e21bd7b -->

```csharp
Inno.Native.Sdl3.SDLKeymod.Caps = 8192
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57880).

## `Ctrl`

<a id="api-3fe4dbda65b6ad3b"></a>
<!-- api: F:Inno.Native.Sdl3.SDLKeymod.Ctrl 423682316aa3ce5336190c8b5820bb0462d7a791640f081198eec4a450e3636e -->

```csharp
Inno.Native.Sdl3.SDLKeymod.Ctrl = Inno.Native.Sdl3.SDLKeymod.Lctrl | Inno.Native.Sdl3.SDLKeymod.Rctrl
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57883).

## `Gui`

<a id="api-22adc6cf242a80f3"></a>
<!-- api: F:Inno.Native.Sdl3.SDLKeymod.Gui 622ab541466d4ac39113a05e1f5e2cf7d7069d1c287aadf710d33b3e161c9de1 -->

```csharp
Inno.Native.Sdl3.SDLKeymod.Gui = Inno.Native.Sdl3.SDLKeymod.Lgui | Inno.Native.Sdl3.SDLKeymod.Rgui
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57886).

## `Lalt`

<a id="api-f1eb9d2708ed7354"></a>
<!-- api: F:Inno.Native.Sdl3.SDLKeymod.Lalt 47c856c780fa2c1731787b5c01a7424c08470038e665695a9b0269a574644181 -->

```csharp
Inno.Native.Sdl3.SDLKeymod.Lalt = 256
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57875).

## `Lctrl`

<a id="api-45c3d714c88333ad"></a>
<!-- api: F:Inno.Native.Sdl3.SDLKeymod.Lctrl ee9d2ec9ded0be21b6486db684497e8ff1eb02f302b6c2d0f898de08f6c58933 -->

```csharp
Inno.Native.Sdl3.SDLKeymod.Lctrl = 64
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57873).

## `Level5`

<a id="api-aa00db96faf598d2"></a>
<!-- api: F:Inno.Native.Sdl3.SDLKeymod.Level5 553d8be5f6ef58135171b6bd7ab2131b9abef197ed8b681b2c86bbbf49e8f979 -->

```csharp
Inno.Native.Sdl3.SDLKeymod.Level5 = 4
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57872).

## `Lgui`

<a id="api-705e02533a8ea566"></a>
<!-- api: F:Inno.Native.Sdl3.SDLKeymod.Lgui 55f8beb25e71a880d716d9cbaed4609b87a30706ff465f94bfff5f212b55d8c0 -->

```csharp
Inno.Native.Sdl3.SDLKeymod.Lgui = 1024
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57877).

## `Lshift`

<a id="api-9ab2e96cae976a8c"></a>
<!-- api: F:Inno.Native.Sdl3.SDLKeymod.Lshift d133c477920faeffe297b8079bc5f23711ffc756098b3d4bea5a3ada840b36b7 -->

```csharp
Inno.Native.Sdl3.SDLKeymod.Lshift = 1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57870).

## `Mode`

<a id="api-d8b2beed1b49eec8"></a>
<!-- api: F:Inno.Native.Sdl3.SDLKeymod.Mode 4b5752ba5d0c5da36a7cdff76507f57e43c44177e5b451fd2b2439bc2fd6c117 -->

```csharp
Inno.Native.Sdl3.SDLKeymod.Mode = 16384
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57881).

## `None`

<a id="api-3e61b3839ae67c8d"></a>
<!-- api: F:Inno.Native.Sdl3.SDLKeymod.None e9aab3d1f6005529c3127ee6cdd4df5367fe814c1521389a81227497b1703fb9 -->

```csharp
Inno.Native.Sdl3.SDLKeymod.None = 0
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57869).

## `Num`

<a id="api-a483e898890f5d35"></a>
<!-- api: F:Inno.Native.Sdl3.SDLKeymod.Num e20c3b2d41e2399dd37382a15bb87c7478644d1058c8ac7ad6563f5982b11dfd -->

```csharp
Inno.Native.Sdl3.SDLKeymod.Num = 4096
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57879).

## `Ralt`

<a id="api-389f5b76d4986b59"></a>
<!-- api: F:Inno.Native.Sdl3.SDLKeymod.Ralt e33cc3413bec8b201b237bbf79a871467251c6e6f3ae6a9deeadf8e7a21256fc -->

```csharp
Inno.Native.Sdl3.SDLKeymod.Ralt = 512
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57876).

## `Rctrl`

<a id="api-f626b5a31d2276e2"></a>
<!-- api: F:Inno.Native.Sdl3.SDLKeymod.Rctrl 8f0571355e16eb919a675cb2131b13d9c84da6b8422776c14d360eb7ca1414c2 -->

```csharp
Inno.Native.Sdl3.SDLKeymod.Rctrl = 128
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57874).

## `Rgui`

<a id="api-50356326921e0afc"></a>
<!-- api: F:Inno.Native.Sdl3.SDLKeymod.Rgui 42e0d4d3f22c66a661d4d585611f3a53447c91413faf30d9bb74eff888f27254 -->

```csharp
Inno.Native.Sdl3.SDLKeymod.Rgui = 2048
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57878).

## `Rshift`

<a id="api-fcf1b9c28c3bab00"></a>
<!-- api: F:Inno.Native.Sdl3.SDLKeymod.Rshift 3953bcd5331f27c85dbcd93c66d5825a3e7e4ebd7096ac3d71fee37e82aa1a50 -->

```csharp
Inno.Native.Sdl3.SDLKeymod.Rshift = 2
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57871).

## `Scroll`

<a id="api-b931cc7864273768"></a>
<!-- api: F:Inno.Native.Sdl3.SDLKeymod.Scroll fd5c875c59b0c5658ad0f592f49d509f1ba5ccab7923e7f38dcbecd674d72818 -->

```csharp
Inno.Native.Sdl3.SDLKeymod.Scroll = 32768
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57882).

## `Shift`

<a id="api-95f3f063ed7f8e3f"></a>
<!-- api: F:Inno.Native.Sdl3.SDLKeymod.Shift 9a0298d6b7170f2c1c5c3d287f4ed2c7f119464dc01c8333022b84cd40bfd0a5 -->

```csharp
Inno.Native.Sdl3.SDLKeymod.Shift = Inno.Native.Sdl3.SDLKeymod.Lshift | Inno.Native.Sdl3.SDLKeymod.Rshift
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57884).
