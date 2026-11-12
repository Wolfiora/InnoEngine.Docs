---
title: "UiEventType"
description: "Reference for UiEventType in Inno.UI."
uid: api.inno.ui.runtime-script.5c9de568c600db48
kind: api
owners:
  - Inno.UI
apiSurface: runtime-script
contracts:
  - project.inno-ui#document-and-frame-contract
  - manual.scripting.use-script-api
---
# `UiEventType`

This reference describes `UiEventType` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Blur`](#api-e1ecdcdefa9b9c56) | Field |
| [`Change`](#api-2236103b30165ff6) | Field |
| [`Click`](#api-49a461bbd4e60647) | Field |
| [`Focus`](#api-aebce470385c8e82) | Field |
| [`MouseEnter`](#api-0d7143a2e40160ba) | Field |
| [`MouseLeave`](#api-b19aae3f6eb42fbf) | Field |
| [`Submit`](#api-93a8cb4e57dac78c) | Field |

## Type declaration

<a id="api-5c9de568c600db48"></a>
<!-- api: T:InnoEngine.UI.UiEventType dd5767ad1c1318d95dbd6a928bd5929aef89ba83a6dfc0d1111bb06643534306 -->

```csharp
public enum InnoEngine.UI.UiEventType : int
```

Identifies one document event made visible to game code.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L194).

## `Blur`

<a id="api-e1ecdcdefa9b9c56"></a>
<!-- api: F:InnoEngine.UI.UiEventType.Blur 1166a6f401a4f1ad09c50422004848052d27af64a9a6ae3d55514cea46402737 -->

```csharp
InnoEngine.UI.UiEventType.Blur = 4
```

The target lost focus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L215).

## `Change`

<a id="api-2236103b30165ff6"></a>
<!-- api: F:InnoEngine.UI.UiEventType.Change c0a1dd14939de75bc022e16e1200921501fb4499494a14237031dc9d745e398a -->

```csharp
InnoEngine.UI.UiEventType.Change = 1
```

The target value changed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L203).

## `Click`

<a id="api-49a461bbd4e60647"></a>
<!-- api: F:InnoEngine.UI.UiEventType.Click bb5f101b9616eaa8dc70523cd99568b52f3c2cd2f4217fbe0d58179e039e5bc8 -->

```csharp
InnoEngine.UI.UiEventType.Click = 0
```

The target was clicked.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L199).

## `Focus`

<a id="api-aebce470385c8e82"></a>
<!-- api: F:InnoEngine.UI.UiEventType.Focus 03014fe58e9759b18c3eb3d470ecce27c7aa4936df455dadac906f0b81a717cd -->

```csharp
InnoEngine.UI.UiEventType.Focus = 3
```

The target gained focus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L211).

## `MouseEnter`

<a id="api-0d7143a2e40160ba"></a>
<!-- api: F:InnoEngine.UI.UiEventType.MouseEnter 60ba398022478b6f46c18cf364b162c8705bf669cc2a6576971c8801591ba7bf -->

```csharp
InnoEngine.UI.UiEventType.MouseEnter = 5
```

A pointer entered the target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L219).

## `MouseLeave`

<a id="api-b19aae3f6eb42fbf"></a>
<!-- api: F:InnoEngine.UI.UiEventType.MouseLeave 9e8e85f0ea3e558f7b910e956bd14887011d4bbda068174fc9f4122f2fc6560f -->

```csharp
InnoEngine.UI.UiEventType.MouseLeave = 6
```

A pointer left the target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L223).

## `Submit`

<a id="api-93a8cb4e57dac78c"></a>
<!-- api: F:InnoEngine.UI.UiEventType.Submit a8b0fd177aac75386cda1214933fef0cbf591438742fd98f2474ed097d1c1a66 -->

```csharp
InnoEngine.UI.UiEventType.Submit = 2
```

A form was submitted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L207).
