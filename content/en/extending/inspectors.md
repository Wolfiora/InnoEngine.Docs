---
title: Add an Inspector drawer
description: Reuse shared property presentation, feature-owned mutations and
  generation-scoped discovery.
uid: extending.inspectors
kind: how-to
owners:
  - Inno.Editor.Inspection
contracts:
  - project.inno-editor-inspection
---
# Add an Inspector drawer

Reference the shared Inspection layer when implementing target or property presentation. A feature does not need the Inspector Panel assembly: the panel owns its window/header and scene operations, while Inspection owns drawer contracts, generation registries, context and generic property rendering.

## Choose a target drawer

Derive from `InspectionDrawer<TTarget>` and declare its target/priority. `BindName` returns the display name and optional setter together, so the header observes one consistent snapshot. A null setter makes the name read-only.

Resolution prefers exact type, then inheritance distance, priority and stable type name. A new type generation builds a complete candidate snapshot; construction failures or registration conflicts preserve the previous snapshot. Conditional drawers may use `CanInspect`, but multiple actual matches still report ambiguity rather than choosing discovery order.

Use `DrawProperties` for runtime-visible SerializableProperty members. The first group without an explicit Header becomes Properties. The context provides Editor/Interactions and the shared property renderer, not SceneEdits or every feature service. Inject only the required domain services through composition.

## Route changes through the feature

An `IPropertyDrawer` matches the declared property type and reads/writes through PropertyDrawContext. `SetValue` delegates mutation to the feature's `IInspectionPropertyEditService`, which records its neutral History. Do not mutate the serialized owner directly or introduce Scene dependencies into the generic renderer.

Dynamic DrawValue inputs can provide tooltips, read-only state, HDR color and numeric bounds without inventing CLR attributes. Draft rendering separates a neutral state owner from a value owner borrowed for this frame; retained text must not keep plugin settings alive.

Color values remain linear. Swatches display sRGB; edited RGB decodes to linear before SetValue, while alpha passes unchanged. Ordinary float/vector/Rect/rotation/Transform controls use compact one-decimal presentation without rounding stored values. Precise text editing retains round-trip precision and the same declared range bounds.

## Add useful presentation metadata

[Editor annotations](../architecture/projects/inno-editor-annotations.md) control presentation without deciding persistence or changing serialization schema. Header descriptions and Tooltip are hover help. Text is persistent neutral explanation; HelpBox presents explicit informational/warning/error state. Multiple visibility conditions combine with AND, including truth/equality/null/reference-assignment conditions.

An essential instruction should remain visible instead of being available only on hover. Custom metadata derives from InspectorPresentationAttribute and is interpreted by an explicitly registered attribute drawer. It can combine visibility, read-only state, labels, help and bounds or draw decorators. Generation/priority resolution avoids a central switch for plugin extensions.

Authoring uses retain the conditional annotations. Player compilation semantically erases authoring-only uses, custom derived declarations and imports, while SerializableProperty retains runtime persistence. Do not put an authoring annotation object into runtime state.

## Isolate inline failures and retained text

`DrawInlineChild` follows the same renderer resolution, disabled scope, error reporting and full child-path identity as a normal property, without adding another row. A child drawer failure is presented locally; parents and later fields keep drawing. Inline rendering does not change readonly or SetValue semantics.

Use TryGetTextState/SetTextState/ClearTextState for incomplete numeric, Guid or collection text. State belongs to one renderer, is keyed by a weak inspected owner, full property path and local key, and stores only neutral strings. Different hosts/renderers/objects cannot share accidental text state or retain a collectible generation through a static dictionary.

## Share icons without panel dependencies

Use `IInspectionIconProvider<TTarget>` to obtain a feature's icon policy. The Inspector composition depends on that interface instead of File Browser. Scene/object drawers read the same full-path settings objects as the other presentations; Settings is not a second icon resolver.

Editor scripts receive selected drawer/property-edit contracts, not registries, activators or concrete feature mutation adapters. See the [Inspection reference](../architecture/projects/inno-editor-inspection.md) for host drawer examples and the separately qualified script examples.
