---
title: "MouseButton"
description: "Reference for MouseButton in Inno.Core.Input."
uid: api.inno.core.input.01b091eb5ecbacb5
kind: api
owners:
  - Inno.Core.Input
apiSurface: source-clr
contracts:
  - project.inno-core-input#input-value-contract
---
# `MouseButton`

This reference describes `MouseButton` in `Inno.Core.Input`. Read the [shared contract](../../projects/inno-core-input.md#input-value-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Left`](#api-845906274d27b175) | Field |
| [`Middle`](#api-64e82c041f04039e) | Field |
| [`Right`](#api-23f3072f56781ad4) | Field |
| [`XButton1`](#api-95181e1092f8f209) | Field |
| [`XButton2`](#api-568fdba226a42cda) | Field |

## Type declaration

<a id="api-01b091eb5ecbacb5"></a>
<!-- api: T:Inno.Core.Input.MouseButton f56eea1c919709e285645c021b7906e33efb417ec40aec927d639c9468d7d963 -->

```csharp
public enum Inno.Core.Input.MouseButton : int
```

Identifies the supported mouse button values for this contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Input/MouseButton.cs#L6).

## `Left`

<a id="api-845906274d27b175"></a>
<!-- api: F:Inno.Core.Input.MouseButton.Left aab5b19af45df4328f78986ec1e82eb70b15cf67029edb8835f463921a8b2fb1 -->

```csharp
Inno.Core.Input.MouseButton.Left = 0
```

The left key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Input/MouseButton.cs#L11).

## `Middle`

<a id="api-64e82c041f04039e"></a>
<!-- api: F:Inno.Core.Input.MouseButton.Middle 9231deff09d3964534a4289a75c4a777746e87a910167736ea5846a9c7443693 -->

```csharp
Inno.Core.Input.MouseButton.Middle = 2
```

The middle key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Input/MouseButton.cs#L19).

## `Right`

<a id="api-23f3072f56781ad4"></a>
<!-- api: F:Inno.Core.Input.MouseButton.Right b32f3940bfa573835b25b3eff46b3688bfbd5df1a4a10009613a9cdba6304c76 -->

```csharp
Inno.Core.Input.MouseButton.Right = 1
```

The right key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Input/MouseButton.cs#L15).

## `XButton1`

<a id="api-95181e1092f8f209"></a>
<!-- api: F:Inno.Core.Input.MouseButton.XButton1 19f3bcab1ba4c02ec4456a67f078305a3e49e09b38da451000c540f9b4479421 -->

```csharp
Inno.Core.Input.MouseButton.XButton1 = 3
```

The xbutton1 key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Input/MouseButton.cs#L23).

## `XButton2`

<a id="api-568fdba226a42cda"></a>
<!-- api: F:Inno.Core.Input.MouseButton.XButton2 aa2fb598ec37e694bdd580eb8696a08f5fff3e3b72fb6e2b8a86f460f3fa5d62 -->

```csharp
Inno.Core.Input.MouseButton.XButton2 = 4
```

The xbutton2 key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Input/MouseButton.cs#L27).
