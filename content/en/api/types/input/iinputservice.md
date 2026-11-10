---
title: "IInputService"
description: "Reference for IInputService in Inno.Input."
uid: api.inno.input.bf368dad86821e50
kind: api
owners:
  - Inno.Input
apiSurface: source-clr
contracts:
  - project.inno-input#execution-and-ownership-contract
---
# `IInputService`

This reference describes `IInputService` in `Inno.Input`. Read the [shared contract](../../projects/inno-input.md#execution-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`snapshot`](#api-e76435d5ccb6ac16) | Property |

## Type declaration

<a id="api-bf368dad86821e50"></a>
<!-- api: T:Inno.Input.IInputService fc9aa1da981f6aa8d1ac766e9667abe835c1512191847db064a7f891bda022ea -->

```csharp
public interface Inno.Input.IInputService
```

Exposes the current immutable input snapshot to runtime systems and scripts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/IInputService.cs#L6).

## `snapshot`

<a id="api-e76435d5ccb6ac16"></a>
<!-- api: P:Inno.Input.IInputService.snapshot 9b753cd957ff9ac343dc8d54c5999717f99350de6a5038d8857acdf1bd5f69b3 -->

```csharp
Inno.Input.InputSnapshot Inno.Input.IInputService.snapshot { get; }
```

Gets the snapshot captured at the current frame boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/IInputService.cs#L11).
