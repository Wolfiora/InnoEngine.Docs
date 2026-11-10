---
title: Inno.Editor.Settings
description: Editor preferences and Project setting drawers share a frontend while preserving separate persistence owners.
uid: api.projects.inno-editor-settings
kind: project
owners: [Inno.Editor.Settings]
contracts: [architecture.editor-generations, architecture.ownership]
---
# Inno.Editor.Settings

This project provides Editor preference definitions and optional Editor presentations of strongly typed Project settings. The Settings frontend also exposes host-owned Build defaults. Sharing a window, search tree and Apply button does not combine three documents into one atomic transaction.

## Choose the correct settings owner

| Scope | Definition and persistence | Product availability |
| --- | --- | --- |
| `Editor/...` | `EditorSetting` and `EditorSettingObject`; `Settings.Editor.inno` | Editor only; no plugin default contributions. |
| `Project/...` | Runtime setting definition with optional `ProjectSettingEditor<TSetting>`; `Settings.Project.inno` | Runtime/plugin-readable and included where the product requires it. |
| `Build/...` | Host-owned typed Build settings; `Settings.Build.inno` | Team authoring/build defaults; not a Player or plugin runtime protocol. |

All three use Inno Serialization and the shared document-store mechanics for current-format validation, capture/restore and atomic file writes. Their stores, history entries and lifetimes remain distinct.

## Define an Editor preference

An `EditorSettingPath` is `Editor` or starts with `Editor/`. The entire path is the registration identity, read address and serialization property key. A definition without an overridden `OnDraw` describes a page; one with a draw override describes a field.

`EditorSettingObject` offers controlled Boolean, integer, floating-point, string and array access. It cannot retain `Type`, delegates, runtime objects or GPU resources. Read through `EditorSettings.Get(path)` and edit the isolated returned value. `Apply(values, resets)` is the mutation boundary that writes atomically through Serialization and records Editor History. Subscribe to `changed` for an Editor-only consumer, and release that subscription with its owner.

The Console's Clear-on-Play preference has one identity: `Editor/Diagnostics/Console/Clear on Play`, defaulting to true. Apply, Undo and Redo update the effective backend policy; the panel does not maintain another toolbar/layout copy.

## Present a Project setting

Project runtime definitions belong to Core Settings. A drawer derives from `ProjectSettingEditor<TSetting>` and declares a `ProjectSettingPath` for placement. The catalog reads the protocol identity from `TSetting`'s `ProjectSettingDefinitionAttribute`; a drawer does not repeat a separate editable `settingId`.

The drawer edits an isolated staging copy for the current generation. Apply compares it against the composed Host + Plugin baseline. A protocol with a composer writes semantic delta; one without a composer writes a complete replacement. Reset removes the project's contribution and recomposes the baseline. Returning to the baseline removes the override instead of retaining an empty record.

One setting protocol can have multiple placements when their `TSetting` is identical. They share the staging object, dirty state, reset, apply and history transaction. Each placement path remains globally unique. Split the interface into coherent sections without fragmenting the runtime protocol solely for layout.

## Identity and use contracts

Project settings retain their `ProjectSettingId` and stable type identity. Their UI path controls placement. The built-in Project ID drawer accepts a portable lowercase namespace. Project-owned layer/tag/sorting definitions store local keys and resolve as `projectId.name`; game/plugin export identity reads the same Project ID. Build defaults and export drafts do not introduce another editable identity.

Candidate settings/drawers are constructed under TypeRegistry ownership and validated before publication. Conflicts compensate newly created instances. Retirement errors aggregate and fault the generation; diagnostics do not stand in for cleanup. Definition collections do not expose mutable internal arrays.

Do not statically retain generation-specific setting objects or subscribe without an owner. Changing a path requires migrating its current callers/data in the approved change rather than retaining an indefinite alias. Export dialogs borrow copied Build defaults as temporary drafts, not another persisted store.

## API reference

The source reference covers definitions, paths, staging objects, editor stores and Project drawer contracts. Script-facing namespaces and erasure/export rules are checked independently from the CLR surface.

[Browse Settings types](../types/editor-settings/index.md).
