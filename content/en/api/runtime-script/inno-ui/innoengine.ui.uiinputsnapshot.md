---
title: "UiInputSnapshot"
description: "Reference for UiInputSnapshot in Inno.UI."
uid: api.inno.ui.runtime-script.7f240922c54ffd66
kind: api
owners:
  - Inno.UI
apiSurface: runtime-script
contracts:
  - project.inno-ui#document-and-frame-contract
  - manual.scripting.use-script-api
---
# `UiInputSnapshot`

This reference describes `UiInputSnapshot` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-adec990c4d5080e7) | Method |
| [`buttonsPressed`](#api-5f3072ac5da77d67) | Property |
| [`buttonsReleased`](#api-dc82415becf17733) | Property |
| [`keysPressed`](#api-4681ceed95a63473) | Property |
| [`keysReleased`](#api-6181d2697c16ab93) | Property |
| [`modifiers`](#api-ddcfd4ba1ad1900e) | Property |
| [`mousePosition`](#api-971231347b59422d) | Property |
| [`scrollDelta`](#api-5a7d6aeeb0ad078b) | Property |
| [`textInput`](#api-5f7702855aae8c16) | Property |

## Type declaration

<a id="api-7f240922c54ffd66"></a>
<!-- api: T:InnoEngine.UI.UiInputSnapshot 9f9c5523c3c00293f69f4a020dfb950af685f389bf43198d11612708b781192f -->

```csharp
public sealed class InnoEngine.UI.UiInputSnapshot
```

Carries one immutable input snapshot across the UI backend boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L272).

## `#ctor`

<a id="api-adec990c4d5080e7"></a>
<!-- api: M:InnoEngine.UI.UiInputSnapshot.#ctor(InnoEngine.Mathematics.Vector2,InnoEngine.Mathematics.Vector2,InnoEngine.Input.KeyModifier,System.Collections.Generic.IReadOnlyCollection{InnoEngine.Input.KeyCode},System.Collections.Generic.IReadOnlyCollection{InnoEngine.Input.KeyCode},System.Collections.Generic.IReadOnlyCollection{InnoEngine.Input.MouseButton},System.Collections.Generic.IReadOnlyCollection{InnoEngine.Input.MouseButton},System.Collections.Generic.IReadOnlyList{System.String}) 5043dbf7cd3f639695e40554f971bcb8c87a26a1cbdbc3372e8ae9a47d8648ff -->

```csharp
public InnoEngine.UI.UiInputSnapshot.UiInputSnapshot(InnoEngine.Mathematics.Vector2 mousePosition, InnoEngine.Mathematics.Vector2 scrollDelta, InnoEngine.Input.KeyModifier modifiers, System.Collections.Generic.IReadOnlyCollection<InnoEngine.Input.KeyCode> keysPressed, System.Collections.Generic.IReadOnlyCollection<InnoEngine.Input.KeyCode> keysReleased, System.Collections.Generic.IReadOnlyCollection<InnoEngine.Input.MouseButton> buttonsPressed, System.Collections.Generic.IReadOnlyCollection<InnoEngine.Input.MouseButton> buttonsReleased, System.Collections.Generic.IReadOnlyList<string> textInput)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L301).

## `buttonsPressed`

<a id="api-5f3072ac5da77d67"></a>
<!-- api: P:InnoEngine.UI.UiInputSnapshot.buttonsPressed 49658a61c0b401c7c6f7e82096e475f9a43148b9ac77a5cb8fe3faea9264b9c5 -->

```csharp
public System.Collections.Generic.IReadOnlyCollection<InnoEngine.Input.MouseButton> InnoEngine.UI.UiInputSnapshot.buttonsPressed { get; }
```

Gets pointer buttons pressed this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L344).

## `buttonsReleased`

<a id="api-dc82415becf17733"></a>
<!-- api: P:InnoEngine.UI.UiInputSnapshot.buttonsReleased 63366fc49584874fbd94056b5b04feb67fcb3a9d8f4db3c642497ee0a3e06fdb -->

```csharp
public System.Collections.Generic.IReadOnlyCollection<InnoEngine.Input.MouseButton> InnoEngine.UI.UiInputSnapshot.buttonsReleased { get; }
```

Gets pointer buttons released this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L348).

## `keysPressed`

<a id="api-4681ceed95a63473"></a>
<!-- api: P:InnoEngine.UI.UiInputSnapshot.keysPressed cc9980d37db8c60b4a653239ff729bae9d84f1d94fba95c1a2f6095bb2bb177b -->

```csharp
public System.Collections.Generic.IReadOnlyCollection<InnoEngine.Input.KeyCode> InnoEngine.UI.UiInputSnapshot.keysPressed { get; }
```

Gets physical keys pressed this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L336).

## `keysReleased`

<a id="api-6181d2697c16ab93"></a>
<!-- api: P:InnoEngine.UI.UiInputSnapshot.keysReleased 30c2bc98d4736e3b35d88e2eb0652e470862fb7bc7fb51b4548e1c12167b8e5a -->

```csharp
public System.Collections.Generic.IReadOnlyCollection<InnoEngine.Input.KeyCode> InnoEngine.UI.UiInputSnapshot.keysReleased { get; }
```

Gets physical keys released this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L340).

## `modifiers`

<a id="api-ddcfd4ba1ad1900e"></a>
<!-- api: P:InnoEngine.UI.UiInputSnapshot.modifiers 3842775a29a3c2cd7b78eee4c693359fce5667da2b77e6f8d29c39753824def3 -->

```csharp
public InnoEngine.Input.KeyModifier InnoEngine.UI.UiInputSnapshot.modifiers { get; }
```

Gets active keyboard modifiers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L332).

## `mousePosition`

<a id="api-971231347b59422d"></a>
<!-- api: P:InnoEngine.UI.UiInputSnapshot.mousePosition 0fc3ac5ee1121ace3089aa394010eb4b7ac1e36b6a9164133bc466dbdfa3914f -->

```csharp
public InnoEngine.Mathematics.Vector2 InnoEngine.UI.UiInputSnapshot.mousePosition { get; }
```

Gets the pointer position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L324).

## `scrollDelta`

<a id="api-5a7d6aeeb0ad078b"></a>
<!-- api: P:InnoEngine.UI.UiInputSnapshot.scrollDelta 0355fe271e1ab00c07c2355eefd02a145d24879010ddd19ec02ccd305e723fba -->

```csharp
public InnoEngine.Mathematics.Vector2 InnoEngine.UI.UiInputSnapshot.scrollDelta { get; }
```

Gets pointer wheel movement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L328).

## `textInput`

<a id="api-5f7702855aae8c16"></a>
<!-- api: P:InnoEngine.UI.UiInputSnapshot.textInput 3adb069c1288ca9382802cb89367df45e11913067df67e8c4f9a312d382838ff -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> InnoEngine.UI.UiInputSnapshot.textInput { get; }
```

Gets ordered Unicode text commits.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L352).
