---
title: Inspect and edit the current target
description: Use target locking, scene-safe mutations, Transform spaces and
  typed reference assignment.
uid: manual.editor.inspector
kind: how-to
owners:
  - Inno.Editor.Panel.Inspector
contracts:
  - project.inno-editor-panel-inspector
  - project.inno-editor-inspection
---
# Inspect and edit the current target

Inspector displays a shared target header and the selected target's drawers. It owns the panel, scene element actions and reference-drop coordination; reusable drawer discovery/property rendering belongs to Inspection. All scene modifications go through SceneEdits.

## Lock a target without locking Selection

Use the header lock to keep the displayed target while selecting or dragging another object elsewhere. This does not change global Selection. Scene targets retain persistent identity and resolve against the current Edit/Play world after reload, including Missing placeholders. Targets without stable identity use weak references. Destruction or failed resolution unlocks rather than retaining a collectible generation.

The target drawer supplies icon, name/setter and a compact second information row. A null name setter renders read-only text. Read-only source and temporary Play-edit notices remain visible in the header. Play copies are editable but cannot be saved to project Scene/Prefab assets.

## Edit Transform space explicitly

The Transform fieldset switches Local Space/World Space for presentation; that choice is not a serialized Transform property. Position, rotation in degrees and scale retain XYZ controls. World edits convert through the actual Transform world API and record the resulting local property deltas, so undo restores both data and render revision.

A noninvertible parent matrix, such as zero scale, disables world inputs and shows a warning. Switch to Local to repair it. Section titles collapse complete groups until the next section, rather than hiding only their first row.

## Manage components and systems

Dynamic Add menus resolve types from the current type catalog. Cards expose enabled, Reset and Remove as applicable; Transform cannot be removed. Drag the whole header to change display order. The expanded body participates in drop placement, and dragging does not automatically open another card.

Disabled bodies remain readable but cannot be edited. Missing cards preserve their state visibly. A component/system without serializable properties can show its actual source/domain/scope instead of an unexplained blank area. Data edits, element changes and order use minimal neutral History; they do not rebuild unrelated scene objects.

## Assign tags, layers and references

GameObject tags/layers come from typed Project Settings snapshots, refreshed by store revision. Apply uses the single Settings transaction. Removing a definition does not rewrite every scene: the existing assignment stays and reports an undefined-tag/layer diagnostic until repaired. The layer interaction matrix remains an explicit API; no built-in system automatically applies those rules, and the Inspector does not pretend otherwise.

Asset references accept compatible AssetInfo payloads; engine-object references accept current-world objects. Typed drop handlers validate compatibility before assigning through the property edit owner. Accepted hover feedback differs from rejected payloads.

Asset choices display `source-id:asset-name`, retain full canonical paths in help/search, and use persistent IDs internally. Same-named assets in different folders do not collide. The target lock lets you choose another source without losing the destination field.

## Extend the shared controls

Use [Inspector drawers](../../extending/inspectors.md) for custom properties, annotations, conditional target selection, inline failure isolation and reload-safe text state. Default bodies share the same fieldsets and property rows. Long labels wrap within their column, and the panel retains one vertical scrolling owner without allowing a custom drawer to widen the whole window.
