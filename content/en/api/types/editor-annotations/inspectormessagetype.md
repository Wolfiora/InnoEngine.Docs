---
title: "InspectorMessageType"
description: "Reference for InspectorMessageType in Inno.Editor.Annotations."
uid: api.inno.editor.annotations.f183b063a6bc054b
kind: api
owners:
  - Inno.Editor.Annotations
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-annotations#loading-and-script-availability
---
# `InspectorMessageType`

This reference describes `InspectorMessageType` in `Inno.Editor.Annotations`. Read the [shared contract](../../projects/inno-editor-annotations.md#loading-and-script-availability) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Error`](#api-5a058d24dd6ddba3) | Field |
| [`Info`](#api-d02b5b2db3523d82) | Field |
| [`Warning`](#api-b0cbe63a4a3f16e7) | Field |

## Type declaration

<a id="api-f183b063a6bc054b"></a>
<!-- api: T:Inno.Editor.Annotations.InspectorMessageType 8822c9de5342907860fdd649106156a3840cf7557272256aabe1d79882accace -->

```csharp
public enum Inno.Editor.Annotations.InspectorMessageType : int
```

Selects the visual severity of an Inspector help message.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L405).

## `Error`

<a id="api-5a058d24dd6ddba3"></a>
<!-- api: F:Inno.Editor.Annotations.InspectorMessageType.Error fccff932efa7b94314a21e1a4860ada2ddc760ef766652a0e2856cdc61cd560c -->

```csharp
Inno.Editor.Annotations.InspectorMessageType.Error = 2
```

An invalid or unusable configuration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L420).

## `Info`

<a id="api-d02b5b2db3523d82"></a>
<!-- api: F:Inno.Editor.Annotations.InspectorMessageType.Info 21240990e4c34b9e5eb5bc19c310acab99cb45810d0b47c58c994a79ae97ef5e -->

```csharp
Inno.Editor.Annotations.InspectorMessageType.Info = 0
```

Neutral explanatory information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L410).

## `Warning`

<a id="api-b0cbe63a4a3f16e7"></a>
<!-- api: F:Inno.Editor.Annotations.InspectorMessageType.Warning 70914c805b2f7bf5e50c5c5f9f01c24eb074ab75d7d1b06c0f17e38da744ccc5 -->

```csharp
Inno.Editor.Annotations.InspectorMessageType.Warning = 1
```

A non-blocking configuration warning.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L415).
