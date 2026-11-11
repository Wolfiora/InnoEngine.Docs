---
title: "NativePanelInput"
description: "Reference for NativePanelInput in Inno.Testing.Editor.Native."
uid: api.inno.testing.editor.native.07bbfd0324256d4e
kind: api
owners:
  - Inno.Testing.Editor.Native
apiSurface: source-clr
contracts:
  - project.inno-testing-editor-native
---
# `NativePanelInput`

This reference describes `NativePanelInput` in `Inno.Testing.Editor.Native`. Read the [shared contract](../../../../contributing/testing/support/inno-testing-editor-native.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Focus`](#api-cf16be7ac5b895f7) | Method |
| [`Key`](#api-05f9d6faf3099ebc) | Method |

## Type declaration

<a id="api-07bbfd0324256d4e"></a>
<!-- api: T:Inno.Testing.Editor.Native.NativePanelInput c23b4b0e2d422e1eab111ffb22938c7511f8bc2938c47fc4e8a393e4fb2ce72d -->

```csharp
public static class Inno.Testing.Editor.Native.NativePanelInput
```

Delivers real native focus and keyboard events through a panel fixture's frame boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativePanelInput.cs#L12).

## `Focus`

<a id="api-cf16be7ac5b895f7"></a>
<!-- api: M:Inno.Testing.Editor.Native.NativePanelInput.Focus(Inno.Testing.Editor.Native.NativePanelHost,Inno.Editor.Interactions.EditorPanelExtension,System.String) 5f273c89c9ff589fd9e388385e7e90c2adedec32b275900a95122803309f87a2 -->

```csharp
public static void Inno.Testing.Editor.Native.NativePanelInput.Focus(Inno.Testing.Editor.Native.NativePanelHost host, Inno.Editor.Interactions.EditorPanelExtension panel, string windowFragment)
```

Focuses the actual active native window matching the requested fragment.

**Parameter `host`:** The current thread's live native host.

**Parameter `panel`:** The panel drawn to discover its window.

**Parameter `windowFragment`:** The required fragment of the actual native window name.

**Throws `System.InvalidOperationException`:** No active native window matches the fragment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativePanelInput.cs#L21).

## `Key`

<a id="api-05f9d6faf3099ebc"></a>
<!-- api: M:Inno.Testing.Editor.Native.NativePanelInput.Key(Inno.Testing.Editor.Native.NativePanelHost,Inno.Editor.Interactions.EditorPanelExtension,Inno.Native.ImGui.ImGuiKey,System.Boolean,System.Boolean) 5a1e35190265bd4ccd643ce8737636de0ea3fe9d287dca3f2ff4036ee4031baa -->

```csharp
public static void Inno.Testing.Editor.Native.NativePanelInput.Key(Inno.Testing.Editor.Native.NativePanelHost host, Inno.Editor.Interactions.EditorPanelExtension panel, Inno.Native.ImGui.ImGuiKey key, bool shift = false, bool primary = false)
```

Delivers a complete key press and release through actual native frames.

**Parameter `host`:** The current thread's live native host.

**Parameter `panel`:** The panel receiving input.

**Parameter `key`:** The native key to press.

**Parameter `shift`:** Whether to hold Shift during the key press.

**Parameter `primary`:** Whether to hold the fixture's Control convention during the key press.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativePanelInput.cs#L51).
