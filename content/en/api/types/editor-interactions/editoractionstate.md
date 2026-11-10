---
title: "EditorActionState"
description: "Reference for EditorActionState in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.1c4b78162b994ebe
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorActionState`

This reference describes `EditorActionState` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.Interactions.EditorActionState>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-169cbe51bd217c7e) | Method |
| [`Equals`](#api-5284fe2f0474d71a) | Method |
| [`Equals`](#api-64daa5adb0b418e1) | Method |
| [`GetHashCode`](#api-73842ef7f6da7103) | Method |
| [`op_Equality`](#api-c1921afe1928de4d) | Method |
| [`op_Inequality`](#api-bd31ae3af034bd4e) | Method |
| [`ToString`](#api-1a2bde052de329bc) | Method |
| [`disabled`](#api-aaa5c03e5693eba9) | Property |
| [`displayName`](#api-b4247c6c2ee1566f) | Property |
| [`enabled`](#api-e769442397af0097) | Property |
| [`hidden`](#api-e07a421be4db4a45) | Property |
| [`isChecked`](#api-4e8103be2b818df5) | Property |
| [`isEnabled`](#api-73e93f8c74020017) | Property |
| [`isVisible`](#api-51a25ee79e090f19) | Property |
| [`unavailableReason`](#api-6172ef72680cdc84) | Property |

## Type declaration

<a id="api-1c4b78162b994ebe"></a>
<!-- api: T:Inno.Editor.Interactions.EditorActionState 2bed2c9274c41c53af9a287e03b8c09001a9d64c9d8f0bb81191333f16c9dd7f -->

```csharp
public readonly record struct Inno.Editor.Interactions.EditorActionState : System.IEquatable<Inno.Editor.Interactions.EditorActionState>
```

Describes the current presentation and availability of an editor action.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionState.cs#L5).

## `#ctor`

<a id="api-169cbe51bd217c7e"></a>
<!-- api: M:Inno.Editor.Interactions.EditorActionState.#ctor(System.Boolean,System.Boolean,System.Boolean,System.String,System.String) b7f09b3734097ee9ec8c282ac667f6dfe0bbd51a48bc1507d2e69f7169da38aa -->

```csharp
public Inno.Editor.Interactions.EditorActionState.EditorActionState(bool isVisible, bool isEnabled, bool isChecked = false, string? displayName = null, string? unavailableReason = null)
```

Creates the contextual presentation state of an editor action.

**Parameter `isVisible`:** Whether the action should be included in the current presentation.

**Parameter `isEnabled`:** Whether the action can execute in the current context.

**Parameter `isChecked`:** Whether the action is currently presented as checked.

**Parameter `displayName`:** An optional contextual label that replaces the static placement label.

**Parameter `unavailableReason`:** A concise explanation shown when an otherwise visible action cannot execute.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionState.cs#L25).

## `Equals`

<a id="api-5284fe2f0474d71a"></a>
<!-- api: M:Inno.Editor.Interactions.EditorActionState.Equals(Inno.Editor.Interactions.EditorActionState) c0ea9bbf1f9b6ecbc1079e8482d248565e88ec72b361d8b7614f0e439d0aa1e6 -->

```csharp
public bool Inno.Editor.Interactions.EditorActionState.Equals(Inno.Editor.Interactions.EditorActionState other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionState.cs#L5).

## `Equals`

<a id="api-64daa5adb0b418e1"></a>
<!-- api: M:Inno.Editor.Interactions.EditorActionState.Equals(System.Object) d4735070b11fa703e289c30c54ab65cf0eca17d64d4d0cf191de69b346875efc -->

```csharp
public override bool Inno.Editor.Interactions.EditorActionState.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionState.cs#L5).

## `GetHashCode`

<a id="api-73842ef7f6da7103"></a>
<!-- api: M:Inno.Editor.Interactions.EditorActionState.GetHashCode 096478fee31b945c129f5fd1b871b31d2356de48dfa6352cd47f02fccac65f0e -->

