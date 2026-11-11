---
title: "UiEventType"
description: "Reference for UiEventType in Inno.UI."
uid: api.inno.ui.391eb50fba323892
kind: api
owners:
  - Inno.UI
apiSurface: source-clr
contracts:
  - project.inno-ui#document-and-frame-contract
---
# `UiEventType`

This reference describes `UiEventType` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Blur`](#api-c5646c6633f147c6) | Field |
| [`Change`](#api-5549862ef8487b8a) | Field |
| [`Click`](#api-a98c7ebba74517eb) | Field |
| [`Focus`](#api-6925a564d8f9b970) | Field |
| [`MouseEnter`](#api-d1493985ac7b9fef) | Field |
| [`MouseLeave`](#api-5548ba9095b485ed) | Field |
| [`Submit`](#api-2eb514b87d1cae85) | Field |

## Type declaration

<a id="api-391eb50fba323892"></a>
<!-- api: T:Inno.UI.UiEventType 6f3a6aaf239d98eb5027bf581aff9957fd624e80c39441c3ce09322c2bad3a52 -->

```csharp
public enum Inno.UI.UiEventType : int
```

Identifies one document event made visible to game code.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L194).

## `Blur`

<a id="api-c5646c6633f147c6"></a>
<!-- api: F:Inno.UI.UiEventType.Blur 5396e25fd1f00c8188f03ead86c95cf28d1d6226511575939f4c60e03336d8a5 -->

```csharp
Inno.UI.UiEventType.Blur = 4
```

The target lost focus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L215).

## `Change`

<a id="api-5549862ef8487b8a"></a>
<!-- api: F:Inno.UI.UiEventType.Change ca8a520aa80c34f0cb33d8af4144d3a3ff29d4e59323baabb20795b597a75bf0 -->

```csharp
Inno.UI.UiEventType.Change = 1
```

The target value changed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L203).

## `Click`

<a id="api-a98c7ebba74517eb"></a>
<!-- api: F:Inno.UI.UiEventType.Click 0f7391d03dba500b73c0694621bd0a16be5e99aff0972f2d707740b741ecb209 -->

```csharp
Inno.UI.UiEventType.Click = 0
```

The target was clicked.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L199).

## `Focus`

<a id="api-6925a564d8f9b970"></a>
<!-- api: F:Inno.UI.UiEventType.Focus b0a18ec42475d4adf1eaec8afebd0a2bec27d9757a2b719faa1369c7726d016c -->

```csharp
Inno.UI.UiEventType.Focus = 3
```

The target gained focus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L211).

## `MouseEnter`

<a id="api-d1493985ac7b9fef"></a>
<!-- api: F:Inno.UI.UiEventType.MouseEnter b449a3ebb12af1d528e40b54915c109b16bce442338fdf2e3d41cdbc7700faa6 -->

```csharp
Inno.UI.UiEventType.MouseEnter = 5
```

A pointer entered the target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L219).

## `MouseLeave`

<a id="api-5548ba9095b485ed"></a>
<!-- api: F:Inno.UI.UiEventType.MouseLeave dbe80ab17c25b932fec2ee44f9507906f8527fc0e77a3be3a0a1ec600f5310c7 -->

```csharp
Inno.UI.UiEventType.MouseLeave = 6
```

A pointer left the target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L223).

## `Submit`

<a id="api-2eb514b87d1cae85"></a>
<!-- api: F:Inno.UI.UiEventType.Submit 932348136cd738a4b9497d88d8c2d08e601ef33560ca9ae8ccb76dbb5ad3fb0c -->

```csharp
Inno.UI.UiEventType.Submit = 2
```

A form was submitted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L207).
