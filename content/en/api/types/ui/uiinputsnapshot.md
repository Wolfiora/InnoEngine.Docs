---
title: "UiInputSnapshot"
description: "Reference for UiInputSnapshot in Inno.UI."
uid: api.inno.ui.1b3c4f22855e3a64
kind: api
owners:
  - Inno.UI
apiSurface: source-clr
contracts:
  - project.inno-ui#document-and-frame-contract
---
# `UiInputSnapshot`

This reference describes `UiInputSnapshot` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e5debe1825f8189d) | Method |
| [`buttonsPressed`](#api-8d9f7181d4817d03) | Property |
| [`buttonsReleased`](#api-38cafe4c79ded47a) | Property |
| [`keysPressed`](#api-e9c1aed81ed4c5fb) | Property |
| [`keysReleased`](#api-e981be0be5c52876) | Property |
| [`modifiers`](#api-27c961a6932e83b1) | Property |
| [`mousePosition`](#api-0e3855a029a741e9) | Property |
| [`scrollDelta`](#api-34e72cbae4aa1cf6) | Property |
| [`textInput`](#api-2e5f8bd4432260ac) | Property |

## Type declaration

<a id="api-1b3c4f22855e3a64"></a>
<!-- api: T:Inno.UI.UiInputSnapshot 7195c9ec42ec185b068c14efa4f7b50b6893a2671658c0bd75c4f27b5c413156 -->

```csharp
public sealed class Inno.UI.UiInputSnapshot
```

Carries one immutable input snapshot across the UI backend boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L272).

## `#ctor`

<a id="api-e5debe1825f8189d"></a>
<!-- api: M:Inno.UI.UiInputSnapshot.#ctor(Inno.Core.Mathematics.Vector2,Inno.Core.Mathematics.Vector2,Inno.Core.Input.KeyModifier,System.Collections.Generic.IReadOnlyCollection{Inno.Core.Input.KeyCode},System.Collections.Generic.IReadOnlyCollection{Inno.Core.Input.KeyCode},System.Collections.Generic.IReadOnlyCollection{Inno.Core.Input.MouseButton},System.Collections.Generic.IReadOnlyCollection{Inno.Core.Input.MouseButton},System.Collections.Generic.IReadOnlyList{System.String}) ce22dc14ca4ff4863493cbabcdd2a2ebfc644d15bbdf2b3b7a9a59d25a265e16 -->

```csharp
public Inno.UI.UiInputSnapshot.UiInputSnapshot(Inno.Core.Mathematics.Vector2 mousePosition, Inno.Core.Mathematics.Vector2 scrollDelta, Inno.Core.Input.KeyModifier modifiers, System.Collections.Generic.IReadOnlyCollection<Inno.Core.Input.KeyCode> keysPressed, System.Collections.Generic.IReadOnlyCollection<Inno.Core.Input.KeyCode> keysReleased, System.Collections.Generic.IReadOnlyCollection<Inno.Core.Input.MouseButton> buttonsPressed, System.Collections.Generic.IReadOnlyCollection<Inno.Core.Input.MouseButton> buttonsReleased, System.Collections.Generic.IReadOnlyList<string> textInput)
```

Creates one backend-neutral UI input snapshot.

**Parameter `mousePosition`:** Pointer position in surface coordinates.

**Parameter `scrollDelta`:** Pointer wheel movement.

**Parameter `modifiers`:** Active keyboard modifiers.

**Parameter `keysPressed`:** Physical keys pressed this frame.

**Parameter `keysReleased`:** Physical keys released this frame.

**Parameter `buttonsPressed`:** Pointer buttons pressed this frame.

**Parameter `buttonsReleased`:** Pointer buttons released this frame.

**Parameter `textInput`:** Ordered Unicode text commits.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L301).

## `buttonsPressed`

<a id="api-8d9f7181d4817d03"></a>
<!-- api: P:Inno.UI.UiInputSnapshot.buttonsPressed 745402ce416167cd0d171357e48f94be8f41044be9c4ab654e59a8e333b9b9f4 -->

```csharp
public System.Collections.Generic.IReadOnlyCollection<Inno.Core.Input.MouseButton> Inno.UI.UiInputSnapshot.buttonsPressed { get; }
```

Gets pointer buttons pressed this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L344).

## `buttonsReleased`

<a id="api-38cafe4c79ded47a"></a>
<!-- api: P:Inno.UI.UiInputSnapshot.buttonsReleased ab7c1cc0834bcf7dd47d4fc8435168996313f2e163a26ac7daa5f58a6c98bf5c -->

```csharp
public System.Collections.Generic.IReadOnlyCollection<Inno.Core.Input.MouseButton> Inno.UI.UiInputSnapshot.buttonsReleased { get; }
```

Gets pointer buttons released this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L348).

## `keysPressed`

<a id="api-e9c1aed81ed4c5fb"></a>
<!-- api: P:Inno.UI.UiInputSnapshot.keysPressed 392f5110de7f87b560074fb00ee72bf3600490b34b493eda522092bdd4dad604 -->

```csharp
public System.Collections.Generic.IReadOnlyCollection<Inno.Core.Input.KeyCode> Inno.UI.UiInputSnapshot.keysPressed { get; }
```

Gets physical keys pressed this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L336).

## `keysReleased`

<a id="api-e981be0be5c52876"></a>
<!-- api: P:Inno.UI.UiInputSnapshot.keysReleased 152018b52a38f47d321d892392b810e03c839a61135a937978243c5513546837 -->

```csharp
public System.Collections.Generic.IReadOnlyCollection<Inno.Core.Input.KeyCode> Inno.UI.UiInputSnapshot.keysReleased { get; }
```

Gets physical keys released this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L340).

## `modifiers`

<a id="api-27c961a6932e83b1"></a>
<!-- api: P:Inno.UI.UiInputSnapshot.modifiers bfd54e4ff816cf43dee28c5b072f3ed4ed0de3999f87694da4c4b5bbc79f6328 -->

```csharp
public Inno.Core.Input.KeyModifier Inno.UI.UiInputSnapshot.modifiers { get; }
```

Gets active keyboard modifiers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L332).

## `mousePosition`

<a id="api-0e3855a029a741e9"></a>
<!-- api: P:Inno.UI.UiInputSnapshot.mousePosition 2e65ad038347687c8b667d7227d5635858329919eef87e5f417badac3e9c166d -->

```csharp
public Inno.Core.Mathematics.Vector2 Inno.UI.UiInputSnapshot.mousePosition { get; }
```

Gets the pointer position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L324).

## `scrollDelta`

<a id="api-34e72cbae4aa1cf6"></a>
<!-- api: P:Inno.UI.UiInputSnapshot.scrollDelta 3e96b3409ae56c4b734f87beb70f0ba32802ff7d952208fa59f254fd89a6ac32 -->

```csharp
public Inno.Core.Mathematics.Vector2 Inno.UI.UiInputSnapshot.scrollDelta { get; }
```

Gets pointer wheel movement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L328).

## `textInput`

<a id="api-2e5f8bd4432260ac"></a>
<!-- api: P:Inno.UI.UiInputSnapshot.textInput 9f0cdb75af1db0db7cac2a9ca4eb4e6b2491ff4b873907cec5c67dd629afd436 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.UI.UiInputSnapshot.textInput { get; }
```

Gets ordered Unicode text commits.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L352).