```csharp
public override int Inno.Editor.Interactions.EditorActionState.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionState.cs#L5).

## `op_Equality`

<a id="api-c1921afe1928de4d"></a>
<!-- api: M:Inno.Editor.Interactions.EditorActionState.op_Equality(Inno.Editor.Interactions.EditorActionState,Inno.Editor.Interactions.EditorActionState) 181c7e5990ed3b607cc840cfe6a594a0dea96de870be694cd3ff284b5be7b634 -->

```csharp
public static bool Inno.Editor.Interactions.EditorActionState.operator ==(Inno.Editor.Interactions.EditorActionState left, Inno.Editor.Interactions.EditorActionState right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionState.cs#L5).

## `op_Inequality`

<a id="api-bd31ae3af034bd4e"></a>
<!-- api: M:Inno.Editor.Interactions.EditorActionState.op_Inequality(Inno.Editor.Interactions.EditorActionState,Inno.Editor.Interactions.EditorActionState) d770bb5ed9d19aebca61f5c8475050ba37ae8914cee7b7966e522abe21ca6b55 -->

```csharp
public static bool Inno.Editor.Interactions.EditorActionState.operator !=(Inno.Editor.Interactions.EditorActionState left, Inno.Editor.Interactions.EditorActionState right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionState.cs#L5).

## `ToString`

<a id="api-1a2bde052de329bc"></a>
<!-- api: M:Inno.Editor.Interactions.EditorActionState.ToString 2126dccfbb85d46e0f9a75f7487eb179ea0ad81d74a36279b915ebd42f8027dd -->

```csharp
public override string Inno.Editor.Interactions.EditorActionState.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionState.cs#L5).

## `disabled`

<a id="api-aaa5c03e5693eba9"></a>
<!-- api: P:Inno.Editor.Interactions.EditorActionState.disabled 9812ce31a07df1bec96130563c67dac53d4f0c6172f44d4699ee9a05f8eb9d2c -->

```csharp
public static Inno.Editor.Interactions.EditorActionState Inno.Editor.Interactions.EditorActionState.disabled { get; }
```

Gets a visible but disabled action state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionState.cs#L66).

## `displayName`

<a id="api-b4247c6c2ee1566f"></a>
<!-- api: P:Inno.Editor.Interactions.EditorActionState.displayName a5af03380a8e0685c7b436c9ec353b17d6635b5dc8c109e3c3e511be4d1527ba -->

```csharp
public string? Inno.Editor.Interactions.EditorActionState.displayName { get; }
```

Gets an optional contextual display name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionState.cs#L54).

## `enabled`

<a id="api-e769442397af0097"></a>
<!-- api: P:Inno.Editor.Interactions.EditorActionState.enabled 694f8ff6f96cc14cd9008a7bfb02670d1031d4748661a3f8a02419cfe609e60a -->

```csharp
public static Inno.Editor.Interactions.EditorActionState Inno.Editor.Interactions.EditorActionState.enabled { get; }
```

Gets a visible and enabled action state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionState.cs#L62).

## `hidden`

<a id="api-e07a421be4db4a45"></a>
<!-- api: P:Inno.Editor.Interactions.EditorActionState.hidden 7bcd50d6e15d56a9d1f540c69343fd28b106a1e32378cfa7d567b39ce4fac810 -->

```csharp
public static Inno.Editor.Interactions.EditorActionState Inno.Editor.Interactions.EditorActionState.hidden { get; }
```

Gets a hidden action state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionState.cs#L70).

## `isChecked`

<a id="api-4e8103be2b818df5"></a>
<!-- api: P:Inno.Editor.Interactions.EditorActionState.isChecked 8432441340feac338bba4ad0c15ef9a450475dce73ed30370e701dbbf013e5ca -->

```csharp
public bool Inno.Editor.Interactions.EditorActionState.isChecked { get; }
```

Gets whether the action is currently checked.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionState.cs#L50).

## `isEnabled`

<a id="api-73e93f8c74020017"></a>
<!-- api: P:Inno.Editor.Interactions.EditorActionState.isEnabled 530109aac8b3313cb926319fc98ed48fea145177fc35a0c94fdc749ec7528cea -->

```csharp
public bool Inno.Editor.Interactions.EditorActionState.isEnabled { get; }
```

Gets whether the action can execute.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionState.cs#L46).

## `isVisible`

<a id="api-51a25ee79e090f19"></a>
<!-- api: P:Inno.Editor.Interactions.EditorActionState.isVisible 5bbd1f1bd7c04f92eb12c24b5ebf410a9b128734cd7424661327194ea4213543 -->

```csharp
public bool Inno.Editor.Interactions.EditorActionState.isVisible { get; }
```

Gets whether the action should be displayed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionState.cs#L42).

## `unavailableReason`

<a id="api-6172ef72680cdc84"></a>
<!-- api: P:Inno.Editor.Interactions.EditorActionState.unavailableReason beb136e7e0626c2fb3da453043b11ae323999b1e193c57fa13d6427031444f09 -->

```csharp
public string? Inno.Editor.Interactions.EditorActionState.unavailableReason { get; }
```

Gets the current execution barrier, or null when no specific explanation is available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionState.cs#L58).
