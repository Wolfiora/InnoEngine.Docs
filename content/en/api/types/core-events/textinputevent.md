---
title: "TextInputEvent"
description: "Reference for TextInputEvent in Inno.Core.Events."
uid: api.inno.core.events.2736f51e923170ec
kind: api
owners:
  - Inno.Core.Events
apiSurface: source-clr
contracts:
  - project.inno-core-events#dispatch-and-lifetime-contract
---
# `TextInputEvent`

This reference describes `TextInputEvent` in `Inno.Core.Events`. Read the [shared contract](../../projects/inno-core-events.md#dispatch-and-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Events.Event`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1ac3b7b3b74920e2) | Method |
| [`text`](#api-aabfb1d2aac92627) | Property |
| [`windowId`](#api-22c6e5012eed3fcb) | Property |

## Type declaration

<a id="api-2736f51e923170ec"></a>
<!-- api: T:Inno.Core.Events.TextInputEvent c30b50dd296358c0ed3ba1997a7b287405adb3b5598e04bfc69d3cb2ffeab6b1 -->

```csharp
public sealed class Inno.Core.Events.TextInputEvent : Inno.Core.Events.Event
```

Raised when the platform commits UTF-8 text through keyboard, IME, or virtual-keyboard input.

**Parameter `windowId`:** The source window identifier.

**Parameter `text`:** The committed Unicode text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/KeyEvents.cs#L101).

## `#ctor`

<a id="api-1ac3b7b3b74920e2"></a>
<!-- api: M:Inno.Core.Events.TextInputEvent.#ctor(System.UInt32,System.String) cf10d4237f3925ba0c0728714a7803e885052fd000b7c4ae5f7b316310ceca23 -->

```csharp
public Inno.Core.Events.TextInputEvent.TextInputEvent(uint windowId, string text)
```

Raised when the platform commits UTF-8 text through keyboard, IME, or virtual-keyboard input.

**Parameter `windowId`:** The source window identifier.

**Parameter `text`:** The committed Unicode text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/KeyEvents.cs#L101).

## `text`

<a id="api-aabfb1d2aac92627"></a>
<!-- api: P:Inno.Core.Events.TextInputEvent.text cf280ff3a13bb9efe2900d0d5ff278853b8730ddb96517f2717fcfbe5736db26 -->

```csharp
public string Inno.Core.Events.TextInputEvent.text { get; }
```

Gets the committed Unicode text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/KeyEvents.cs#L114).

## `windowId`

<a id="api-22c6e5012eed3fcb"></a>
<!-- api: P:Inno.Core.Events.TextInputEvent.windowId a9d2681ee0c8f553bd7ddea311d3ded0c03a15823d4c3b567971473693b26955 -->

```csharp
public uint Inno.Core.Events.TextInputEvent.windowId { get; }
```

Gets the source window identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/KeyEvents.cs#L109).
