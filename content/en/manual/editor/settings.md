---
title: Change Editor and project settings
description: Choose the correct settings scope and understand Apply, Reset and
  persistence boundaries.
uid: manual.editor-settings
kind: how-to
owners:
  - Inno.Editor.Settings
  - Inno.Editor.Panel.Settings
contracts:
  - api.projects.inno-editor-settings#identity-and-use-contracts
---
# Change Editor and project settings

Open **Edit → Settings…** to edit preferences, project configuration and authoring/build defaults in one window. Choose a scope according to who consumes the value; the shared interface does not make all settings runtime data.

## Choose a scope

| Choose | When the value belongs to |
| --- | --- |
| **Editor** | Appearance and Editor-only behavior, such as Console clearing. |
| **Project** | A strongly typed runtime/project protocol, including plugin contributions. |
| **Build** | Team authoring and build defaults, copied into individual export drafts. |

Editor preferences use `Settings.Editor.inno`, Project contributions use `Settings.Project.inno`, and Build defaults use `Settings.Build.inno`. Each owner atomically writes its own document. The window coordinates one in-process History transaction across dirty scopes; this does not provide a cross-file power-loss or process-crash commit guarantee.

## Apply or reset a value

The frontend edits staging values. Apply transfers changes through the corresponding settings owner and its validation/persistence protocol. For example, the Console's **Editor → Diagnostics → Console → Clear on Play** preference defaults to enabled, and Apply/Undo/Redo update the active Console backend.

Project values start from the composed Host and Plugin baseline. Reset removes the project's contribution and recomposes that baseline. For a protocol with a composer, Apply writes the semantic difference; without a composer it writes replacement data. A value equal to the baseline does not need an empty override record.

A protocol can be presented in several sections while sharing one staged object, dirty state and history transaction. A different section title therefore does not imply a second copy of the setting.

## Navigate without losing the draft

The movable, resizable Settings modal does not dock or collapse. Its tree and page scroll independently; search and bottom actions stay visible. Search matches page, path, label, section and description. Back/Forward tracks page changes and search entry, not one History item for each typed character.

Navigation links expand their destination once, allowing you to collapse it afterward. Parent pages list their children even when they also contain fields. Ancestor pages derive from slash-delimited paths rather than a separate central page registry.

The open window borrows current-generation definitions and isolated editing values. Its reload admission guard delays script requests and activation until the window closes; it does not discard an unsaved draft in the background.

## Apply, cancel and recover

When clean, the footer shows **OK**, which closes without writing. When effective values differ from the baseline, it shows **Cancel** and **Apply**. Cancel discards unapplied values in all three scopes. Resetting an uncommitted edit back to the baseline removes its dirty intent.

Apply writes only dirty scopes and records one **Apply Settings** Undo/Redo entry before advancing the draft baseline. A file, validation or History failure rolls back the attempted change, leaves ordinary errors in the window and sends full diagnostics to Console. You can retry or cancel.

If rollback cannot establish an intact state, retain both failures, fault History and disable Apply with a restart requirement. An unexpected drawer exception is different: quarantine the extension and cancel the temporary editor owner, releasing reload admission. Reopening waits for extension/catalog recovery rather than leaving a dead modal permanently blocking reload.

Editor Reset uses the field's declared default. Project Reset removes the override and recomposes Host/Plugin contributions. Build Reset uses project-derived defaults from project name, host target and the first imported scene. Page Reset visits descendant fields while preserving each scope's owner.

## Keep one Project ID

**Project → Identity → Project ID** accepts the portable lowercase namespace used by project-owned identities. Layer, tag and sorting definitions store local keys and combine them with this Project ID. Export identity reads that same setting instead of asking you to maintain another Build or export-dialog identifier.

## Extend settings

See [Editor Settings](../../architecture/projects/inno-editor-settings.md) for definition and drawer contracts. Runtime settings remain with their runtime owner; the Editor drawer supplies presentation. Paths must remain unique, and stale generation-specific objects cannot be retained by static callbacks.
