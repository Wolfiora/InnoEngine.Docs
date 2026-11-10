---
title: Change Editor and project settings
description: Choose the correct settings scope and understand Apply, Reset and persistence boundaries.
uid: manual.editor-settings
kind: how-to
owners: [Inno.Editor.Settings, Inno.Editor.Panel.Settings]
contracts: [api.projects.inno-editor-settings#identity-and-use-contracts]
---
# Change Editor and project settings

Open **Edit → Settings…** to edit preferences, project configuration and authoring/build defaults in one window. Choose a scope according to who consumes the value; the shared interface does not make all settings runtime data.

## Choose a scope

| Choose | When the value belongs to |
| --- | --- |
| **Editor** | Appearance and Editor-only behavior, such as Console clearing. |
| **Project** | A strongly typed runtime/project protocol, including plugin contributions. |
| **Build** | Team authoring and build defaults, copied into individual export drafts. |

Editor preferences use `Settings.Editor.inno`, Project contributions use `Settings.Project.inno`, and Build defaults use `Settings.Build.inno`. These are separate documents and history owners. One Apply button does not promise an atomic transaction across all three files.

## Apply or reset a value

The frontend edits staging values. Apply transfers changes through the corresponding settings owner and its validation/persistence protocol. For example, the Console's **Editor → Diagnostics → Console → Clear on Play** preference defaults to enabled, and Apply/Undo/Redo update the active Console backend.

Project values start from the composed Host and Plugin baseline. Reset removes the project's contribution and recomposes that baseline. For a protocol with a composer, Apply writes the semantic difference; without a composer it writes replacement data. A value equal to the baseline does not need an empty override record.

A protocol can be presented in several sections while sharing one staged object, dirty state and history transaction. A different section title therefore does not imply a second copy of the setting.

## Keep one Project ID

**Project → Identity → Project ID** accepts the portable lowercase namespace used by project-owned identities. Layer, tag and sorting definitions store local keys and combine them with this Project ID. Export identity reads that same setting instead of asking you to maintain another Build or export-dialog identifier.

## Extend settings

See [Editor Settings](../../api/projects/inno-editor-settings.md) for definition and drawer contracts. Runtime settings remain with their runtime owner; the Editor drawer supplies presentation. Paths must remain unique, and stale generation-specific objects cannot be retained by static callbacks.
